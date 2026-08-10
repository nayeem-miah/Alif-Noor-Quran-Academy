"use client";

interface GlobalStudent {
  id: string;
  countryNameBn: string;
  countryNameEn: string;
  languageBn: string;
  languageEn: string;
  flagSvg: React.ReactNode;
}

export default function GlobalPresence() {
  const globalStudents: GlobalStudent[] = [
    {
      id: "uk",
      countryNameBn: "যুক্তরাজ্য",
      countryNameEn: "United Kingdom",
      languageBn: "ইংরেজিভাষী পরিবার",
      languageEn: "English Speaking Families",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* UK Flag background */}
            <rect width="60" height="60" fill="#012169" />
            <path d="M0 0 L60 60 M60 0 L0 60" stroke="#fff" strokeWidth="6" />
            <path d="M0 0 L60 60 M60 0 L0 60" stroke="#C8102E" strokeWidth="4" />
            <path d="M30 0 V60 M0 30 H60" stroke="#fff" strokeWidth="10" />
            <path d="M30 0 V60 M0 30 H60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      )
    },
    {
      id: "usa",
      countryNameBn: "যুক্তরাষ্ট্র",
      countryNameEn: "United States",
      languageBn: "ইংরেজিভাষী পরিবার",
      languageEn: "English Speaking Families",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* USA Flag background */}
            <rect width="60" height="60" fill="#fff" />
            {/* Stripes */}
            <rect y="0" width="60" height="4.6" fill="#B22234" />
            <rect y="9.2" width="60" height="4.6" fill="#B22234" />
            <rect y="18.4" width="60" height="4.6" fill="#B22234" />
            <rect y="27.6" width="60" height="4.6" fill="#B22234" />
            <rect y="36.8" width="60" height="4.6" fill="#B22234" />
            <rect y="46" width="60" height="4.6" fill="#B22234" />
            <rect y="55.2" width="60" height="4.8" fill="#B22234" />
            {/* Blue Canton */}
            <rect x="0" y="0" width="30" height="32.2" fill="#3C3B6E" />
            {/* Simplified stars */}
            <circle cx="6" cy="6" r="1" fill="#fff" />
            <circle cx="14" cy="6" r="1" fill="#fff" />
            <circle cx="22" cy="6" r="1" fill="#fff" />
            <circle cx="10" cy="12" r="1" fill="#fff" />
            <circle cx="18" cy="12" r="1" fill="#fff" />
            <circle cx="6" cy="18" r="1" fill="#fff" />
            <circle cx="14" cy="18" r="1" fill="#fff" />
            <circle cx="22" cy="18" r="1" fill="#fff" />
            <circle cx="10" cy="24" r="1" fill="#fff" />
            <circle cx="18" cy="24" r="1" fill="#fff" />
          </g>
        </svg>
      )
    },
    {
      id: "canada",
      countryNameBn: "কানাডা",
      countryNameEn: "Canada",
      languageBn: "ইংরেজিভাষী পরিবার",
      languageEn: "English Speaking Families",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* Canada Flag */}
            <rect width="60" height="60" fill="#FF0000" />
            <rect x="15" width="30" height="60" fill="#FFFFFF" />
            {/* Simplified Maple Leaf */}
            <path d="M30 18 L33 25 H40 L34 29 L37 36 L30 31 L23 36 L26 29 L20 25 H27 Z" fill="#FF0000" />
            <rect x="29" y="34" width="2" height="8" fill="#FF0000" />
          </g>
        </svg>
      )
    },
    {
      id: "australia",
      countryNameBn: "অস্ট্রেলিয়া",
      countryNameEn: "Australia",
      languageBn: "ইংরেজিভাষী পরিবার",
      languageEn: "English Speaking Families",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* Australia Flag background */}
            <rect width="60" height="60" fill="#00008B" />
            {/* Simplified Union Jack in Canton */}
            <rect width="30" height="30" fill="#012169" />
            <path d="M0 0 L30 30 M30 0 L0 30" stroke="#fff" strokeWidth="3" />
            <path d="M0 0 L30 30 M30 0 L0 30" stroke="#C8102E" strokeWidth="1.5" />
            <path d="M15 0 V30 M0 15 H30" stroke="#fff" strokeWidth="5" />
            <path d="M15 0 V30 M0 15 H30" stroke="#C8102E" strokeWidth="3" />
            {/* Simplified Southern Cross stars */}
            <polygon points="45,15 46,18 49,18 47,20 48,23 45,21 42,23 43,20 41,18 44,18" fill="#fff" transform="scale(0.8) translate(12, 10)" />
            <polygon points="45,15 46,18 49,18 47,20 48,23 45,21 42,23 43,20 41,18 44,18" fill="#fff" transform="scale(0.8) translate(22, 28)" />
            <polygon points="45,15 46,18 49,18 47,20 48,23 45,21 42,23 43,20 41,18 44,18" fill="#fff" transform="scale(0.8) translate(5, 35)" />
          </g>
        </svg>
      )
    },
    {
      id: "bangladesh",
      countryNameBn: "বাংলাদেশ",
      countryNameEn: "Bangladesh",
      languageBn: "বাংলা ও সিলেটি পরিবার",
      languageEn: "Bengali & Sylheti Families",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* BD Flag */}
            <rect width="60" height="60" fill="#006a4e" />
            <circle cx="26" cy="30" r="16" fill="#f42a41" />
          </g>
        </svg>
      )
    },
    {
      id: "india",
      countryNameBn: "ভারত",
      countryNameEn: "India",
      languageBn: "হিন্দিভাষী পরিবার",
      languageEn: "Hindi Speaking Families",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* India Flag */}
            <rect width="60" height="60" fill="#FF9933" />
            <rect y="20" width="60" height="20" fill="#FFFFFF" />
            <rect y="40" width="60" height="20" fill="#138808" />
            {/* Ashoka Chakra */}
            <circle cx="30" cy="30" r="7" stroke="#000080" strokeWidth="1.5" fill="none" />
            <circle cx="30" cy="30" r="1" fill="#000080" />
          </g>
        </svg>
      )
    },
    {
      id: "pakistan",
      countryNameBn: "পাকিস্তান",
      countryNameEn: "Pakistan",
      languageBn: "উর্দুভাষী পরিবার",
      languageEn: "Urdu Speaking Families",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* Pakistan Flag */}
            <rect width="60" height="60" fill="#01411C" />
            <rect width="15" height="60" fill="#FFFFFF" />
            {/* Crescent and Star */}
            <path d="M 37.5 22.5 A 11 11 0 1 1 31.5 37.5 A 9 9 0 1 0 37.5 22.5 Z" fill="#FFFFFF" />
            <polygon points="41,20 42.5,23.5 46,23.5 43,25.5 44.5,29 41,27 37.5,29 39,25.5 36,23.5 39.5,23.5" fill="#FFFFFF" transform="scale(0.8) translate(6, 4)" />
          </g>
        </svg>
      )
    },
    {
      id: "europe",
      countryNameBn: "ইউরোপীয় দেশসমূহ",
      countryNameEn: "European Countries",
      languageBn: "ইউরোপের বিভিন্ন দেশ",
      languageEn: "European Countries & More",
      flagSvg: (
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <clipPath id="circleView">
            <circle cx="30" cy="30" r="30" />
          </clipPath>
          <g clipPath="url(#circleView)">
            {/* EU Flag */}
            <rect width="60" height="60" fill="#003399" />
            {/* Circle of stars */}
            <circle cx="30" cy="30" r="16" stroke="none" fill="none" />
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x = 30 + 16 * Math.cos(angle);
              const y = 30 + 16 * Math.sin(angle);
              return (
                <polygon
                  key={i}
                  points="0, -2.5 0.7, -0.7 2.4, -0.7 1, 0.4 1.5, 2.2 0, 1 -1.5, 2.2 -1, 0.4 -2.4, -0.7 -0.7, -0.7"
                  fill="#FFCC00"
                  transform={`translate(${x}, ${y}) scale(0.8)`}
                />
              );
            })}
          </g>
        </svg>
      )
    }
  ];

  return (
    <section id="global-presence" className="w-full py-16 sm:py-24 bg-card-cream/35 flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      
      {/* Background visual dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F4F4A_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
            যেসব দেশের শিক্ষার্থীদের আমি পড়াই
          </h2>
          <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3.5 mx-auto rounded-full" />
          <p className="text-text-secondary text-sm sm:text-base font-semibold mt-4 leading-relaxed">
            যুক্তরাজ্য, যুক্তরাষ্ট্র, ইউরোপ সহ বিশ্বের বিভিন্ন দেশে বসবাসরত শিক্ষার্থীদের অনলাইনে তাজউইদ ও শুদ্ধ উচ্চারণে কুরআন শিক্ষা দিয়ে আসছি।
          </p>
        </div>

        {/* Global Presence Map Pins / Flags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 animate-fade-in-up">
          {globalStudents.map((student) => (
            <div
              key={student.id}
              className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 sm:p-6 text-center shadow-premium-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center group hover:-translate-y-1.5"
            >
              {/* Location Pin with Flag Container */}
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                
                {/* Outer Ripple Rings on Hover */}
                <div className="absolute inset-0 rounded-full bg-[#D9A441]/5 group-hover:animate-ping pointer-events-none" />
                <div className="absolute inset-1.5 rounded-full bg-primary/5 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />
                
                {/* SVG Map Pin Frame with Flag inside */}
                <div className="relative w-18 h-22 transition-all duration-300 transform group-hover:scale-105 group-hover:translate-y-[-4px] drop-shadow-md">
                  {/* Yellow/Orange Pin Silhouette */}
                  <svg viewBox="0 0 32 40" className="w-full h-full text-[#D9A441] fill-current">
                    <path d="M16 0C7.16 0 0 7.16 0 16c0 11.25 14.25 22.8 14.88 23.3a1.69 1.69 0 0 0 2.24 0C17.75 38.8 32 27.25 32 16 32 7.16 24.84 0 16 0zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  </svg>
                  
                  {/* Floating flag inside the pin head (Perfectly Centered in Inner Circle) */}
                  <div className="absolute top-[20%] left-[25%] w-[50%] h-[40%] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-inner">
                    {student.flagSvg}
                  </div>
                </div>
              </div>

              {/* Country & Language Text */}
              <div className="space-y-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-primary">
                  {student.countryNameBn}
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-text-secondary uppercase tracking-wider">
                  {student.countryNameEn}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] sm:text-xs font-bold text-[#D9A441] bg-[#D9A441]/10 px-2.5 py-0.5 rounded-full border border-[#D9A441]/25">
                    {student.languageBn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
