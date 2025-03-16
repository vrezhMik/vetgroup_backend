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

      const fileBuffer = fs.readFileSync(filePath); //originalFilename

      const jsonData = readCsvFile(fileBuffer);

      ctx.body = {
        message: "File processed successfully!",
        // data: jsonData,
      };
    } catch (error) {
      ctx.badRequest("File upload failed", { error });
    }
  },
});

export default controller;

function readCsvFile(fileBuffer: Buffer): Record<string, any>[] | null {
  try {
    const decodedData = fileBuffer.toString("utf8");
    const workbook = XLSX.read(decodedData, { type: "string" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    // Convert to JSON
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
        let price = row["__EMPTY_12"];
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
    console.log("Transformed CSV Data:", transformedData);
    return transformedData;
  } catch (error) {
    console.error("Error reading CSV file:", error);
    return null;
  }
}
