"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Benefit {
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  image: string;
}

export default function Benefits() {
  const { t } = useLanguage();

  const benefitsList: Benefit[] = [
    {
      titleBn: "অভিভাবকদের সময় সাশ্রয়",
      titleEn: "No Parent Supervision Needed",
      descBn: "প্রতিটি ক্লাসে অভিভাবকদের সন্তানের পাশে বসে থাকার প্রয়োজন নেই। ক্লাস চলাকালীন সময়ে অভিভাবকরা নিজেদের কাজ করতে পারেন।",
      descEn: "Parents don't need to sit with the child during classes. You can continue your tasks while the class is in progress.",
      image: "/images/benefit_supervision_v2.png"
    },
    {
      titleBn: "লাইভ স্ক্রিন শেয়ারিং",
      titleEn: "Live Screen Sharing",
      descBn: "জুম বা গুগল মিটের স্ক্রিন শেয়ারিং ও আধুনিক প্রযুক্তির মাধ্যমে পাঠদান করা হয়, যা ক্লাসকে মজাদার করে তোলে।",
      descEn: "Lessons are taught using modern methods with live screen sharing on Zoom/Meet to keep lessons interactive.",
      image: "/images/benefit_sharing.png"
    },
    {
      titleBn: "সহজ ও সরাসরি পাঠ্যাভ্যাস",
      titleEn: "Easy & Visual Learning",
      descBn: "শিক্ষার্থীরা সরাসরি স্ক্রিনে পড়া দেখতে পায় ও সহজেই টিউটরের সাথে তা দেখে উচ্চারণ অনুকরণ করতে পারে।",
      descEn: "Students see lessons directly on screen, making it incredibly easy to follow and repeat after the tutor.",
      image: "/images/benefit_visual.png"
    },
    {
      titleBn: "১-টু-১ পার্সোনালাইজড ক্লাস",
      titleEn: "One-to-One Sessions",
      descBn: "প্রতিটি শিশুর জন্য আলাদা ও সম্পূর্ণ নিজস্ব সময়ের ক্লাস, ফলে শিক্ষক প্রতিটি শিক্ষার্থীর প্রতি শতভাগ মনোযোগ দিতে পারেন।",
      descEn: "Separate and personalized slots for every student, ensuring the teacher's full individual attention.",
      image: "/images/benefit_one_to_one_v2.png"
    },
    {
      titleBn: "নিরাপদ ও সহজ পরিবেশ",
      titleEn: "Safe & Comfortable Environment",
      descBn: "বাইরে যাওয়া বা যাতায়াতের ঝামেলা ছাড়াই ঘরে বসেই সম্পূর্ণ নিরাপদ ও শান্তিপূর্ণ পরিবেশে শিক্ষা গ্রহণ।",
      descEn: "Learn safely and effectively from the comfort of home without any travel or scheduling hassle.",
      image: "/images/benefit_safe.png"

    },
    {
      titleBn: "ফ্লেক্সিবল সময়সূচী",
      titleEn: "Flexible Timings",
      descBn: "প্রবাসী অভিভাবক ও শিক্ষার্থীদের সুবিধার কথা মাথায় রেখে মানানসই ও নমনীয় সময়সূচী নির্ধারণের সুযোগ।",
      descEn: "Flexible lesson timings designed specifically for students residing in different global timezones.",
      image: "/images/benefit_flexible.png"
    }
  ];

  return (
    <section id="benefits" className="w-full py-16 sm:py-24 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
            {t("সুবিধাসমূহ • Benefits", "Benefits • সুবিধাসমূহ")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
            {t("অভিভাবক ও শিক্ষার্থীদের জন্য বিশেষ সুবিধাসমূহ", "Special Benefits for Parents & Students")}
          </h2>
          <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3.5 mx-auto rounded-full" />
          <p className="text-text-secondary text-sm sm:text-base font-semibold mt-4 leading-relaxed">
            {t(
              "একটি প্রফেশনাল ও আধুনিক শিক্ষার পদ্ধতি, যা শিক্ষার্থী ও অভিভাবক উভয়ের শিক্ষযাত্রাকে সহজ ও সফল করে তোলে।",
              "A professional and modern learning system that makes the educational journey easy and successful for both parents and students."
            )}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 animate-fade-in-up">
          {benefitsList.map((benefit, idx) => {
            const benefitTitle = t(benefit.titleBn, benefit.titleEn);
            const benefitSubtitle = t(benefit.titleEn, benefit.titleBn);
            const benefitDesc = t(benefit.descBn, benefit.descEn);

            return (
              <div 
                key={idx}
                className="bg-[#FAF8F2] border border-border-subtle rounded-2xl overflow-hidden shadow-premium-sm hover:shadow-premium-lg hover:border-primary/30 transition-all duration-300 flex flex-col group hover:-translate-y-2 relative"
              >
                {/* Illustration Header Container with Animations */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#F2ECE1] to-[#FAF8F2] flex items-center justify-center p-4 overflow-hidden border-b border-border-subtle/50">
                  
                  {/* Soft Animated Radial Glow Backdrop */}
                  <div className="absolute inset-6 rounded-full bg-[#D9A441]/10 filter blur-xl group-hover:bg-[#D9A441]/25 transition-colors duration-500 animate-pulse-glow pointer-events-none" />
                  
                  {/* Shimmer Light Sweep on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

                  {/* Floating Animated Illustration Container */}
                  <div className={`relative w-full h-full transform transition-transform duration-500 group-hover:scale-108 group-hover:rotate-1 ${idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed'}`}>
                    <Image
                      src={benefit.image}
                      alt={benefitTitle}
                      fill
                      className="object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 pt-8 flex flex-col items-start flex-grow">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary tracking-tight group-hover:text-primary-hover transition-colors duration-200 text-left">
                    {benefitTitle}
                  </h3>
                  <p className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-wider mt-0.5 text-left">
                    {benefitSubtitle}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mt-3.5 font-medium text-left flex-grow">
                    {benefitDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
