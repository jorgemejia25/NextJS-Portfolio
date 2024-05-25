import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jorge Mejía",
  description: "Fullstack Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
