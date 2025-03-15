import fs from "fs";
import path from "path";
import XLSX from "xlsx";
import iconv from "iconv-lite";

const filePath = path.join(__dirname, "/public/data.csv");

function readCsvFile(): Record<string, any>[] | null {
  try {
    if (!fs.existsSync(filePath)) {
      console.error("Error: File does not exist.");
      return null;
    }

    const fileBuffer = fs.readFileSync(filePath);
    const decodedData = iconv.decode(fileBuffer, "utf8");

    const workbook = XLSX.read(decodedData, { type: "string" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet);
    let previousValidName: string | null = null;

    const transformedData = jsonData
      .map((row: any, index: number) => {
        const dynamicKey = Object.keys(row).find(
          (key) => !key.startsWith("__EMPTY")
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

readCsvFile();
