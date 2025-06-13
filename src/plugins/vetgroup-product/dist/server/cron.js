"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const logFilePath = path.resolve(__dirname, "../logs/sync.log");
const logSync = (status, message) => {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${status.toUpperCase()} - ${message}\n`;
    fs.appendFile(logFilePath, entry, (err) => {
        if (err)
            console.error("❌ Failed to write log:", err);
    });
};
exports.default = {
    syncJob: {
        task: async ({ strapi }) => {
            try {
                console.log("🔁 Cron sync started");
                const message = await strapi
                    .plugin("vetgroup-product")
                    .service("syncService")
                    .syncItems();
                logSync("success", message);
            }
            catch (err) {
                console.error("❌ Cron sync error:", err);
                logSync("fail", err.message);
            }
        },
        options: {
            rule: "*/2 * * * *", // every 5 minutes
        },
    },
};
