const fs = require("fs");
const path = require("path");

const logFilePath = path.resolve(__dirname, "../logs/sync.log");

const logSync = (status: "success" | "fail", message: string) => {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${status.toUpperCase()} - ${message}\n`;
  fs.appendFile(logFilePath, entry, (err) => {
    if (err) console.error("❌ Failed to write log:", err);
  });
};

export default {
  syncJob: {
    task: async ({ strapi }) => {
      try {
        console.log("🔁 Cron sync started");
        const message = await strapi
          .plugin("vetgroup-product")
          .service("syncService")
          .syncItems();
        logSync("success", message);
      } catch (err) {
        console.error("❌ Cron sync error:", err);
        logSync("fail", err.message);
      }
    },
    options: {
      rule: "*/2 * * * *", // every 5 minutes
    },
  },
};
