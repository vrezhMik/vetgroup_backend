// path: src/plugins/vetgroup-product/server/bootstrap.ts

import type { Core } from "@strapi/strapi";
import * as fs from "fs";
import * as path from "path";
import cron from "node-cron";

const logDir = path.resolve(__dirname, "../logs");
const logFilePath = path.join(logDir, "sync.log");
const tmpDir = "/var/www/html/vetgroup_backend/.tmp";
const dbFile = path.join(tmpDir, "data.db");
import { initSyncQueue } from "./queues/sync-items-queue";

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logSync = (status: "success" | "fail", message: string) => {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${status.toUpperCase()} - ${message}\n`;
  fs.appendFileSync(logFilePath, entry);
};

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  // const task = async () => {
  //   try {
  //     console.log("⏰ Cron task started");

  //     // 1. Sync items
  //     const syncMessage = await strapi
  //       .plugin("vetgroup-product")
  //       .service("syncService")
  //       .syncItems();
  //     logSync("success", `Sync complete: ${syncMessage}`);

  //     // 2. Backup DB — only one `temp_data_*.db` at a time
  //     const timestamp = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0]; // e.g. 2025-06-13-20-00-00
  //     const backupName = `temp_data_${timestamp}.db`;
  //     const backupPath = path.join(tmpDir, backupName);

  //     // Remove previous temp_data_*.db files
  //     const files = fs.readdirSync(tmpDir);
  //     for (const file of files) {
  //       if (file.startsWith("temp_data_") && file.endsWith(".db")) {
  //         fs.unlinkSync(path.join(tmpDir, file));
  //       }
  //     }

  //     // Create new backup
  //     fs.copyFileSync(dbFile, backupPath);
  //     logSync("success", `Database backed up to ${backupPath}`);
  //   } catch (err: any) {
  //     console.error("❌ Cron error:", err);
  //     logSync("fail", err.message || "Unknown error");
  //   }
  // };

  // Run every hour
  const task = async () => {
  try {
    console.log("⏰ Cron task started");
const syncQueue = initSyncQueue();
    await syncQueue.add({});
    logSync("success", `Sync job enqueued to Bull queue`);

    const timestamp = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];
    const backupName = `temp_data_${timestamp}.db`;
    const backupPath = path.join(tmpDir, backupName);

    const files = fs.readdirSync(tmpDir);
    for (const file of files) {
      if (file.startsWith("temp_data_") && file.endsWith(".db")) {
        fs.unlinkSync(path.join(tmpDir, file));
      }
    }

    fs.copyFileSync(dbFile, backupPath);
    logSync("success", `Database backed up to ${backupPath}`);
  } catch (err: any) {
    console.error("❌ Cron error:", err);
    logSync("fail", err.message || "Unknown error");
  }
};

  cron.schedule("0 * * * *", task);

  // await task();
};
