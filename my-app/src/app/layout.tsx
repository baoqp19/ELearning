import type { Metadata } from "next";

import "./globals.css";
import { manrope } from "../utils";
import Siderbar from "../components/layouts/Siderbar";
import { ClerkProvider } from "@clerk/nextjs";


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
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
