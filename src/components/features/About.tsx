"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutItems } from "./aboutData";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  const topicsList = language === "bn" ? [
    "নূরানী কায়েদা (একদম শুরু থেকে)",
    "সঠিক তাজওয়ীদের সাথে কুরআন তিলাওয়াত",
    "আরবি পড়া ও শুদ্ধ উচ্চারণ",
    "মাখারিজ ও তাজওয়ীদের ভুল সংশোধন",
    "নামাজ শিক্ষা (ওযু, গোসল, নামাজের নিয়ম, নামাজের নিয়ত ও মাসআলা)",
    "নামাজের জন্য প্রয়োজনীয় সূরা ও দোয়া",
    "ছয় কালিমা",
    "দৈনন্দিন প্রয়োজনীয় দোয়াসমূহ",
    "মৌলিক ইসলামী জ্ঞান ও উত্তম আখলাক (চারিত্রিক শিক্ষা)"
  ] : [
    "Noorani Qaida (From the very beginning)",
    "Quran Recitation with proper Tajweed",
    "Arabic Reading & Correct Pronunciation",
    "Correction of Makharij & Tajweed errors",
    "Namaz Learning (Wudu, Ghusl, rules & rulings of prayer)",
    "Surahs and Duas required for Namaz",
    "Six Kalimahs",
    "Daily essential Duas",
    "Basic Islamic knowledge and Akhlaq (Character building)"
  ];

  const benefitsList = language === "bn" ? [
    "প্রতিটি ক্লাসে অভিভাবকদের সন্তানের পাশে বসে থাকার প্রয়োজন নেই।",
    "লাইভ স্ক্রিন শেয়ারিংয়ের মাধ্যমে আধুনিক পদ্ধতিতে পাঠদান করা হয়।",
    "শিক্ষার্থীরা সরাসরি পাঠ দেখতে ও সহজে অনুসরণ করতে পারে।",
    "ক্লাস চলাকালীন সময়ে অভিভাবকরা তাদের নিজস্ব কাজ চালিয়ে যেতে পারেন।",
    "ঘরে বসেই নিরাপদ, সহজ এবং কার্যকরভাবে শিক্ষা গ্রহণ করা যায়।"
  ] : [
    "Parents do not need to sit with their child during class.",
    "Lessons are taught using modern methods with live screen sharing.",
    "Students can see the lesson directly on screen and follow easily.",
    "Parents can continue their own work during class hours.",
    "Safe, easy, and highly effective learning from the comfort of home."
  ];

  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">     
          
          {/* Left Column: About Images (Collage / Stack) */}
          <div className="md:col-span-5 w-full flex justify-center animate-fade-in relative py-4 sm:py-6 md:py-10">
            {/* Main Image: Kids Learning */}
            <div className="relative w-full max-w-[320px] md:max-w-full aspect-square rounded-3xl border-4 border-white bg-card-cream shadow-premium overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/benefit_supervision_v2.png"
                alt={t("অনলাইন কুরআন শিক্ষা", "Online Quran Learning")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
              />
            </div>

            {/* Overlapping Secondary Image: Quran */}
            <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 md:-bottom-2 md:-right-2 w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-2xl border-4 border-white bg-card-cream shadow-premium-lg overflow-hidden z-20 transition-all duration-300 hover:scale-105 hover:z-30">
              <Image
                src="/images/quran.png"
                alt="Holy Quran Learning"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>        
          
          {/* Right Column: About Content */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start order-2 md:order-1 animate-fade-in-up">      
            <div className="w-full bg-card-cream/50 border border-border-subtle rounded-2xl p-6 sm:p-8 md:bg-transparent md:border-none md:p-0 md:rounded-none">
              
              {/* Heading */}
              <div className="flex flex-col items-start w-full">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-primary">
                  {t("আমার সম্পর্কে", "About Me")}
                </h2>
                <div className="w-12 h-[3.5px] bg-[#D9A441] mt-2 rounded-full" />
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed sm:leading-loose font-medium mt-5 max-w-xl text-left">
                {t(
                  "আলহামদুলিল্লাহ, আমি দীর্ঘসময় ধরে কুরআন শিক্ষা এবং ইসলামী গবেষণায় নিয়োজিত আছি। আমার উদ্দেশ্য হলো প্রতিটি মুসলিম শিশুর অন্তরে আল্লাহর কালামের প্রতি ভালোবাসা তৈরি করা এবং তাদের সঠিক উচ্চারণে কুরআন পড়তে শেখানো।",
                  "Alhamdulillah, I have been dedicated to Quran teaching and Islamic education for a long time. My mission is to build a love for the Holy Quran in every Muslim child's heart and teach them correct recitation with proper pronunciation."
                )}
              </p>
    
              {/* Information List */}
              <div className="flex flex-col gap-4 mt-6 w-full max-w-lg">
                {aboutItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#FDFCF9] border border-border-subtle/75 rounded-xl px-4.5 py-3.5 sm:py-4 flex items-center gap-4 shadow-premium-sm transition-all duration-200 hover:bg-[#F2EFE6]/40 hover:border-border-subtle"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-card-cream/45 border border-border-subtle shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-text-main text-left">
                      {t(item.textBn, item.textEn)}
                    </span>
                  </div>
                ))}
              </div>

              {/* View Details Button */}
              <button 
                onClick={() => setIsOpen(true)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#D9A441] text-secondary-dark font-semibold rounded-xl shadow-premium-sm hover:bg-[#C59335] active:scale-98 transition-all duration-200 cursor-pointer"
              >
                <span>{t("বিস্তারিত জানুন", "View Details")}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Detail Biography Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FAF8F2] border border-border-subtle rounded-2xl max-w-2xl w-full max-h-[85vh] shadow-premium-lg flex flex-col relative animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-border-subtle/40 flex items-center justify-between bg-primary text-background-warm rounded-t-2xl shrink-0">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-background-warm flex items-center gap-2">
                <span>{t("🌿 অনলাইন কুরআন ও আরবি শিক্ষক", "🌿 Online Quran & Arabic Teacher")}</span>
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-background-warm transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-left text-sm sm:text-base leading-relaxed text-text-main">
              
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full border-2 border-primary bg-card-cream overflow-hidden shrink-0 shadow-md">
                  <Image
                    src="/teacher-1.jpg"
                    alt="Teacher Portrait"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <div className="text-center sm:text-left flex-grow">
                  <p className="font-bold text-primary text-base sm:text-lg">
                    {t("আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু।", "Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu.")}
                  </p>
                  <p className="text-text-secondary text-xs sm:text-sm mt-1.5 font-semibold leading-relaxed">
                    {t(
                      "আপনি যদি আপনার সন্তানের জন্য একজন অভিজ্ঞ, আন্তরিক ও যত্নশীল কুরআন শিক্ষক খুঁজে থাকেন, তাহলে তাকে শিক্ষা ও দিকনির্দেশনা দিতে পারলে আমি সম্মানিত বোধ করব।",
                      "If you are looking for an experienced, sincere, and caring Quran teacher for your child, I would be honored to guide and teach them."
                    )}
                  </p>
                </div>
              </div>

              {/* About Me Section */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-primary border-b border-primary/10 pb-1.5 flex items-center gap-2">
                  <span>{t("👤 আমার সম্পর্কে", "👤 About Me")}</span>
                </h4>
                <ul className="space-y-2.5 font-medium text-text-secondary text-sm sm:text-sm+">
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">📖</span>
                    <span>{t("আমি পবিত্র কুরআনের একজন হাফিজ।", "I am a Hafiz of the Holy Quran.")}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🎙️</span>
                    <span>{t("আমি একজন ক্বারী এবং সঠিক তাজওয়ীদ ও সুন্দর উচ্চারণের মাধ্যমে কুরআন শিক্ষা প্রদান করি।", "I am a Qari and teach Quran recitation with proper Tajweed and pronunciation.")}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🎤</span>
                    <span>{t("আমি একজন ইসলামিক নাশীদ শিল্পীও।", "I am also an Islamic Nasheed artist.")}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🎓</span>
                    <span>{t("আমি বর্তমানে ফাযিল (২য় বর্ষ ডিগ্রী)-এ অধ্যয়নরত।", "I am currently studying Fazil (Degree 2nd Year).")}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">👨‍🏫</span>
                    <span>{t("গত ৫ বছর ধরে আমি যুক্তরাজ্য, যুক্তরাষ্ট্র এবং ইউরোপের বিভিন্ন দেশে বসবাসরত শিশুদের অনলাইনে কুরআন ও আরবি শিক্ষা দিয়ে আসছি।", "For the past 5 years, I have been teaching Quran & Arabic online to children residing in the UK, USA, Canada, and European countries.")}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🕌</span>
                    <span>{t("এছাড়াও, বাংলাদেশে আল্লামা ফুলতলী ছাহেব কিবলা (র.)এর প্রতিষ্ঠান দারুল কিরআতে আমার প্রায় ৮ বছরের শিক্ষকতার অভিজ্ঞতা রয়েছে।", "Additionally, I have about 8 years of teaching experience at Darul Qirat, an institution established by Allama Fultali Saheb Qiblah (R.) in Bangladesh.")}</span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-text-secondary/90 italic bg-card-cream/35 p-3 rounded-lg border border-border-subtle/50 mt-3 font-semibold">
                  {t(
                    "এই দীর্ঘ সময়ে আমি বিভিন্ন বয়সের শিশুদের পড়িয়েছি। প্রতিটি শিশুর শেখার ধরন আলাদা, তাই আমি ধৈর্য, আন্তরিকতা এবং সহজবোধ্য পদ্ধতিতে পাঠদান করি, যাতে প্রতিটি শিক্ষার্থী আত্মবিশ্বাসের সাথে শিখতে পারে এবং ধারাবাহিকভাবে উন্নতি করতে পারে।",
                    "Over this long period, I have taught children of various age groups. Every child learns differently, which is why I use patient, friendly, and easy-to-understand methods, so every student can learn with confidence and improve consistently."
                  )}
                </p>
              </div>

              {/* What I Teach Section */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-primary border-b border-primary/10 pb-1.5 flex items-center gap-2">
                  <span>{t("📚 আমি যা যা শেখাই", "📚 What I Teach")}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-semibold text-text-main text-xs sm:text-sm">
                  {topicsList.map((topic, index) => (
                    <div key={index} className="flex items-start gap-2 bg-white border border-border-subtle/60 p-2.5 rounded-lg">
                      <span className="text-emerald-600 shrink-0 mt-0.5">✅</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student & Parent Benefits Section */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-primary border-b border-primary/10 pb-1.5 flex items-center gap-2">
                  <span>{t("🌟 শিক্ষার্থী ও অভিভাবকদের জন্য সুবিধাসমূহ", "🌟 Benefits for Students & Parents")}</span>
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm font-medium">
                  {t(
                    "নিচে এমন কিছু গুরুত্বপূর্ণ সুবিধা তুলে ধরা হলো, যা শিক্ষার্থী এবং তাদের অভিভাবক উভয়েই উপভোগ করতে পারবেন:",
                    "Below are some of the key benefits that both students and parents will enjoy:"
                  )}
                </p>
                <div className="space-y-2 font-medium text-text-secondary text-xs sm:text-sm mt-2">
                  {benefitsList.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <span className="text-[#D9A441] shrink-0 mt-0.5">✅</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-primary mt-3 bg-primary/5 p-3 rounded-lg border border-primary/10 text-center">
                  {t(
                    "আমার লক্ষ্য শুধু কুরআন শিক্ষা দেওয়া নয়; বরং প্রতিটি শিশুর অন্তরে কুরআনের প্রতি ভালোবাসা সৃষ্টি করা, সঠিকভাবে তিলাওয়াত শেখানো এবং তাকে ইসলামী মূল্যবোধসম্পন্ন একজন আদর্শ মুসলিম হিসেবে গড়ে তুলতে সহায়তা করা।",
                    "My goal is not only to teach Quran recitation but also to instill a love for the Quran in every child's heart, correct their Tajweed, and guide them to become model Muslims with strong Islamic values."
                  )}
                </p>
              </div>

              {/* Free Trial & Guarantee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#D9A441]/10 p-4 rounded-xl border border-[#D9A441]/25">
                  <h5 className="font-serif text-base font-bold text-[#C59335] flex items-center gap-1.5">
                    <span>{t("🎁 ফ্রি ট্রায়াল ক্লাস", "🎁 Free Trial Class")}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1.5 font-medium">
                    {t(
                      "প্রথম ক্লাসটি সম্পূর্ণ ফ্রি, যাতে আপনি এবং আপনার সন্তান কোনো ধরনের প্রতিশ্রুতি ছাড়াই আমার পাঠদানের পদ্ধতি সম্পর্কে ধারণা নিতে পারেন।",
                      "The first class is completely free, allowing you and your child to experience my teaching style with no commitments."
                    )}
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <h5 className="font-serif text-base font-bold text-emerald-800 flex items-center gap-1.5">
                    <span>{t("✅ আমার প্রতিশ্রুতি", "✅ My Promise")}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-emerald-900/80 mt-1.5 font-medium">
                    {t(
                      "ইনশাআল্লাহ, আমি আমার শিক্ষাদানের ব্যাপারে আত্মবিশ্বাসী। যদি আপনার সন্তান ১ মাস নিয়মিত পড়েও কোনো তিলাওয়াত বা শেখার উন্নতি করতে না পারে, তবে পরবর্তী মাস থেকে ক্লাস বন্ধ করার পূর্ণ স্বাধীনতা রয়েছে।",
                      "In sha Allah, I am confident in my teaching. If your child shows no progress in reading or learning after 1 month of regular classes, you have full freedom to stop the sessions."
                    )}
                  </p>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="space-y-3 pt-2 text-center text-xs sm:text-sm font-medium text-text-secondary border-t border-border-subtle/40">
                <p>
                  {t(
                    "আমি দৃঢ়ভাবে বিশ্বাস করি যে, আন্তরিকতা, নিয়মিত অনুশীলন এবং সঠিক দিকনির্দেশনার মাধ্যমে প্রতিটি শিশু অল্প সময়ের মধ্যেই দৃশ্যমান উন্নতি করতে পারে। তাই আমি প্রতিটি শিক্ষার্থীকে সর্বোচ্চ দায়িত্ব, যত্ন ও নিষ্ঠার সাথে শিক্ষা প্রদান করি।",
                    "I firmly believe that with sincerity, regular practice, and proper guidance, every child can make noticeable progress in a short time. Therefore, I teach each student with utmost responsibility, care, and dedication."
                  )}
                </p>
                <p className="font-semibold text-primary">
                  {t(
                    "আপনি যদি আপনার সন্তানের জন্য একজন বিশ্বস্ত, অভিজ্ঞ ও নিবেদিতপ্রাণ কুরআন শিক্ষক খুঁজে থাকেন, তাহলে অনুগ্রহ করে নির্দ্বিধায় যোগাযোগ করুন।",
                    "If you are looking for a trusted, experienced, and dedicated Quran tutor for your child, please feel free to contact me."
                  )}
                </p>
                <p className="font-serif font-bold text-primary mt-4">
                  {t(
                    "আল্লাহ তাআলা আমাদের সবাইকে কুরআন শেখার, অন্যকে শেখানোর এবং তার শিক্ষা অনুযায়ী আমল করার তাওফিক দান করুন। আমীন।",
                    "May Allah bless us all with the ability to learn Quran, teach others, and act upon its guidance. Ameen."
                  )}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border-subtle/40 flex justify-end bg-card-cream rounded-b-2xl shrink-0">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-primary text-background-warm font-semibold rounded-lg hover:bg-primary-hover active:scale-98 transition-all cursor-pointer"
              >
                {t("বন্ধ করুন", "Close")}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
