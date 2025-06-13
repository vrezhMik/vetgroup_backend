"use strict";
// path: src/plugins/vetgroup-product/server/controllers/publish.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async publishOther(ctx) {
        const products = await strapi.db
            .query("api::product.product")
            .findMany({
            select: ["id", "publishedAt"],
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
        ctx.send({
            message: `✅ Published ${count} products.`,
        });
    },
});
