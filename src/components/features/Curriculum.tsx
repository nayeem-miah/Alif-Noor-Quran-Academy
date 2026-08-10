import Image from "next/image";
import { learningCards, secondaryStudies } from "./curriculumData";

export default function Curriculum() {
  return (
    <section id="curriculum" className="w-full py-16 sm:py-24 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark">
            আমি যা যা শেখাই
          </h2>
          <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3.5 mx-auto rounded-full" />
          <p className="text-text-secondary text-sm sm:text-base font-semibold mt-4 leading-relaxed">
            আপনার সন্তানের ইসলামী শিক্ষার মৌলিক ভিত্তি মজবুত করার জন্য সাজানো পাঠ্যক্রম।
          </p>
        </div>

        {/* Course Cards Grid with Illustration Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 animate-fade-in-up">
          {learningCards.map((card, idx) => (
            <div 
              key={card.id}
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
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                {card.subtitle && (
                  <span className="text-xs font-semibold text-[#D9A441] bg-[#D9A441]/10 px-3.5 py-1 rounded-full border border-[#D9A441]/20 mb-2 group-hover:bg-[#D9A441] group-hover:text-secondary-dark transition-all duration-300 shadow-sm">
                    {card.subtitle}
                  </span>
                )}
                
                <h3 className="font-serif text-xl font-bold text-primary tracking-tight group-hover:text-primary-hover transition-colors duration-200">
                  {card.title}
                </h3>
                               {card.items ? (
                  <div className="mt-4 space-y-2 w-full text-left">
                    {card.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 bg-[#FAF8F2] border border-border-subtle px-3 py-2 rounded-xl transition-all duration-200 hover:bg-[#F2ECE1]"
                      >
                        <svg className="w-4 h-4 text-accent shrink-0 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l2.4 5.6 5.6 2.4-5.6 2.4-2.4 5.6-2.4-5.6-5.6-2.4 5.6-2.4z"/>
                        </svg>
                        <span className="text-xs sm:text-sm font-semibold text-text-main leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-text-secondary text-sm leading-relaxed mt-2.5 font-medium flex-grow">
                    {card.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


