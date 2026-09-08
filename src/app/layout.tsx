import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const productSans = localFont({
  src: [
    { path: "../fonts/ProductSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/ProductSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/ProductSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/ProductSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/ProductSans-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-product-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raremark Foundation | Empowering Sickle Cell Warriors",
  description: "A non-profit organization dedicated to improving the lives of people living with or affected by Sickle Cell Disease.",
  icons: {
    icon: "/logos/raremark-foundation-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${productSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-red-500/20 selection:text-brand-red">
        {children}
      </body>
    </html>
  );
}
