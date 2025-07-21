"use strict";
// src/plugins/vetgroup-product/server/queues/sync-items-queue.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSyncQueue = void 0;
const Bull = require("bull");
const sync_service_1 = require("../services/sync-service");
let syncQueue;
function initSyncQueue() {
    syncQueue = new Bull("sync-items", {
        redis: { host: "127.0.0.1", port: 6379 },
    });
    syncQueue.process(async (job, done) => {
        try {
            const strapi = global.strapi;
            const result = await (0, sync_service_1.syncItems)({ strapi });
            done(null, result);
        }
        catch (err) {
            console.error("❌ Sync failed:", err);
            done(err);
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
exports.initSyncQueue = initSyncQueue;
exports.default = () => syncQueue; // optional getter
