"use strict";
// path: src/plugins/vetgroup-product/server/bootstrap.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const node_cron_1 = __importDefault(require("node-cron"));
const logDir = path.resolve(__dirname, "../logs");
const logFilePath = path.join(logDir, "sync.log");
const tmpDir = "/var/www/html/vetgroup_backend/.tmp";
const dbFile = path.join(tmpDir, "data.db");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
const logSync = (status, message) => {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${status.toUpperCase()} - ${message}\n`;
    fs.appendFileSync(logFilePath, entry);
};
exports.default = async ({ strapi }) => {
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
                        },
                    });
                    count++;
                }
                catch (err) {
                    strapi.log.warn(`❌ Failed to publish product ${product.id}: ${err.message}`);
                }
            }
            logSync("success", `✅ Published ${count} products.`);
            // 3. Backup DB — only one `temp_data_*.db` at a time
            const timestamp = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0]; // e.g. 2025-06-13-20-00-00
            const backupName = `temp_data_${timestamp}.db`;
            const backupPath = path.join(tmpDir, backupName);
            // Remove previous temp_data_*.db files
            const files = fs.readdirSync(tmpDir);
            for (const file of files) {
                if (file.startsWith("temp_data_") && file.endsWith(".db")) {
                    fs.unlinkSync(path.join(tmpDir, file));
                }
            }
            // Create new backup
            fs.copyFileSync(dbFile, backupPath);
            logSync("success", `Database backed up to ${backupPath}`);
        }
        catch (err) {
            console.error("❌ Cron error:", err);
            logSync("fail", err.message || "Unknown error");
        }
    };
    // Run every hour
    node_cron_1.default.schedule("0 * * * *", task);
    // Optional immediate run
    await task();
};
