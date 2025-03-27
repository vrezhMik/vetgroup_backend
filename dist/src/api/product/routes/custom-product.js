"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "POST",
            path: "/products/upload-csv",
            handler: "product.uploadCsv",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
