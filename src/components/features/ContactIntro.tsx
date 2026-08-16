"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactIntro() {
  const { t } = useLanguage();

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      {/* Subtle top-left background decorative shape */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-primary/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Banner (Image on Right for ContactIntro to alternate layout) */}
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
                  src="/images/contact_intro.png"
                  alt={t("অনলাইন কুরআন ফ্রি ক্লাস বুকিং", "Book a free online Quran trial class")}
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Floating Booking Card */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-5 bg-[#FAF8F2] border border-[#D9A441]/35 rounded-2xl px-4 py-3 shadow-premium flex items-center gap-3 animate-float-slow z-20">
                <div className="w-10 h-10 rounded-xl bg-[#D9A441]/10 flex items-center justify-center text-[#D9A441] shrink-0">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-primary leading-tight">
                    {t("১ম ক্লাস সম্পূর্ণ ফ্রি", "100% Free Trial Class")}
                  </p>
                  <p className="text-[10px] font-semibold text-text-secondary mt-0.5 whitespace-nowrap">
                    {t("কোনো পূর্ব শর্ত ছাড়াই ট্রায়াল", "Zero commitment demo session")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Booking Steps */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Tag Badge */}
            <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
              {t("ফ্রি ক্লাস বুকিং • Book a free class", "Free Trial Booking • ফ্রি ক্লাস বুকিং")}
            </span>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
              {t(
                "আজই আপনার সন্তানের কুরআন শিক্ষার যাত্রা শুরু করুন",
                "Start Your Child's Quran Journey Today"
              )}
            </h2>
            <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3 rounded-full" />

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed sm:leading-loose font-medium mt-5 max-w-2xl">
              {t(
                "একটি ফ্রি ডেমো ক্লাস বুক করতে এক মিনিটেরও কম সময় লাগে। আমাদের ফরমটি পূরণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন। আপনার সন্তানের সুবিধা, বয়স এবং সুবিধাজনক সময় অনুযায়ী আমরা প্রথম ক্লাসের শিডিউল নির্ধারণ করব ইনশাআল্লাহ।",
                "Booking a trial session takes less than a minute. Simply fill out our quick booking form or reach out directly on WhatsApp. We will configure the trial schedule based on your child's age, timezone, and your preferred learning hours."
              )}
            </p>

            {/* Grid checklist / points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5.5 mt-8 w-full">
              
              {/* Point 1 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Target/Pick Slot Icon */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25gA7.5 7.5 0 1119.5 10.5z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("আপনার সময় বাছুন", "Pick Your Slot")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "সকাল, দুপুর বা রাত—আপনার দেশের স্থানীয় সময়ের সাথে সামঞ্জস্যপূর্ণ স্লট নির্বাচন করুন।",
                    "Choose morning, afternoon, or evening based on your local timezone."
                  )}
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Teacher Portrait Silhouette Icon */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("শিক্ষকের সাথে পরিচয়", "Meet the Teacher")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "ভর্তির পূর্বে শিক্ষকের আন্তরিক পাঠদান পদ্ধতি ও কথা বলার ধরণ সরাসরি যাচাই করুন।",
                    "Directly evaluate the tutor's patient teaching style in the demo class."
                  )}
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Sparkles check icon */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-1.81-2.883-3.218-.73 2.63-2.18-.548-3.323 3.018 1.54 3.019-1.54-.548 3.323 2.63 2.18-3.217.73L9.81 21zM21 9.813l-.813 5.096L18.377 12l-3.218-.73 2.63-2.18-.548-3.323 3.018 1.54 3.019-1.54-.548 3.323 2.63 2.18-3.217.73L21 9.813z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("১ম ক্লাস সম্পূর্ণ ফ্রি", "100% Free Class")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "কোনো ধরনের সাবস্ক্রিপশন বা ক্রেডিট কার্ডের তথ্য ছাড়াই ট্রায়াল ক্লাসে অংশ নিন।",
                    "Attend the full trial lesson with absolutely zero commitments."
                  )}
                </p>
              </div>

            </div>

            {/* CTA Scroll Button */}
            <button
              onClick={handleScrollToContact}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#D9A441] text-secondary-dark font-semibold rounded-xl shadow-premium-sm hover:bg-[#C59335] active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>{t("বুকিং ফর্মে যান", "Go to Booking Form")}</span>
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
