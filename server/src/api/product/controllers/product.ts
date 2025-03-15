import fs from "fs";
import path from "path";
import XLSX from "xlsx";
import iconv from "iconv-lite";
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async uploadCsv(ctx) {
      try {
        const { files } = ctx.request;

        if (!files || !files.file) {
          strapi.log.error("No file uploaded.");
          return ctx.badRequest("No file uploaded");
        }

        // Ensure we get a single file, not an array
        const uploadedFile = Array.isArray(files.file)
          ? files.file[0]
          : files.file;

        const filePath = uploadedFile.filepath || null;

        if (!filePath) {
          strapi.log.error("File path is missing.");
          return ctx.badRequest("File path is missing");
        }

        // Read and decode CSV
        const fileBuffer = fs.readFileSync(filePath);
        const decodedData = iconv.decode(fileBuffer, "utf8");
        const workbook = XLSX.read(decodedData, { type: "string" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Remove all existing products before inserting new ones
        await strapi.db.query("api::product.product").deleteMany({ where: {} });

        let previousValidName: string | null = null;

        // Process CSV data and insert into Strapi
        const transformedData = jsonData
          .map((row: any, index: number) => {
            const dynamicKey = Object.keys(row).find(
              (key) => !key.startsWith("__EMPTY")
            );
            if (!dynamicKey) return null;

            let rawCode = row[dynamicKey];
            let rawDescription = row["__EMPTY_1"] || "";
            let price = row["__EMPTY_12"];

            // ✅ **Ensure 'code' is always a string**
            const formattedCode = rawCode ? String(rawCode).trim() : "Unknown";

            if (
              typeof formattedCode === "string" &&
              formattedCode.includes(". ")
            ) {
              previousValidName = formattedCode;
              return null;
            }

            if (!previousValidName && index === 0) {
              previousValidName = "Unknown";
            }

            let name = previousValidName;
            let cleanedDescription = rawDescription
              .replace(/^\S+\s+/, "")
              .replace(/\s*\d+([\s,]\d+)*$/g, "")
              .trim();

            // ✅ **Ensure 'price' is also a string**
            const formattedPrice = price ? String(price).trim() : "";

            return {
              name,
              code: formattedCode, // Convert to string
              description: cleanedDescription,
              price: formattedPrice, // Convert to string
            };
          })
          .filter(Boolean);

        // ✅ **Handle duplicate codes**
        for (const product of transformedData) {
          const existingProduct = await strapi.db
            .query("api::product.product")
            .findOne({
              where: { code: product.code },
            });

          if (existingProduct) {
            // **If product exists, update it**
            await strapi.entityService.update(
              "api::product.product",
              existingProduct.id,
              { data: product }
            );
          } else {
            // **If product does not exist, create it**
            await strapi.entityService.create("api::product.product", {
              data: product,
            });
          }
        }

        return ctx.send({ message: "Products uploaded successfully!" });
      } catch (error) {
        console.error("CSV Upload Error:", error);
        return ctx.internalServerError("Error processing CSV file");
      }
    },
  })
);
