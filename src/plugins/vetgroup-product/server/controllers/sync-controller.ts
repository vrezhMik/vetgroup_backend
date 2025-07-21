

import { initSyncQueue } from "../queues/sync-items-queue";

const syncController = {
  async syncWith1C(ctx) {
    try {
      console.log("🛰️ Sync route hit");
    const syncQueue = initSyncQueue();

      await syncQueue.add({}); 
      ctx.send({ message: "✅ Sync job enqueued successfully" });
    } catch (err: any) {
      console.error("❌ Sync error:", err);
      ctx.throw(500, err.message || "Failed to enqueue sync");
    }
  },
};

export default syncController;
