"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter("api::product.product", {
    config: {
        find: { policies: [] },
        findOne: { policies: [] },
        create: { policies: [] },
        update: { policies: [] },
        delete: { policies: [] },
    },
});
