import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

const inter = Merriweather({ subsets: ["cyrillic"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Challenge",
  description: "Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
