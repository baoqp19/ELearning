import type { Metadata } from "next";
import { fonts_dm, manrope, roboto } from "./components/fonts";
import "./globals.css";


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
      <body className={fonts_dm.className}>{children}</body>
    </html>
  );
}
