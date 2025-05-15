import axios from "axios";

export default ({ strapi }) => ({
  async syncItems() {
    const { data } = await axios.get(
      "http://87.241.165.71:8081/vet/hs/Eportal/GET_ITEMS",
      {
        auth: {
          username: "001",
          password: "001",
        },
      },
    );

    const items = data.Items;

    let createdCount = 0;
    let updatedCount = 0;

    for (const item of items) {
      const catalogName = item.CatalogName;
      const categoryName = catalogName?.split(" ")[0]?.trim() || "Other";

      const category = await strapi.db
        .query("api::category.category")
        .findOne({ where: { title: categoryName } });

      const fallbackCategory = await strapi.db
        .query("api::category.category")
        .findOne({ where: { title: "Other" } });

      const payload = {
        name: catalogName,
        code: item.Articul,
        description: item.Name,
        backendId: item.ID,
        stock: parseInt(item.Stock.replace(",", "."), 10) || 0,
        price: parseFloat(item.Price.replace(",", ".")) || 0,
        category: category?.id || fallbackCategory?.id,
      };

      const existing = await strapi.db
        .query("api::product.product")
        .findOne({ where: { backendId: item.ID } });

      if (existing) {
        await strapi.entityService.update("api::product.product", existing.id, {
          data: payload,
        });
        updatedCount++;
      } else {
        await strapi.entityService.create("api::product.product", {
          data: payload,
        });
        createdCount++;
      }
    }

    return `Sync with 1C completed successfully. Created: ${createdCount}, Updated: ${updatedCount}`;
  },
});
