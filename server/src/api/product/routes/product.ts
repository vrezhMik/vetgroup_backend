import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::product.product", {
  config: {
    find: { policies: [] },
    findOne: { policies: [] },
    create: { policies: [] },
    update: { policies: [] },
    delete: { policies: [] },
  },
});
