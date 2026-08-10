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
  title: "Alif Online Quran Academy | অনলাইন কুরআন ও আরবি শিক্ষা",
  description: "Alif Online Quran Academy-এ অভিজ্ঞ কুরআন শিক্ষকের মাধ্যমে শিশুদের অনলাইনে কুরআন, তাজবিদ, আরবি ও ইসলামী শিক্ষা শেখানো হয়।",
  keywords: [
    "Alif Online Quran Academy",
    "আলিফ অনলাইন কুরআন একাডেমি",
    "Online Quran Academy",
    "Online Quran Classes",
    "অনলাইন কুরআন শিক্ষা",
    "শিশুদের কুরআন শিক্ষা",
    "অনলাইন আরবি শিক্ষা",
    "কুরআন তাজবিদ",
    "Online Quran Classes for Kids"
  ],
  authors: [{ name: "Alif Online Quran Academy Team" }],
  metadataBase: new URL("https://alifonline-academy.com"),
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="bn"
      className={`${outfit.variable} ${playfair.variable} ${jetbrainsMono.variable} ${hindSiliguri.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-screen flex flex-col bg-background-warm text-text-main"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
