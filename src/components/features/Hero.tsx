import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-10 sm:py-16 md:py-24 flex items-center justify-center relative overflow-x-hidden">
      <div className="absolute right-0 top-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none -z-10 animate-fade-in" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
    
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 animate-fade-in-up">
            {/* Elegant Bismillah */}
            <div className="text-[11px] sm:text-xs font-serif font-medium tracking-wider text-text-secondary mb-3.5 select-none">
              বিসমিল্লাহির রাহমানির রাহিম
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E3DFD5] text-[#A67C1E] text-xs sm:text-sm font-semibold tracking-wide shadow-premium-sm mb-5 sm:mb-6">
              শিশুদের জন্য অনলাইন কুরআন শিক্ষা
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-dark leading-tight">
              শিশুদের জন্য অনলাইন <br />
              <span className="text-primary block sm:inline mt-1 sm:mt-0">কুরআন</span> ও <span className="text-accent">আরবি শিক্ষক</span>
            </h1>

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base max-w-lg mt-4 sm:mt-5 leading-relaxed font-medium">
              আসসালামু আলাইকুম — একজন হাফিজ, ক্বারী ও অভিজ্ঞ কুরআন শিক্ষকের কাছ থেকে আপনার সন্তানকে সঠিক তাজউয়ীদ ও আন্তরিকতার সাথে কুরআন শেখান।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full mt-7 sm:mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-xs sm:text-sm font-semibold text-background-warm shadow-premium transition-all duration-200 hover:bg-primary-hover active:scale-95 w-full sm:w-auto text-center"
              >
                ফ্রি ট্রায়াল ক্লাস বুক করুন
                <svg 
                  className="w-4 h-4 ml-2 shrink-0 fill-none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="https://wa.me/..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#D9A441] bg-[#FAF8F2] px-6 py-3.5 text-xs sm:text-sm font-semibold text-primary transition-all duration-200 hover:bg-card-cream active:scale-95 w-full sm:w-auto shadow-premium-sm text-center"
              >
                {/* WhatsApp SVG Icon */}
                <svg className="w-4.5 h-4.5 mr-2 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.905-6.99C16.488 1.876 14.012.842 11.371.841 5.937.841 1.512 5.26 1.508 10.7c-.001 1.737.457 3.43 1.32 4.938L1.86 20.198l4.787-1.254zM17.487 14.4c-.326-.163-1.93-.953-2.229-1.062-.3-.11-.518-.163-.735.163-.218.327-.844 1.062-1.034 1.28-.19.218-.38.245-.706.082-1.157-.578-2.062-1.012-2.883-2.422-.22-.377.22-.35.63-.1.368-.224.408-.27.61-.408.203-.136.102-.27-.051-.571-.153-.3-.735-1.77-.999-2.408-.266-.643-.538-.553-.735-.559-.19-.007-.408-.008-.626-.008-.218 0-.571.082-.87.408-.3.326-1.14 1.116-1.14 2.72 0 1.605 1.169 3.159 1.328 3.377.16.218 2.3 3.513 5.572 4.928.778.337 1.387.538 1.86.689.782.248 1.493.213 2.056.129.627-.094 1.93-.79 2.2-1.554.273-.764.273-1.417.19-1.554-.082-.137-.3-.218-.626-.38z"/>
                </svg>
                WhatsApp
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-8 sm:mt-10">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-background-warm bg-card-cream flex items-center justify-center text-[9px] font-bold text-primary shadow-premium-sm">N</div>
                <div className="w-8 h-8 rounded-full border-2 border-background-warm bg-primary flex items-center justify-center text-[9px] font-bold text-background-warm shadow-premium-sm">A</div>
                <div className="w-8 h-8 rounded-full border-2 border-background-warm bg-accent flex items-center justify-center text-[9px] font-bold text-secondary-dark shadow-premium-sm">Q</div>
              </div>
              <span className="text-xs sm:text-sm text-text-secondary font-semibold">১০০+ অভিভাবক সন্তুষ্ট</span>
            </div>

          </div>

          {/* Right profile image column */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2 animate-fade-in relative">
            <div className="relative group cursor-pointer">
              
              {/* Outer Pulsing Aura Glow */}
              <div className="absolute inset-0 -m-3 sm:-m-4 md:-m-5 rounded-full bg-[#D9A441]/15 filter blur-xl animate-pulse-glow pointer-events-none" />
              
              {/* Outer Rotating Dashed Accent Ring */}
              <div className="absolute inset-0 -m-2 sm:-m-3 md:-m-4 rounded-full border-2 border-dashed border-[#D9A441]/45 animate-spin-slow pointer-events-none" />
              
              {/* Inner Reverse Rotating Ring */}
              <div className="absolute inset-0 -m-1 sm:-m-1.5 md:-m-2 rounded-full border border-primary/20 animate-spin-reverse-slow pointer-events-none" />
              
              {/* Thick white circular border wrapper */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-[10px] sm:border-[14px] border-white bg-card-cream shadow-premium-lg overflow-hidden shrink-0 transition-all duration-500 group-hover:scale-103 group-hover:rotate-1">
                <Image 
                  src="/teacher-1.jpg"
                  alt="Quran & Islamic Teacher Profile"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                  priority
                />
              </div>

              {/* Floating Certification Card (Visible on Desktop only) */}
              <div className="hidden md:flex absolute bottom-8 -left-8 z-10 bg-white rounded-2xl border border-border-subtle p-3.5 items-center gap-3 shadow-premium hover:shadow-premium-lg transition-all duration-300 animate-float-slow group-hover:scale-105">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F2] border border-[#E3DFD5] flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-accent animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left leading-tight">
                  <p className="text-xs font-bold text-primary">Certified</p>
                  <p className="text-[10px] text-text-secondary font-semibold">Hifz & Quran</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
