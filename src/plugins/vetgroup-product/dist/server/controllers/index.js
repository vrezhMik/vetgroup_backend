"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const sync_controller_1 = __importDefault(require("./sync-controller"));
const publish_1 = __importDefault(require("./publish"));
exports.default = {
    controller: controller_1.default,
    syncController: sync_controller_1.default,
    publish: publish_1.default
};
