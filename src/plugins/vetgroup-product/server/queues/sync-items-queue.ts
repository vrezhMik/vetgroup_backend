// src/plugins/vetgroup-product/server/queues/sync-items-queue.ts

const Bull = require("bull");
import { syncItems } from "../services/sync-service";

let syncQueue: any;

export function initSyncQueue() {
  syncQueue = new Bull("sync-items", {
    redis: { host: "127.0.0.1", port: 6379 },
  });

  syncQueue.process(async (job, done) => {
    try {
      const strapi = global.strapi;
      const result = await syncItems({ strapi });
      done(null, result);
    } catch (err) {
      console.error("❌ Sync failed:", err);
      done(err as Error);
    }
  });

  syncQueue.on("completed", (job, result) => {
    console.log("✅ Sync completed:", result);
  });

  syncQueue.on("failed", (job, err) => {
    console.error("❌ Sync failed:", err.message);
  });

  console.log("🚀 Sync queue processor initialized");

  return syncQueue;
}

export default () => syncQueue; // optional getter
