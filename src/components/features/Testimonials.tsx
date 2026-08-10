/* eslint-disable react/no-unescaped-entities */
"use client";

interface Testimonial {
  quote: string;
  author: string;
  relation: string;
  location: string;
  avatarText: string;
}

export default function Testimonials() {
  const testimonialsList: Testimonial[] = [
    {
      quote: "আলহামদুলিল্লাহ, শিক্ষক অত্যন্ত ধৈর্যশীল ও আন্তরিক। আমার ছেলের বয়স ৬ বছর, সে খুব আগ্রহ নিয়ে ক্লাস করে। অনলাইনে জুমের স্ক্রিন শেয়ারিংয়ের মাধ্যমে ক্লাস নেওয়াতে মনোযোগ ধরে রাখা অনেক সহজ হয়। আমরা খুবই সন্তুষ্ট!",
      author: "উম্মে ফাতেমা",
      relation: "অভিভাবক (মাতা)",
      location: "লন্ডন, যুক্তরাজ্য",
      avatarText: "UF"
    },
    {
      quote: "বিদেশে বড় হওয়া বাচ্চাদের বাংলা বা আরবি উচ্চারণ শেখানো বেশ কঠিন। কিন্তু শাকিল ভাইয়ের পাঠদানের সহজ পদ্ধতি আমার মেয়েকে খুব দ্রুত মাখারিজ ও শুদ্ধ কুরআন পাঠ শিখতে সাহায্য করেছে। ওনার শিক্ষকতা প্রশংসনীয়।",
      author: "আব্দুর রহমান",
      relation: "অভিভাবক (পিতা)",
      location: "নিউ ইয়র্ক, যুক্তরাষ্ট্র",
      avatarText: "AR"
    },
    {
      quote: "প্রতি ক্লাসে পাশে বসে থাকার প্রয়োজন হয় না, উনি নিজ দায়িত্বে মনোযোগ দিয়ে পড়াশোনা করিয়ে নেন। ১-টু-১ ক্লাস হওয়াতে আমার বাচ্চা সম্পূর্ণ ফোকাস করতে পারে। প্রবাসী পরিবারগুলোর জন্য এটি চমৎকার সুযোগ।",
      author: "ফারহানা আক্তার",
      relation: "অভিভাবক (মাতা)",
      location: "টরন্টো, কানাডা",
      avatarText: "FA"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 bg-card-cream/35 flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      
      {/* Background soft glowing circle */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
            মতামত • Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
            সন্তোষজনক অভিভাবক ও শিক্ষার্থীদের প্রতিক্রিয়া
          </h2>
          <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3.5 mx-auto rounded-full" />
          <p className="text-text-secondary text-sm sm:text-base font-semibold mt-4 leading-relaxed">
            বিশ্বের বিভিন্ন দেশের প্রবাসী অভিভাবকদের বাস্তব ও অনুপ্রেরণামূলক মতামত।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 animate-fade-in-up">
          {testimonialsList.map((test, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF8F2] border border-border-subtle rounded-2xl p-6 sm:p-8 shadow-premium-sm hover:shadow-premium hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {/* Quote marks icon */}
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M14 17h3l2-4V7h-6v6h3zM1 13h3l2-4V7H0v6h3z" />
                </svg>
              </div>

              <div>
                {/* Quote Text */}
                <p className="text-text-secondary text-sm sm:text-sm+ leading-relaxed font-semibold italic text-left relative z-10 pr-4">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Information */}
              <div className="flex items-center gap-3.5 mt-8 border-t border-border-subtle/40 pt-5">
                <div className="w-10 h-10 rounded-full bg-primary text-background-warm flex items-center justify-center font-bold text-xs shadow-premium-sm">
                  {test.avatarText}
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-primary leading-tight">
                    {test.author}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-text-secondary mt-0.5">
                    {test.relation} — <span className="text-[#D9A441]">{test.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
