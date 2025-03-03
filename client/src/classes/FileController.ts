import readXlsxFile from "read-excel-file/node";

export class FileController {
  static async read_xlsx_file(path: string): Promise<any[]> {
    const rows = await readXlsxFile(path);
    return rows;
  }
}
