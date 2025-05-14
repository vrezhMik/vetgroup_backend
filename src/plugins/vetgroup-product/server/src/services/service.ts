import type { Core } from "@strapi/strapi";
import axios from "axios";

const SYNC_URL = "http://87.241.165.71:8081/vet/hs/Eportal/GET_ITEMS";
const AUTH = {
  username: "001",
  password: "001",
};

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },

  async syncProductsFrom1C() {
    const res = await axios.get(SYNC_URL, {
      auth: AUTH,
    });

    const items = res.data.Items || [];

    for (const item of items) {
      const catalogName = item.CatalogName?.trim();
      const code = item.Articul?.trim();
      const name = item.Name?.trim();
      const price = parseFloat(item.Price.replace(",", "."));
      const stock = parseFloat(item.Stock.replace(",", "."));
      const backend = item.ID?.trim();

      const categoryPrefix = catalogName?.split(" ")[0] || "Other";
      const categoryMatch = await strapi.entityService.findMany(
        "api::category.category",
        {
          filters: { name: { $eq: categoryPrefix } },
          limit: 1,
        },
      );

      const categoryId =
        categoryMatch[0]?.id ??
        (
          await strapi.entityService.findMany("api::category.category", {
            filters: { name: "Other" },
            limit: 1,
          })
        )?.[0]?.id;

      const existing = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: { code: { $eq: code } },
          limit: 1,
        },
      );

      const productData = {
        name: catalogName,
        code,
        description: name,
        price,
        stock,
        backend,
        category: categoryId,
      };

      if (existing.length > 0) {
        await strapi.entityService.update(
          "api::product.product",
          existing[0].id,
          {
            data: productData,
          },
        );
      } else {
        await strapi.entityService.create("api::product.product", {
          data: productData,
        });
      }
    }

    return { success: true, count: items.length };
  },
});

export default service;
