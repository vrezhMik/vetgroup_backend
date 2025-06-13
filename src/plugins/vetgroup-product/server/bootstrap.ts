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
  fs.appendFile(logFilePath, entry, (err) => {
    if (err) console.error("❌ Failed to write log:", err);
  });
};

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  const task = async () => {
    try {
      console.log("🌙 Midnight cron sync started");
      const message = await strapi
        .plugin("vetgroup-product")
        .service("syncService")
        .syncItems();
      logSync("success", message);
    } catch (err) {
      console.error("❌ Midnight cron sync error:", err);
      logSync("fail", err.message);
    }
  };

  // ⏰ Run every day at 12:00 AM
cron.schedule("0 * * * *", task);
};
