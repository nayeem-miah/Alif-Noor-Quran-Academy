"use client";

interface Benefit {
  titleBn: string;
  titleEn: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Benefits() {
  const benefitsList: Benefit[] = [
    {
      titleBn: "অভিভাবকদের সময় সাশ্রয়",
      titleEn: "No Parent Supervision Needed",
      desc: "প্রতিটি ক্লাসে অভিভাবকদের সন্তানের পাশে বসে থাকার প্রয়োজন নেই। ক্লাস চলাকালীন সময়ে অভিভাবকরা নিজেদের কাজ করতে পারেন।",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      titleBn: "লাইভ স্ক্রিন শেয়ারিং",
      titleEn: "Live Screen Sharing",
      desc: "জুম বা গুগল মিটের স্ক্রিন শেয়ারিং ও আধুনিক প্রযুক্তির মাধ্যমে পাঠদান করা হয়, যা ক্লাসকে মজাদার করে তোলে।",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      titleBn: "সহজ ও সরাসরি পাঠ্যাভ্যাস",
      titleEn: "Easy & Visual Learning",
      desc: "শিক্ষার্থীরা সরাসরি স্ক্রিনে পড়া দেখতে পায় ও সহজেই টিউটরের সাথে তা দেখে উচ্চারণ অনুকরণ করতে পারে।",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      titleBn: "১-টু-১ পার্সোনালাইজড ক্লাস",
      titleEn: "One-to-One Sessions",
      desc: "প্রতিটি শিশুর জন্য আলাদা ও সম্পূর্ণ নিজস্ব সময়ের ক্লাস, ফলে শিক্ষক প্রতিটি শিক্ষার্থীর প্রতি শতভাগ মনোযোগ দিতে পারেন।",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      titleBn: "নিরাপদ ও সহজ পরিবেশ",
      titleEn: "Safe & Comfortable Environment",
      desc: "বাইরে যাওয়া বা যাতায়াতের ঝামেলা ছাড়াই ঘরে বসেই সম্পূর্ণ নিরাপদ ও শান্তিপূর্ণ পরিবেশে শিক্ষা গ্রহণ।",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      titleBn: "ফ্লেক্সিবল সময়সূচী",
      titleEn: "Flexible Timings",
      desc: "প্রবাসী অভিভাবক ও শিক্ষার্থীদের সুবিধার কথা মাথায় রেখে মানানসই ও নমনীয় সময়সূচী নির্ধারণের সুযোগ।",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="w-full py-16 sm:py-24 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
            সুবিধাসমূহ • Benefits
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
            অভিভাবক ও শিক্ষার্থীদের জন্য বিশেষ সুবিধাসমূহ
          </h2>
          <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3.5 mx-auto rounded-full" />
          <p className="text-text-secondary text-sm sm:text-base font-semibold mt-4 leading-relaxed">
            একটি প্রফেশনাল ও আধুনিক শিক্ষার পদ্ধতি, যা শিক্ষার্থী ও অভিভাবক উভয়ের শিক্ষযাত্রাকে সহজ ও সফল করে তোলে।
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 animate-fade-in-up">
          {benefitsList.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-6 sm:p-7 shadow-premium-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300 flex flex-col items-start group hover:-translate-y-1"
            >
              {/* Icon Container with Animations */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 border border-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-background-warm transition-all duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="font-serif text-lg sm:text-xl font-bold text-primary text-left">
                {benefit.titleBn}
              </h3>
              <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mt-0.5 text-left">
                {benefit.titleEn}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mt-3.5 font-medium text-left">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
