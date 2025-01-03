import type { Metadata } from "next";

import "./globals.css";
import { manrope } from "./utils";
import Siderbar from "./components/layouts/Siderbar";


export const metadata: Metadata = {
  title: "Next-Elearnig",
  description: "Tối ưu hoá SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
          <Siderbar />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
