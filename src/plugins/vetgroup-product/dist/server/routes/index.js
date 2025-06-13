"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const content_api_1 = __importDefault(require("./content-api"));
const routes = {
    'content-api': {
        type: 'content-api',
        routes: content_api_1.default,
    },
};
exports.default = routes;
