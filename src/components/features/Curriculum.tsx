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

        {/* 1. Desktop Layout (Grid Asymmetric) */}
        <div className="hidden md:grid grid-cols-12 gap-6 mb-12 animate-fade-in-up">
          
          {/* Row 1: Three Equal Cards */}
          {learningCards.slice(0, 3).map((card) => (
            <div 
              key={card.id}
              className="col-span-4 bg-[#FAF8F2] border border-border-subtle rounded-2xl p-6 sm:p-7 flex flex-col items-start shadow-premium-sm hover:shadow-premium hover:bg-card-cream/35 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/5 border border-primary/10 text-primary mb-5">
                {card.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-primary text-left">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-3.5 font-medium text-left">
                {card.desc}
              </p>
            </div>
          ))}

          {/* Row 2: Expanded Makharij Card (col-span-8) */}
          <div className="col-span-8 bg-[#FAF8F2] border border-border-subtle rounded-2xl p-7 flex gap-6 items-center shadow-premium-sm hover:shadow-premium hover:bg-card-cream/35 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 border border-primary/10 shrink-0 text-primary">
              {learningCards[3].icon}
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-serif text-lg font-bold text-primary">
                {learningCards[3].title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mt-2.5 font-medium">
                {learningCards[3].desc}
              </p>
            </div>
          </div>

          {/* Row 2: Normal Namaz Card (col-span-4) */}
          <div className="col-span-4 bg-[#FAF8F2] border border-border-subtle rounded-2xl p-6 sm:p-7 flex flex-col items-start shadow-premium-sm hover:shadow-premium hover:bg-card-cream/35 transition-all duration-300">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/5 border border-primary/10 text-primary mb-5">
              {learningCards[4].icon}
            </div>
            <h3 className="font-serif text-lg font-bold text-primary text-left">
              {learningCards[4].title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mt-3.5 font-medium text-left">
              {learningCards[4].desc}
            </p>
          </div>

        </div>

        {/* 2. Mobile Layout (2x2 Grid + Full width Namaz Card) */}
        <div className="flex md:hidden flex-col gap-4 mb-10 animate-fade-in-up">
          
          {/* 2x2 Grid for First 4 Cards */}
          <div className="grid grid-cols-2 gap-4">
            {learningCards.slice(0, 4).map((card) => (
              <div 
                key={card.id}
                className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-premium-sm active:scale-98 transition-transform duration-200"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/5 border border-primary/10 text-primary mb-3 shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-serif text-sm font-bold text-primary leading-tight">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Full-width Card for Namaz (Islam) at the bottom */}
          <div className="w-full bg-[#FAF8F2] border border-border-subtle rounded-2xl p-6 flex flex-col items-center text-center shadow-premium-sm active:scale-98 transition-transform duration-200">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/5 border border-primary/10 text-primary mb-3">
              {learningCards[4].icon}
            </div>
            <h3 className="font-serif text-base font-bold text-primary">
              {learningCards[4].title}
            </h3>
            <p className="text-text-secondary text-xs leading-relaxed mt-2.5 font-medium max-w-xs">
              {learningCards[4].desc}
            </p>
          </div>

        </div>

        {/* 3. Highlighted Bottom Panel: "অন্যান্য অত্যাবশ্যকীয় শিক্ষা" */}
        <div className="w-full bg-primary text-background-warm rounded-2xl sm:rounded-3xl border border-primary/20 pt-5 pb-6 px-5 sm:pt-6 sm:pb-7 sm:px-8 md:pt-7 md:pb-8 md:px-10 shadow-premium-lg animate-fade-in relative overflow-hidden">
          
          {/* Atmospheric subtle radial glow inside the panel */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl pointer-events-none" />
          
          <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-left text-background-warm border-b border-background-warm/15 pb-3 mb-5 leading-tight">
            অন্যান্য অত্যাবশ্যকীয় শিক্ষা
          </h3>

          {/* Grid list items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
            {secondaryStudies.map((study, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2.5 text-left transition-transform duration-200 hover:translate-x-1"
              >
                <svg className="w-4 h-4 text-accent shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 5.6 5.6 2.4-5.6 2.4-2.4 5.6-2.4-5.6-5.6-2.4 5.6-2.4z"/>
                </svg>
                <span className="text-sm font-semibold text-background-warm/90 leading-tight">
                  {study}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
