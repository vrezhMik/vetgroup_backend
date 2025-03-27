import type { Core } from "@strapi/strapi";
import fs from "fs";
import * as XLSX from "xlsx";

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    ctx.body = { message: "Welcome to Vet Group Products API!" };
  },

  async uploadFile(ctx) {
    try {
      if (!ctx.request.files || !ctx.request.files.file) {
        return ctx.badRequest("No file uploaded");
      }

      const { file } = ctx.request.files;
      const filePath = file.filepath;

      // Read file as buffer
      const fileBuffer = fs.readFileSync(filePath);

      // Process CSV data
      let jsonData = readCsvFile(fileBuffer);

      if (!jsonData || jsonData.length === 0) {
        return ctx.badRequest("CSV processing failed or empty file.");
      }

      // ✅ Remove all existing products before inserting new ones
      await strapi.db.query("api::product.product").deleteMany({
        where: {},
      });

      // ✅ Remove duplicates from jsonData before inserting
      const uniqueProducts = [];
      const seenCodes = new Set();

      jsonData.forEach((product) => {
        if (!seenCodes.has(product.code)) {
          seenCodes.add(product.code);
          uniqueProducts.push(product);
        }
      });

      // ✅ Insert unique product entries
      const createdProducts = await Promise.all(
        uniqueProducts.map((product) =>
          strapi.entityService.create("api::product.product", {
            data: {
              name: String(product.name),
              code: String(product.code),
              description: String(product.description),
              price: String(product.price),
              image: null, // No image available
              publishedAt: new Date(), // ✅ Ensure it's published
            },
          }),
        ),
      );

      ctx.body = {
        message: "File processed and products stored successfully!",
        total: createdProducts.length,
      };
    } catch (error) {
      ctx.badRequest("File upload or database operation failed", { error });
    }
  },
});

export default controller;

function parsePrice(price: string): number {
  if (!price) return 0;
  let cleanPrice = price.toString().replace(/\s+/g, "");
  cleanPrice = cleanPrice.replace(/,/g, ".");
  return Math.floor(parseFloat(cleanPrice)) || 0;
}

function readCsvFile(fileBuffer: Buffer): Record<string, any>[] | null {
  try {
    const decodedData = fileBuffer.toString("utf8");
    const workbook = XLSX.read(decodedData, { type: "string" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet);
    let previousValidName: string | null = null;

    const transformedData = jsonData
      .map((row: any, index: number) => {
        const dynamicKey = Object.keys(row).find(
          (key) => !key.startsWith("__EMPTY"),
        );

        if (!dynamicKey) {
          console.warn("Skipping row: No valid dynamic key found.");
          return null;
        }

        let rawCode = row[dynamicKey];
        let rawDescription = row["__EMPTY_1"] || "";
        let rawPrice = row["__EMPTY_12"] || "";

        let price = parsePrice(rawPrice);

        if (
          typeof rawCode === "string" &&
          rawCode.includes(". ") &&
          !rawCode.match(/^\d+$/)
        ) {
          previousValidName = rawCode;
          return null;
        }

        if (!previousValidName && index === 0) {
          previousValidName = "A. Bonmascota";
        }

        let name = previousValidName || "Unknown";

        let cleanedDescription = rawDescription
          .replace(/^\S+\s+/, "")
          .replace(/\s*\d+([\s,]\d+)*$/g, "")
          .trim();

        return {
          name,
          code: rawCode,
          description: cleanedDescription,
          price,
        };
      })
      .filter(Boolean);

    return transformedData;
  } catch (error) {
    console.error("Error reading CSV file:", error);
    return null;
  }
}
