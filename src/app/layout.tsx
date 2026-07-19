import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Stidia - Des Prussiens en Algérie | François Tron",
  description: "Découvrez la saga familiale de François Tron, l'histoire vraie d'une famille prussienne à travers trois générations et trois exils, de l'Allemagne à l'Algérie, puis vers la France.",
  icons: {
    icon: "/logo_site.png",
    apple: "/logo_site.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
