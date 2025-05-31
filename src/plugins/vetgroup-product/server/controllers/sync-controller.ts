export default {
  async syncWith1C(ctx: any) {
    try {
      console.log("🛰️ Sync route hit");

      const message = await strapi
        .plugin("vetgroup-product")
        .service("syncService")
        .syncItems();

      ctx.send({ message });
    } catch (err) {
      console.error("❌ Sync error:", err);
      ctx.throw(500, err.message);
    }
  },
};
