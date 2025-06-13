import type { Core } from "@strapi/strapi";
import * as fs from "fs";
import * as path from "path";
import cron from "node-cron";

const logDir = path.resolve(__dirname, "../logs");
const logFilePath = path.join(logDir, "sync.log");

// Ensure log folder exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logSync = (status: "success" | "fail", message: string) => {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${status.toUpperCase()} - ${message}\n`;
  fs.appendFileSync(logFilePath, entry);
};

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  const task = async () => {
    try {
      console.log("⏰ Cron task started");

      // 1. Sync items
      const syncMessage = await strapi
        .plugin("vetgroup-product")
        .service("syncService")
        .syncItems();
      logSync("success", `Sync complete: ${syncMessage}`);

      // 2. Inline publish logic
      const products = await strapi.db
        .query("api::product.product")
        .findMany({
          select: ["id"],
          where: { publishedAt: null },
        });

      let count = 0;
      for (const product of products) {
        try {
          await strapi.entityService.update("api::product.product", product.id, {
            data: {
              publishedAt: new Date().toISOString(),
            }as any,
          });
          count++;
        } catch (err) {
          strapi.log.warn(`❌ Failed to publish product ${product.id}: ${err.message}`);
        }
      }

      logSync("success", `✅ Published ${count} products.`);

      // 3. Backup DB
      const dbFile = "/var/www/html/vetgroup_backend/.tmp/data.db";
      const timestamp = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];
      const backupFile = `/var/www/html/vetgroup_backend/.tmp/data_${timestamp}.db`;

      fs.copyFileSync(dbFile, backupFile);
      logSync("success", `Database backed up to ${backupFile}`);
    } catch (err: any) {
      console.error("❌ Cron error:", err);
      logSync("fail", err.message || "Unknown error");
    }
  };

  // Run every 5 minutes
cron.schedule("0 * * * *", task);

  // Optional: run once on startup for testing
  await task();
};
