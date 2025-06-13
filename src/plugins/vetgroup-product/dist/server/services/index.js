"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const sync_service_1 = __importDefault(require("./sync-service"));
exports.default = {
    service: service_1.default,
    syncService: sync_service_1.default,
};
