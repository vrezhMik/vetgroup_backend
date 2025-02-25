import "@/styles/main.scss";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Card from "@/components/CardComponents/Card/card.component";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "VetGroup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Card />
      </body>
    </html>
  );
}
