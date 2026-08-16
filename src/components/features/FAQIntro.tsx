"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQIntro() {
  const { t } = useLanguage();

  const handleScrollToFAQ = () => {
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      {/* Subtle bottom-right background decorative shape */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#D9A441]/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Banner (Image on Left for FAQIntro to alternate layout) */}
          <div className="lg:col-span-5 w-full flex justify-center order-1">
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl p-3 bg-white/70 backdrop-blur-md border border-border-subtle shadow-premium-lg group hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-1">
              
              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-3xl pointer-events-none" />
              
              {/* Inner container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card-cream border border-border-subtle">
                {/* Emerald light burst on hover */}
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                
                <Image
                  src="/images/faq_intro.png"
                  alt={t("অনলাইন কুরআন শিক্ষা সচরাচর জিজ্ঞাসা", "Online Quran learning frequently asked questions")}
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Floating Help Card */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 bg-[#FAF8F2] border border-primary/20 rounded-2xl px-4.5 py-3.5 shadow-premium flex items-center gap-3 animate-float-delayed z-20">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-primary leading-tight">
                    {t("সহজ সমাধান ও দিকনির্দেশনা", "Quick Answers & Guidance")}
                  </p>
                  <p className="text-[10px] font-semibold text-text-secondary mt-0.5 whitespace-nowrap">
                    {t("যেকোনো জিজ্ঞাসা মেটাতে আমরা প্রস্তুত", "Here to clear all your doubts")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details Breakdown */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2">
            {/* Tag Badge */}
            <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
              {t("সাধারণ জিজ্ঞাসা • FAQ introduction", "Common Inquiries • সাধারণ জিজ্ঞাসা")}
            </span>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
              {t(
                "ভর্তির পূর্বে আপনার মনের জিজ্ঞাসাগুলো জেনে নিন",
                "Clear Your Doubts Before You Start"
              )}
            </h2>
            <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3 rounded-full" />

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed sm:leading-loose font-medium mt-5 max-w-2xl">
              {t(
                "সন্তানের অনলাইন পড়াশোনা শুরু করার আগে অভিভাবকদের মনে বিভিন্ন ধরনের প্রশ্ন থাকা স্বাভাবিক। ক্লাসের সময়সূচী, মাধ্যম, ফি এবং শিক্ষাদানের ভাষা সম্পর্কে আপনার সকল সংশয় দূর করতে আমরা প্রতিটি বিষয় স্বচ্ছ রাখতে বিশ্বাসী। নিচে প্রয়োজনীয় সব তথ্যের সংক্ষিপ্ত রূপ দেওয়া হলো।",
                "It is perfectly natural to have questions before starting your child's online learning journey. To help you proceed with complete peace of mind, we maintain total transparency regarding class timings, teaching languages, and our commitment to results."
              )}
            </p>

            {/* Grid checklist / points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5.5 mt-8 w-full">
              
              {/* Point 1 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Calendar / Schedule Icon */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("ফ্লেক্সিবল সময়সূচী", "Flexible Schedule")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "যুক্তরাজ্য, যুক্তরাষ্ট্র ও ইউরোপের শিক্ষার্থীদের সময় উপযোগী কাস্টমাইজড ক্লাসের স্লট সুবিধা।",
                    "Customized class slots adapted perfectly to Western timezones."
                  )}
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Chat / Multi-language bubble icon */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.598.598 0 01-.774-.689l.853-3.1a9.186 9.186 0 01-1.353-3.69C4.137 12 8.167 12 12.167 12c4.97 0 9 3.694 9 8.25z" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("বহুমাত্রিক ভাষা সমর্থন", "Multi-Language Support")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "ইংরেজি, বাংলা, সিলেটি বা উর্দু ভাষায় স্বাচ্ছন্দ্য অনুযায়ী শিক্ষার্থীদের শিক্ষাদান।",
                    "Classes taught in English, Bengali, Sylheti, or Urdu based on comfort."
                  )}
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 hover:border-primary/20 hover:shadow-premium-sm transition-all duration-300 flex flex-col">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {/* Gift / Free Trial Icon */}
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h17.25" />
                  </svg>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-primary">
                  {t("ফ্রি ট্রায়াল ক্লাস", "Free Trial Session")}
                </h4>
                <p className="text-text-secondary text-xs mt-1.5 leading-relaxed font-semibold">
                  {t(
                    "ভর্তির সিদ্ধান্ত নেওয়ার আগে সম্পূর্ণ ফ্রী একটি পরীক্ষামূলক ক্লাস নেওয়ার সুযোগ রয়েছে।",
                    "Try our teaching methods risk-free with a zero-commitment trial class."
                  )}
                </p>
              </div>

            </div>

            {/* CTA Scroll Button */}
            <button
              onClick={handleScrollToFAQ}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#D9A441] text-secondary-dark font-semibold rounded-xl shadow-premium-sm hover:bg-[#C59335] active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>{t("প্রশ্নোত্তরসমূহ দেখুন", "Browse All FAQs")}</span>
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
