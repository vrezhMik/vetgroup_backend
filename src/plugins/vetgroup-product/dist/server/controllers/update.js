"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async update(ctx) {
        const { id } = ctx.params;
        const { data } = ctx.request.body;
        try {
            const updatedEntry = await strapi.entityService.update('api::product.product', id, { data });

            ctx.send({ data: updatedEntry });
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
});
