"use strict";
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
// Ensure log folder exists
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
const logSync = (status, message) => {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${status.toUpperCase()} - ${message}\n`;
    fs.appendFile(logFilePath, entry, (err) => {
        if (err)
            console.error("❌ Failed to write log:", err);
    });
};
exports.default = async ({ strapi }) => {
    const task = async () => {
        try {
            console.log("🌙 Midnight cron sync started");
            const message = await strapi
                .plugin("vetgroup-product")
                .service("syncService")
                .syncItems();
            logSync("success", message);
        }
        catch (err) {
            console.error("❌ Midnight cron sync error:", err);
            logSync("fail", err.message);
        }
    };
    // ⏰ Run every day at 12:00 AM
    node_cron_1.default.schedule("0 * * * *", task);
};
