"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsIntro() {
  const { t } = useLanguage();

  const handleScrollToTestimonials = () => {
    const element = document.getElementById("testimonials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      {/* Subtle top background decorative shape */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-primary/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Banner */}
          <div className="lg:col-span-5 w-full flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl p-3 bg-white/70 backdrop-blur-md border border-border-subtle shadow-premium-lg group hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-1">
              
              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D9A441] rounded-tl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D9A441] rounded-br-3xl pointer-events-none" />
              
              {/* Inner container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card-cream border border-border-subtle">
                {/* Golden light burst on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D9A441]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                
                <Image
                  src="/images/parent_satisfaction.png"
                  alt={t("অভিভাবকদের সন্তুষ্টি ও আস্থা", "Parent satisfaction and trust")}
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Float Rating Card */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-5 bg-[#FAF8F2] border border-[#D9A441]/35 rounded-2xl px-4 py-3 shadow-premium flex items-center gap-3 animate-float-slow z-20">
                <div className="w-10 h-10 rounded-xl bg-[#D9A441]/10 flex items-center justify-center text-[#D9A441] shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 text-xs text-[#D9A441] font-bold">
                    <span>5.0</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-primary whitespace-nowrap">
                    {t("১০০+ সন্তুষ্ট অভিভাবক", "100+ Happy Parents")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Satisfaction Factors */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Tag Badge */}
            <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
              {t("আস্থা ও সন্তুষ্টি • Trust & satisfaction", "Trust & Satisfaction • আস্থা ও সন্তুষ্টি")}
            </span>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
              {t(
                "কেন প্রবাসী অভিভাবকরা আমাদের ওপর আস্থা রাখেন?",
                "Why Expat Parents Choose Our Academy"
              )}
            </h2>
            <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3 rounded-full" />

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed sm:leading-loose font-medium mt-5 max-w-2xl">
              {t(
                "বিদেশে বেড়ে ওঠা নতুন প্রজন্মের শিশুদের পবিত্র কুরআন ও তাজউইদ শিক্ষা প্রদান করা বেশ বড় দায়িত্ব। আমাদের আধুনিক ও আকর্ষণীয় ১-টু-১ ডিজিটাল পাঠদান পদ্ধতি শিশুদের পড়াশোনায় শতভাগ মনোযোগী রাখে, পাশাপাশি অভিভাবকদের মূল্যবান সময় সাশ্রয় করে।",
                "Teaching Quran to kids growing up in Western timezones comes with unique needs. Our highly interactive 1-to-1 digital classroom keeps children completely focused, giving parents peace of mind and freeing up their busy schedules."
              )}
            </p>

            {/* Grid checklist / points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5.5 mt-8 w-full">
              
              {/* Benefit 1 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Star rating icon */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("৫.০ রেটিংপ্রাপ্ত", "5.0 Rated by Expat Parents")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "যুক্তরাজ্য, যুক্তরাষ্ট্র ও ইউরোপের পরিবারের প্রশংসিত তিলাওয়াত শিক্ষা পদ্ধতি।",
                    "Highly praised methodology by expat families worldwide."
                  )}
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Zero Supervision (shield check icon) */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("সার্বক্ষণিক তদারকি মুক্ত", "Zero Parent Supervision")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "পড়ানোর পুরো দায়িত্ব শিক্ষকের। ক্লাসের সময় পাশে থাকার কোনো প্রয়োজন হয় না।",
                    "We take full teaching responsibility. No need to monitor each session."
                  )}
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Progress (trending up chart icon) */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("তাজউইদে দ্রুত উন্নতি", "Guaranteed Progress")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "১-টু-১ ফরম্যাটে প্রতিটি বাচ্চার মাখরাজ ও শুদ্ধ উচ্চারণে কয়েক সপ্তাহেই চমৎকার উন্নতি।",
                    "Rapid improvements in pronunciation with tailored 1-to-1 attention."
                  )}
                </p>
              </div>

            </div>

            {/* CTA Scroll Button */}
            <button
              onClick={handleScrollToTestimonials}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#D9A441] text-secondary-dark font-semibold rounded-xl shadow-premium-sm hover:bg-[#C59335] active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>{t("অভিভাবকদের মতামত দেখুন", "Read Expat Testimonials")}</span>
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
