"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutItems } from "./aboutData";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="w-full py-12 sm:py-20 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">     
          
          {/* Left Column: Quran Image */}
          <div className="md:col-span-5 w-full flex justify-center animate-fade-in">
            <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-square rounded-2xl sm:rounded-3xl border-4 border-white bg-card-cream shadow-premium overflow-hidden shrink-0 transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src="/quran-about.png"
                alt="Holy Quran Learning and Recitation"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 40vw, 500px"
              />
            </div>
          </div>        
          
          {/* Right Column: About Content */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start order-2 md:order-1 animate-fade-in-up">      
            <div className="w-full bg-card-cream/50 border border-border-subtle rounded-2xl p-6 sm:p-8 md:bg-transparent md:border-none md:p-0 md:rounded-none">
              
              {/* Heading */}
              <div className="flex flex-col items-start w-full">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-primary">
                  আমার সম্পর্কে
                </h2>
                <div className="w-12 h-[3.5px] bg-[#D9A441] mt-2 rounded-full" />
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed sm:leading-loose font-medium mt-5 max-w-xl text-left">
                আলহামদুলিল্লাহ, আমি দীর্ঘসময় ধরে কুরআন শিক্ষা এবং ইসলামী গবেষণায় নিয়োজিত আছি। আমার উদ্দেশ্য হলো প্রতিটি মুসলিম শিশুর অন্তরে আল্লাহর কালামের প্রতি ভালোবাসা তৈরি করা এবং তাদের সঠিক উচ্চারণে কুরআন পড়তে শেখানো।
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
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* View Details Button */}
              <button 
                onClick={() => setIsOpen(true)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#D9A441] text-secondary-dark font-semibold rounded-xl shadow-premium-sm hover:bg-[#C59335] active:scale-98 transition-all duration-200 cursor-pointer"
              >
                <span>বিস্তারিত জানুন</span>
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
                <span>🌿 অনলাইন কুরআন ও আরবি শিক্ষক</span>
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
              
              <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                <p className="font-bold text-primary text-base text-center sm:text-lg">
                  আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু।
                </p>
                <p className="text-text-secondary text-sm text-center mt-2 font-medium">
                  আপনি যদি আপনার সন্তানের জন্য একজন অভিজ্ঞ, আন্তরিক ও যত্নশীল কুরআন শিক্ষক খুঁজে থাকেন, তাহলে তাকে শিক্ষা ও দিকনির্দেশনা দিতে পারলে আমি সম্মানিত বোধ করব।
                </p>
              </div>

              {/* About Me Section */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-primary border-b border-primary/10 pb-1.5 flex items-center gap-2">
                  <span>👤 আমার সম্পর্কে</span>
                </h4>
                <ul className="space-y-2.5 font-medium text-text-secondary text-sm sm:text-sm+">
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">📖</span>
                    <span>আমি পবিত্র কুরআনের একজন হাফিজ।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🎙️</span>
                    <span>আমি একজন ক্বারী এবং সঠিক তাজওয়ীদ ও সুন্দর উচ্চারণের মাধ্যমে কুরআন শিক্ষা প্রদান করি।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🎤</span>
                    <span>আমি একজন ইসলামিক নাশীদ শিল্পীও।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🎓</span>
                    <span>আমি বর্তমানে ফাযিল (২য় বর্ষ ডিগ্রী)-এ অধ্যয়নরত।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">👨‍🏫</span>
                    <span>গত ৫ বছর ধরে আমি যুক্তরাজ্য, যুক্তরাষ্ট্র এবং ইউরোপের বিভিন্ন দেশে বসবাসরত শিশুদের অনলাইনে কুরআন ও আরবি শিক্ষা দিয়ে আসছি।</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="shrink-0 text-base mt-0.5">🕌</span>
                    <span>এছাড়াও, বাংলাদেশে আল্লামা ফুলতলী ছাহেব কিবলা (র.)এর প্রতিষ্ঠান দারুল কিরআতে আমার প্রায় ৮ বছরের শিক্ষকতার অভিজ্ঞতা রয়েছে।</span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-text-secondary/90 italic bg-card-cream/35 p-3 rounded-lg border border-border-subtle/50 mt-3 font-semibold">
                  এই দীর্ঘ সময়ে আমি বিভিন্ন বয়সের শিশুদের পড়িয়েছি। প্রতিটি শিশুর শেখার ধরন আলাদা, তাই আমি ধৈর্য, আন্তরিকতা এবং সহজবোধ্য পদ্ধতিতে পাঠদান করি, যাতে প্রতিটি শিক্ষার্থী আত্মবিশ্বাসের সাথে শিখতে পারে এবং ধারাবাহিকভাবে উন্নতি করতে পারে।
                </p>
              </div>

              {/* What I Teach Section */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-primary border-b border-primary/10 pb-1.5 flex items-center gap-2">
                  <span>📚 আমি যা যা শেখাই</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-semibold text-text-main text-xs sm:text-sm">
                  {[
                    "নূরানী কায়েদা (একদম শুরু থেকে)",
                    "সঠিক তাজওয়ীদের সাথে কুরআন তিলাওয়াত",
                    "আরবি পড়া ও শুদ্ধ উচ্চারণ",
                    "মাখারিজ ও তাজওয়ীদের ভুল সংশোধন",
                    "নামাজ শিক্ষা (ওযু, গোসল, নামাজের নিয়ম, নামাজের নিয়ত ও মাসআলা)",
                    "নামাজের জন্য প্রয়োজনীয় সূরা ও দোয়া",
                    "ছয় কালিমা",
                    "দৈনন্দিন প্রয়োজনীয় দোয়াসমূহ",
                    "মৌলিক ইসলামী জ্ঞান ও উত্তম আখলাক (চারিত্রিক শিক্ষা)"
                  ].map((topic, index) => (
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
                  <span>🌟 শিক্ষার্থী ও অভিভাবকদের জন্য সুবিধাসমূহ</span>
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm font-medium">
                  নিচে এমন কিছু গুরুত্বপূর্ণ সুবিধা তুলে ধরা হলো, যা শিক্ষার্থী এবং তাদের অভিভাবক উভয়েই উপভোগ করতে পারবেন:
                </p>
                <div className="space-y-2 font-medium text-text-secondary text-xs sm:text-sm mt-2">
                  {[
                    "প্রতিটি ক্লাসে অভিভাবকদের সন্তানের পাশে বসে থাকার প্রয়োজন নেই।",
                    "লাইভ স্ক্রিন শেয়ারিংয়ের মাধ্যমে আধুনিক পদ্ধতিতে পাঠদান করা হয়।",
                    "শিক্ষার্থীরা সরাসরি পাঠ দেখতে ও সহজে অনুসরণ করতে পারে।",
                    "ক্লাস চলাকালীন সময়ে অভিভাবকরা তাদের নিজস্ব কাজ চালিয়ে যেতে পারেন।",
                    "ঘরে বসেই নিরাপদ, সহজ এবং কার্যকরভাবে শিক্ষা গ্রহণ করা যায়।"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <span className="text-[#D9A441] shrink-0 mt-0.5">✅</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-primary mt-3 bg-primary/5 p-3 rounded-lg border border-primary/10 text-center">
                  আমার লক্ষ্য শুধু কুরআন শিক্ষা দেওয়া নয়; বরং প্রতিটি শিশুর অন্তরে কুরআনের প্রতি ভালোবাসা সৃষ্টি করা, সঠিকভাবে তিলাওয়াত শেখানো এবং তাকে ইসলামী মূল্যবোধসম্পন্ন একজন আদর্শ মুসলিম হিসেবে গড়ে তুলতে সহায়তা করা।
                </p>
              </div>

              {/* Free Trial & Guarantee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#D9A441]/10 p-4 rounded-xl border border-[#D9A441]/25">
                  <h5 className="font-serif text-base font-bold text-[#C59335] flex items-center gap-1.5">
                    <span>🎁 ফ্রি ট্রায়াল ক্লাস</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-text-secondary mt-1.5 font-medium">
                    প্রথম ক্লাসটি সম্পূর্ণ ফ্রি, যাতে আপনি এবং আপনার সন্তান কোনো ধরনের প্রতিশ্রুতি ছাড়াই আমার পাঠদানের পদ্ধতি সম্পর্কে ধারণা নিতে পারেন।
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <h5 className="font-serif text-base font-bold text-emerald-800 flex items-center gap-1.5">
                    <span>✅ আমার প্রতিশ্রুতি</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-emerald-900/80 mt-1.5 font-medium">
                    ইনশাআল্লাহ, আমি আমার শিক্ষাদানের ব্যাপারে আত্মবিশ্বাসী। যদি আপনার সন্তান ১ মাস নিয়মিত পড়েও কোনো তিলাওয়াত বা শেখার উন্নতি করতে না পারে, তবে পরবর্তী মাস থেকে ক্লাস বন্ধ করার পূর্ণ স্বাধীনতা রয়েছে।
                  </p>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="space-y-3 pt-2 text-center text-xs sm:text-sm font-medium text-text-secondary border-t border-border-subtle/40">
                <p>
                  আমি দৃঢ়ভাবে বিশ্বাস করি যে, আন্তরিকতা, নিয়মিত অনুশীলন এবং সঠিক দিকনির্দেশনার মাধ্যমে প্রতিটি শিশু অল্প সময়ের মধ্যেই দৃশ্যমান উন্নতি করতে পারে। তাই আমি প্রতিটি শিক্ষার্থীকে সর্বোচ্চ দায়িত্ব, যত্ন ও নিষ্ঠার সাথে শিক্ষা প্রদান করি।
                </p>
                <p className="font-semibold text-primary">
                  আপনি যদি আপনার সন্তানের জন্য একজন বিশ্বস্ত, অভিজ্ঞ ও নিবেদিতপ্রাণ কুরআন শিক্ষক খুঁজে থাকেন, তাহলে অনুগ্রহ করে নির্দ্বিধায় যোগাযোগ করুন।
                </p>
                <p className="font-serif font-bold text-primary mt-4">
                  আল্লাহ তাআলা আমাদের সবাইকে কুরআন শেখার, অন্যকে শেখানোর এবং তার শিক্ষা অনুযায়ী আমল করার তাওফিক দান করুন। আমীন।
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border-subtle/40 flex justify-end bg-card-cream rounded-b-2xl shrink-0">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-primary text-background-warm font-semibold rounded-lg hover:bg-primary-hover active:scale-98 transition-all cursor-pointer"
              >
                বন্ধ করুন
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
