
import axios from "axios";
import { publishUnpublishedProducts } from "./publish"
interface Item {
  CatalogName: string;
  Articul: string;
  Name: string;
  ID: string;
  Stock?: string;
  Price?: string;
  pack_price?: string;
}

export async function syncItems({ strapi }: { strapi: any }) {
  const { data } = await axios.get("http://87.241.165.71:8081/web/hs/Eportal/GET_ITEMS", {
    auth: { username: "001", password: "001" },
  });

  const items: Item[] = data.Items;
  let createdCount = 0;
  let updatedCount = 0;
  let publishedCount = 0;

  const token = process.env.STRAPI_ADMIN_JWT?.trim();
  if (!token) throw new Error("Missing STRAPI_ADMIN_JWT");

  const categories = await strapi.db.query("api::category.category").findMany({
    select: ["id", "title"],
  });

  const fallbackCategory = categories.find(cat => cat.title.toLowerCase() === "other");

  const publishProduct = async (documentId?: string) => {
    if (!documentId) {
      console.warn("⚠️ Skipping publish — documentId is undefined");
      return;
    }

    try {
      await axios.post(
        "https://vetgroup.am/content-manager/collection-types/api::product.product/actions/bulkPublish",
        { documentIds: [documentId] },
        {
          headers: {
            "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(`✅ Published: ${documentId}`);
      publishedCount++;
    } catch (err: any) {
      console.warn(`⚠️ Failed to publish ${documentId}:`, err.response?.data || err.message);
    }
  };

  for (const item of items) {
    const catalogName = item.CatalogName || "";

    const matchedCategory = categories.find(cat =>
      catalogName.toLowerCase().includes(cat.title.toLowerCase())
    );

    const incomingStock = Number(
      item.Stock?.toString().replace(",", ".").replace(/\s/g, "") || "0"
    );
    console.log(`📦 ID: ${item.ID} | Stock raw: ${item.Stock} → parsed: ${incomingStock}`);

    const payload: Record<string, any> = {
      name: catalogName,
      code: item.Articul,
      description: item.Name,
      backendId: item.ID,
      price: item.Price ? parseFloat(item.Price.replace(",", ".")) : 0,
      category: matchedCategory?.id || fallbackCategory?.id,
      stock: incomingStock,
      pack_price: item.pack_price
        ? parseInt(item.pack_price.replace(",", "."), 10)
        : 0,
    };

    const existing = await strapi.db.query("api::product.product").findOne({
      where: { backendId: item.ID },select: ["id", "documentId"]
    });

    if (existing) {
      console.log("📤 Updating product:", existing.id, payload);

      const updated = await strapi.entityService.update("api::product.product", existing.id, {
        data: payload,
      });

      console.log("✅ Updated entity stock is now:", updated.stock);
      await publishProduct(existing.documentId);
      updatedCount++;
    } else {
      const created = await strapi.entityService.create("api::product.product", {
        data: payload,
        populate: ["documentId"]
      });

      await publishProduct(created.documentId);
      createdCount++;
    }
  }
await publishUnpublishedProducts({ strapi });
  return `✅ Sync finished: ${createdCount} created, ${updatedCount} updated, ${publishedCount} published`;
}
