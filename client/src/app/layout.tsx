// app/layout.tsx
import "@/styles/main.scss";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Card from "@/components/CardComponents/Card/card.component";
import { Montserrat } from "next/font/google";
import { DataProvider } from "@/context/DocumentContext";
import { FileController } from "@/classes/FileController";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VetGroup",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productData = await FileController.read_xlsx_file("./public/vet.xlsx");
  console.log("Here:", productData);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DataProvider data={productData}>
          {children}
          <Card />
        </DataProvider>
      </body>
    </html>
  );
}
