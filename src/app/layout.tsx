import type { Metadata } from "next";
import { Outfit, Playfair_Display, JetBrains_Mono, Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor Academy - Premium Islamic & Quranic Education Platform",
  description: "Experience a calm, trustworthy, and modern environment to learn and memorize the Holy Quran with certified instructors.",
  keywords: ["Noor Academy", "Learn Quran Online", "Islamic Education", "Quran Memorization", "Tajweed Classes"],
  authors: [{ name: "Noor Academy Team" }],
  metadataBase: new URL("https://noor-academy.example.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${outfit.variable} ${playfair.variable} ${jetbrainsMono.variable} ${hindSiliguri.variable} min-h-screen antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-screen flex flex-col bg-background-warm text-text-main"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
