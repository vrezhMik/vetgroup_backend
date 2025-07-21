"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sync_items_queue_1 = require("../queues/sync-items-queue");
const syncController = {
    async syncWith1C(ctx) {
        try {
            console.log("🛰️ Sync route hit");
            const syncQueue = (0, sync_items_queue_1.initSyncQueue)();
            await syncQueue.add({}); // enqueue the job
            ctx.send({ message: "✅ Sync job enqueued successfully" });
        }
        catch (err) {
            console.error("❌ Sync error:", err);
            ctx.throw(500, err.message || "Failed to enqueue sync");
        }
    },
};
exports.default = syncController;
