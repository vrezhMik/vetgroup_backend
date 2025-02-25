import readXlsxFile from "read-excel-file/node";

export class FileController {
  static read_xlsx_file(path: string): void {
    console.log(path);
    readXlsxFile(path).then((rows) => {
      console.log(rows);
    });
  }
}
