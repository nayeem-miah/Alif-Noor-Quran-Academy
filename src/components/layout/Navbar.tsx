"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "#about", active: false },
    { label: "Curriculum", href: "#curriculum", active: false },
    { label: "Benefits", href: "#benefits", active: false },
    { label: "Testimonials", href: "#testimonials", active: false },
    { label: "FAQ", href: "#faq", active: false },
  ];


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
              <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
                
                <svg 
                  className="w-5 h-5 text-primary shrink-0 md:hidden" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                
                <div className="font-serif font-bold text-primary tracking-tight">
                  <span className="hidden md:inline text-lg lg:text-xl transition-colors group-hover:text-primary-hover">
                    Alif Noor Quran Academy
                  </span>
                  
                  <div className="md:hidden text-[10px] sm:text-xs font-bold leading-none text-primary">
                    <span>Alif Noor</span>
                    <span className="block mt-0.5">Quran Academy</span>
                  </div>
                </div>
              </Link>
            </div>

         
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

            {/* Right side CTA & Three-dot menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-background-warm shadow-premium-sm transition-all duration-200 hover:bg-primary-hover hover:shadow-premium active:scale-95"
              >
                Contact Us
              </Link>

              {/* Hamburger mobile menu trigger button */}
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex md:hidden items-center justify-center p-1.5 rounded-lg text-primary hover:bg-card-cream/60 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isOpen}
                aria-label="Open Navigation Menu"
              >
                {/* Hamburger menu icon SVG */}
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
        className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />   
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-background-warm border-l border-border-subtle z-50 shadow-premium-lg p-6 flex flex-col transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <svg 
              className="w-5 h-5 text-primary shrink-0" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span className="font-serif font-bold text-base sm:text-lg text-primary">Alif Noor Quran Academy</span>
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

    
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold tracking-wide py-2.5 px-4 rounded-xl transition-all duration-200 ${
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
            Guided by Wisdom, Rooted in Tradition.
          </p>
        </div>
      </div>
    </>
  );
}
