export default ({ strapi }) => ({
  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    try {
      const updatedEntry = await strapi.entityService.update(
        'plugin::vetgroup-product.product',
        id,
        { data }
      );

      ctx.send({ data: updatedEntry });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
