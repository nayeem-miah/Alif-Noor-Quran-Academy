"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqsList: FAQItem[] = [
    {
      questionBn: "ক্লাসগুলো কীভাবে এবং কোন মাধ্যমে নেওয়া হয়?",
      questionEn: "How and through which platform are the classes conducted?",
      answerBn: "ক্লাসগুলো জুম (Zoom), গুগল মিট (Google Meet) বা হোয়াটসঅ্যাপ (WhatsApp) ভিডিও কলের মাধ্যমে সরাসরি লাইভ নেওয়া হয়। ক্লাসগুলোতে মডার্ন ডিজিটাল স্ক্রিন শেয়ারিং পদ্ধতি ব্যবহার করা হয়, যাতে শিশুরা সহজে অনুকরণ ও পাঠ বুঝতে পারে।",
      answerEn: "Classes are conducted live via Zoom, Google Meet, or WhatsApp video call. We use modern digital screen-sharing methods so children can clearly see the lessons and follow along easily."
    },
    {
      questionBn: "আমি কি আমার সন্তানের জন্য একটি ট্রায়াল ক্লাস নিতে পারি?",
      questionEn: "Can I get a trial class for my child?",
      answerBn: "হ্যাঁ, অবশ্যই! প্রথম ক্লাসটি সম্পূর্ণ ফ্রি ট্রায়াল ক্লাস। ট্রায়াল ক্লাসে আপনি শিক্ষক ও শিক্ষার্থীর মিথস্ক্রিয়া এবং শেখানোর পদ্ধতি স্বচক্ষে দেখে সিদ্ধান্ত নিতে পারবেন।",
      answerEn: "Yes, absolutely! The first session is a completely free trial class. This allows you to evaluate the teaching style and teacher-student interaction before making any commitment."
    },
    {
      questionBn: "ক্লাসের সময়সূচী কীভাবে নির্ধারিত হয়?",
      questionEn: "How is the class schedule determined?",
      answerBn: "আমাদের সময়সূচী সম্পূর্ণ ফ্লেক্সিবল। যেহেতু বিশ্বের বিভিন্ন দেশ (ইউকে, ইউএসএ, কানাডা ইত্যাদি) থেকে প্রবাসী শিক্ষার্থীরা যুক্ত হয়, তাই আমরা অভিভাবকদের সাথে আলোচনা করে তাদের সুবিধাজনক সময়ে ক্লাসের স্লট বরাদ্দ করি।",
      answerEn: "Our schedule is completely flexible. Since our students are residing across different timezones (UK, USA, Canada, etc.), we schedule the classes based on the parents' preferred slots."
    },
    {
      questionBn: "কোন কোন ভাষায় শিক্ষাদান করা হয়?",
      questionEn: "Which languages are used for instruction?",
      answerBn: "শিক্ষক বাংলা, সিলেটি উপভাষা, ইংরেজি, উর্দু ও হিন্দি ভাষায় সাবলীল ও পারদর্শী। আপনার সন্তানের যে ভাষায় সুবিধা হবে, শিক্ষক সেই ভাষা ব্যবহার করেই কুরআন ও তাজউইদ শিক্ষাদান করবেন।",
      answerEn: "The tutor is fluent in Bengali, Sylheti, English, Urdu, and Hindi. We will instruct using whichever language your child is most comfortable with."
    },
    {
      questionBn: "১ মাসের মানি-ব্যাক গ্যারান্টি কীভাবে কাজ করে?",
      questionEn: "How does the 1-month money-back guarantee work?",
      answerBn: "ইনশাআল্লাহ, আমরা আমাদের ক্লাসের মান নিয়ে আত্মবিশ্বাসী। যদি আপনার সন্তান নিয়মিত ১ মাস মনোযোগ দিয়ে ক্লাস করার পরেও তার কুরআন পাঠের অগ্রগতিতে কোনো দৃশ্যমান পরিবর্তন না দেখতে পান, তবে পরবর্তী মাস থেকে ক্লাস বন্ধ করার পূর্ণ স্বাধীনতা রয়েছে এবং আপনার ফি সম্পর্কে পুনর্বিবেচনা করা হবে।",
      answerEn: "In sha Allah, we are confident in our teaching standards. If your child attends regular classes for 1 month and you see no noticeable progress in their recitation, you have full freedom to stop the classes."
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
            {t("প্রশ্নোত্তর", "FAQ")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
            {t("সাধারণ কিছু জিজ্ঞাসিত প্রশ্নোত্তর", "Frequently Asked Questions")}
          </h2>
          <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3.5 mx-auto rounded-full" />
          <p className="text-text-secondary text-sm sm:text-base font-semibold mt-4 leading-relaxed">
            {t(
              "অনলাইন কুরআন শিক্ষা কোর্স সংক্রান্ত সচরাচর জিজ্ঞাসিত কিছু প্রয়োজনীয় প্রশ্নের উত্তর নিচে দেওয়া হলো।",
              "Answers to some of the most frequently asked questions about our online Quran and Arabic courses."
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 animate-fade-in-up">
          {faqsList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#FAF8F2] border border-border-subtle rounded-2xl overflow-hidden shadow-premium-sm transition-all duration-300 hover:border-primary/20"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 font-bold text-primary text-sm sm:text-base transition-colors hover:text-primary-hover cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif leading-snug">{t(faq.questionBn, faq.questionEn)}</span>
                  <div className={`w-6 h-6 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary text-background-warm' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[250px] border-t border-border-subtle/50" : "max-h-0"
                  }`}
                >
                  <div className="p-5 text-text-secondary text-xs sm:text-sm font-semibold leading-relaxed text-left">
                    {t(faq.answerBn, faq.answerEn)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
