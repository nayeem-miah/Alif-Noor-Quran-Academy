import Image from "next/image";
import { aboutItems } from "./aboutData";

export default function About() {
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
