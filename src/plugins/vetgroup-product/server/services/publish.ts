export async function publishUnpublishedProducts({ strapi }) {
  const products = await strapi.db
    .query("api::product.product")
    .findMany({
      select: ["id"],
      where: { publishedAt: null },
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
    } catch (err) {
      strapi.log.warn(`❌ Failed to publish product ${product.id}: ${err.message}`);
    }
  }

  strapi.log.info(`✅ Auto-published ${count} products after sync.`);
  return count; // ✅ return this!
}
