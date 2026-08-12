"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <footer className="w-full border-t border-border-subtle bg-background-warm py-8 sm:py-12 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="hidden md:flex items-center justify-between">
            <div className="font-serif text-lg font-bold text-primary">
              Darul Hamida Quran Academy
            </div>
            
            <div className="text-[11px] lg:text-xs text-text-secondary">
              {t(
                `© ${new Date().getFullYear()} দারুল হামিদা কুরআন একাডেমি। প্রজ্ঞা ও ঐতিহ্যের আদর্শে পরিচালিত।`,
                `© ${new Date().getFullYear()} Darul Hamida Quran Academy. Guided by Wisdom, Rooted in Tradition.`
              )}
            </div>
            
            <div className="flex items-center gap-4 text-[11px] lg:text-xs font-medium text-text-secondary">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {t("গোপনীয়তা নীতি", "Privacy Policy")}
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {t("ব্যবহারের শর্তাবলী", "Terms of Service")}
              </Link>
            </div>
          </div>

          <div className="flex md:hidden flex-col items-center gap-4 text-center">
            
            <div className="font-serif text-lg font-bold text-primary">
              Darul Hamida Quran Academy
            </div>
            
            <div className="text-xs text-text-secondary max-w-xs leading-relaxed font-medium">
              {t(
                `© ${new Date().getFullYear()} দারুল হামিদা কুরআন একাডেমি। প্রজ্ঞা ও ঐতিহ্যের আদর্শে পরিচালিত।`,
                `© ${new Date().getFullYear()} Darul Hamida Quran Academy. Guided by Wisdom, Rooted in Tradition.`
              )}
            </div>
            
            <div className="flex items-center gap-5 text-xs font-semibold text-text-secondary mt-2">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {t("গোপনীয়তা নীতি", "Privacy Policy")}
              </Link>
              <span className="text-border-subtle">|</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {t("ব্যবহারের শর্তাবলী", "Terms of Service")}
              </Link>
            </div>
          </div>

        </div>
      </footer>


      <Link 
        href="https://wa.me/8801852077834"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-2xl transition-all duration-300 hover:bg-[#1ebd54] hover:scale-110 hover:-rotate-6 active:scale-95 cursor-pointer animate-pulse-green animate-float-slow"
      >
        <svg 
          className="w-7 h-7 fill-current shrink-0" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.905-6.99C16.488 1.876 14.012.842 11.371.841 5.937.841 1.512 5.26 1.508 10.7c-.001 1.737.457 3.43 1.32 4.938L1.86 20.198l4.787-1.254zM17.487 14.4c-.326-.163-1.93-.953-2.229-1.062-.3-.11-.518-.163-.735.163-.218.327-.844 1.062-1.034 1.28-.19.218-.38.245-.706.082-1.157-.578-2.062-1.012-2.883-2.422-.22-.377.22-.35.63-.1.368-.224.408-.27.61-.408.203-.136.102-.27-.051-.571-.153-.3-.735-1.77-.999-2.408-.266-.643-.538-.553-.735-.559-.19-.007-.408-.008-.626-.008-.218 0-.571.082-.87.408-.3.326-1.14 1.116-1.14 2.72 0 1.605 1.169 3.159 1.328 3.377.16.218 2.3 3.513 5.572 4.928.778.337 1.387.538 1.86.689.782.248 1.493.213 2.056.129.627-.094 1.93-.79 2.2-1.554.273-.764.273-1.417.19-1.554-.082-.137-.3-.218-.626-.38z"/>
        </svg>
      </Link>
    </>
  );
}
