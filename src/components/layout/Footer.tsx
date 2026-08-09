import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-border-subtle bg-background-warm py-8 sm:py-12 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="hidden md:flex items-center justify-between">
            <div className="font-serif text-lg font-bold text-primary">
              Alif Noor Quran Academy
            </div>
            
         
            <div className="text-[11px] lg:text-xs text-text-secondary">
              © {new Date().getFullYear()} Alif Noor Quran Academy. Guided by Wisdom, Rooted in Tradition.
            </div>
            
            <div className="flex items-center gap-4 text-[11px] lg:text-xs font-medium text-text-secondary">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

       
          <div className="flex md:hidden flex-col items-center gap-4 text-center">
            
            <div className="font-serif text-lg font-bold text-primary">
              Alif Noor Quran Academy
            </div>
            
            <div className="text-xs text-text-secondary max-w-xs leading-relaxed font-medium">
              © {new Date().getFullYear()} Alif Noor Quran Academy. <br />Guided by Wisdom, Rooted in Tradition.
            </div>
            
            <div className="flex items-center gap-5 text-xs font-semibold text-text-secondary mt-2">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-border-subtle">|</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </footer>


      <button 
        type="button"
        aria-label="Open Chat Support"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-lg transition-all duration-300 hover:bg-[#1ebd54] hover:scale-105 hover:shadow-xl active:scale-95"
      >
        <svg 
          className="w-6 h-6 fill-current shrink-0" 
          viewBox="0 0 24 24"
        >
         
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
        </svg>
      </button>
    </>
  );
}
