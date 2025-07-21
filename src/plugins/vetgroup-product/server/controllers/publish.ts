import { publishUnpublishedProducts } from '../services/publish';

export default ({ strapi }) => ({
  async publishOther(ctx) {
    const count = await publishUnpublishedProducts({ strapi });
    ctx.send({ message: `✅ Published ${count} products.` });
  },
});
