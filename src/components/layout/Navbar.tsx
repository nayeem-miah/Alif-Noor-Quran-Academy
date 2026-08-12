"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t("হোম", "Home"), href: "/", active: activeSection === "home" },
    { label: t("পরিচিতি", "About"), href: "#about", active: activeSection === "about" },
    { label: t("পাঠ্যক্রম", "Curriculum"), href: "#curriculum", active: activeSection === "curriculum" },
    { label: t("সুবিধাসমূহ", "Benefits"), href: "#benefits", active: activeSection === "benefits" },
    { label: t("মতামত", "Testimonials"), href: "#testimonials", active: activeSection === "testimonials" },
    { label: t("প্রাইসিং", "Pricing"), href: "#pricing", active: activeSection === "pricing" },
    { label: t("প্রশ্নোত্তর", "FAQ"), href: "#faq", active: activeSection === "faq" },
    { label: t("যোগাযোগ", "Contact"), href: "#contact", active: activeSection === "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["about", "curriculum", "benefits", "testimonials", "pricing", "faq", "contact"];

    
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px",
        }
      );
      
      observer.observe(el);
      return { observer, el };
    });

    const handleScroll = () => {
      if (window.scrollY < 180) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-background-warm/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  src="/logo.png"
                  alt="Darul Hamida Logo"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg shadow-premium-sm transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="font-serif font-bold text-primary tracking-tight">
                  <span className="hidden lg:inline text-base xl:text-lg transition-colors group-hover:text-primary-hover">
                    {t("দারুল হামিদা", "Darul Hamida")}
                  </span>
                  
                  <div className="lg:hidden text-[10px] sm:text-xs font-bold leading-none text-primary">
                    <span>{t("দারুল হামিদা", "Darul Hamida")}</span>
                    <span className="block mt-0.5">{t("কুরআন একাডেমি", "Quran Academy")}</span>
                  </div>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                    item.active
                      ? "text-primary border-b-2 border-accent pb-[2px]"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side CTA, Language Toggle & Hamburger Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher Button */}
              <button
                onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-border-subtle bg-white/40 hover:bg-card-cream/60 transition-all duration-200 text-[10px] sm:text-xs font-bold text-primary cursor-pointer shadow-premium-sm"
                title={language === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
              >
                <span>🌐</span>
                <span>{language === "bn" ? "English" : "বাংলা"}</span>
              </button>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-background-warm shadow-premium-sm transition-all duration-200 hover:bg-primary-hover hover:shadow-premium active:scale-95"
              >
                {t("যোগাযোগ", "Contact")}
              </Link>

              {/* Hamburger mobile menu trigger button */}
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex lg:hidden items-center justify-center p-1.5 rounded-lg text-primary hover:bg-card-cream/60 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isOpen}
                aria-label="Open Navigation Menu"
              >
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />   

      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-background-warm border-l border-border-subtle z-50 shadow-premium-lg p-6 flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Darul Hamida Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain rounded-md"
            />
            <span className="font-serif font-bold text-sm text-primary">{t("দারুল হামিদা একাডেমি", "Darul Hamida Academy")}</span>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="p-1 rounded-lg text-text-secondary hover:bg-card-cream/60 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close Navigation Menu"
          >
            <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-3 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold tracking-wide py-2 px-4 rounded-xl transition-all duration-200 ${
                item.active
                  ? "bg-primary text-background-warm shadow-premium-sm"
                  : "text-text-secondary hover:bg-card-cream/50 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto text-center border-t border-border-subtle pt-6">
          <p className="text-[10px] text-text-secondary">
            {t("জ্ঞানের আলোয় পথ চলা, ঐতিহ্যের শেকড়ে গড়া।", "Guided by Wisdom, Rooted in Tradition.")}
          </p>
        </div>
      </div>
    </>
  );
}
