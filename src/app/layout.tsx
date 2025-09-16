import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FashionHub - Trendy Men's & Women's Clothing",
  description: "Discover the latest fashion trends for men and women. Quality clothing at affordable prices with fast shipping and excellent customer service.",
  keywords: "fashion, clothing, men's clothing, women's clothing, trendy, affordable, online shopping",
  authors: [{ name: "FashionHub Team" }],
  openGraph: {
    title: "FashionHub - Trendy Men's & Women's Clothing",
    description: "Discover the latest fashion trends for men and women. Quality clothing at affordable prices.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
