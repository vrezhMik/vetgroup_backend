"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const publish_1 = require("../services/publish");
exports.default = ({ strapi }) => ({
    async publishOther(ctx) {
        const count = await (0, publish_1.publishUnpublishedProducts)({ strapi });
        ctx.send({ message: `✅ Published ${count} products.` });
    },
});
