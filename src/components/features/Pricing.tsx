"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface PricingPlan {
  id: string;
  nameBn: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  featuresBn: string[];
  featuresEn: string[];
  isPopular?: boolean;
  whatsappMsgBn: string;
  whatsappMsgEn: string;
}

export default function Pricing() {
  const { language, t } = useLanguage();

  const plans: PricingPlan[] = [
    {
      id: "plan-01",
      nameBn: "প্রাইসিং প্ল্যান - ০১",
      nameEn: "Pricing Plan - 01",
      price: 2500,
      originalPrice: 3500,
      featuresBn: [
        "সপ্তাহে ৩ দিন (3 Days a Week)",
        "দৈনিক ১ ঘণ্টা (1 Hour Per Day)",
        "১ জন শিক্ষার্থী (One Student)",
        "সিঙ্গেল স্লট (Single Slot)",
        "ফ্রি ট্রায়াল ক্লাস (Free Trial)"
      ],
      featuresEn: [
        "3 Days a Week",
        "1 Hour Per Day",
        "1 Student (1-to-1 Class)",
        "Single Slot",
        "Free Trial Class"
      ],
      whatsappMsgBn: "আসসালামু আলাইকুম, আমি আমার সন্তানের জন্য 'প্রাইসিং প্ল্যান-০১ (৳২৫০০/মাস)' কোর্সে ভর্তি করাতে আগ্রহী।",
      whatsappMsgEn: "Assalamu Alaikum, I am interested in enrolling my child in 'Pricing Plan - 01 (BDT 2500/Month)'."
    },
    {
      id: "plan-02",
      nameBn: "প্রাইসিং প্ল্যান - ০২",
      nameEn: "Pricing Plan - 02",
      price: 4000,
      originalPrice: 6000,
      isPopular: true,
      featuresBn: [
        "সপ্তাহে ৬ দিন (6 Days a Week)",
        "দৈনিক ১ ঘণ্টা (1 Hour Per Day)",
        "১ জন শিক্ষার্থী (One Student)",
        "ডাবল স্লট (Double Slot)",
        "ফ্রি ট্রায়াল ক্লাস (Free Trial)"
      ],
      featuresEn: [
        "6 Days a Week",
        "1 Hour Per Day",
        "1 Student (1-to-1 Class)",
        "Double Slot",
        "Free Trial Class"
      ],
      whatsappMsgBn: "আসসালামু আলাইকুম, আমি আমার সন্তানের জন্য 'প্রাইসিং প্ল্যান-০২ (৳৪০০০/মাস)' কোর্সে ভর্তি করাতে আগ্রহী।",
      whatsappMsgEn: "Assalamu Alaikum, I am interested in enrolling my child in 'Pricing Plan - 02 (BDT 4000/Month)'."
    },
    {
      id: "plan-03",
      nameBn: "ফ্যামিলি প্যাকেজ (২ জন শিক্ষার্থী)",
      nameEn: "Family Package (2 Students)",
      price: 4000,
      originalPrice: 7000,
      featuresBn: [
        "সপ্তাহে ৩ দিন (3 Days a Week)",
        "দৈনিক ১ ঘণ্টা (1 Hour Per Day)",
        "২ জন শিক্ষার্থী (Two Students)",
        "ডাবল স্লট (Double Slot)",
        "ফ্রি ট্রায়াল ক্লাস (Free Trial)"
      ],
      featuresEn: [
        "3 Days a Week",
        "1 Hour Per Day",
        "2 Students (Family Class)",
        "Double Slot",
        "Free Trial Class"
      ],
      whatsappMsgBn: "আসসালামু আলাইকুম, আমি আমার সন্তানদের জন্য 'ফ্যামিলি প্যাকেজ (৳৪০০০/মাস)' কোর্সে ভর্তি করাতে আগ্রহী।",
      whatsappMsgEn: "Assalamu Alaikum, I am interested in enrolling my children in the 'Family Package (BDT 4000/Month)'."
    }
  ];

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      
      {/* Background radial soft light gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 animate-fade-in">
          <span className="text-xs sm:text-sm font-bold text-[#D9A441] bg-[#D9A441]/10 px-4 py-1.5 rounded-full border border-[#D9A441]/20">
            {t("কোর্স ফি", "Pricing Plans")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary-dark mt-4">
            {t("আমাদের সাশ্রয়ী প্রাইজ প্ল্যানসমূহ", "Our Affordable Pricing Plans")}
          </h2>
          <div className="w-12 h-[3.5px] bg-[#D9A441] mt-3.5 mx-auto rounded-full" />
          <p className="text-text-secondary text-sm sm:text-base font-semibold mt-4 leading-relaxed">
            {t(
              "আপনার সন্তানের জন্য সবচেয়ে উপযোগী ও সাশ্রয়ী কোর্স প্ল্যানটি বেছে নিন। প্রথম ক্লাসটি সম্পূর্ণ ফ্রি!",
              "Choose the most suitable and affordable course plan for your child. The first trial class is completely free!"
            )}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up items-stretch">
          {plans.map((plan) => {
            const planName = t(plan.nameBn, plan.nameEn);
            const planFeatures = language === "bn" ? plan.featuresBn : plan.featuresEn;
            const formattedPrice = language === "bn" ? plan.price.toLocaleString("bn-BD") : plan.price.toLocaleString("en-US");
            const formattedOriginal = plan.originalPrice ? (language === "bn" ? plan.originalPrice.toLocaleString("bn-BD") : plan.originalPrice.toLocaleString("en-US")) : "";
            const formattedSave = plan.originalPrice ? (language === "bn" ? (plan.originalPrice - plan.price).toLocaleString("bn-BD") : (plan.originalPrice - plan.price).toLocaleString("en-US")) : "";
            const planMsg = t(plan.whatsappMsgBn, plan.whatsappMsgEn);

            return (
              <div
                key={plan.id}
                className={`bg-[#FAF8F2] border rounded-3xl overflow-hidden p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative ${
                  plan.isPopular 
                    ? "border-[#D9A441] shadow-premium-lg ring-1 ring-[#D9A441]/30" 
                    : "border-border-subtle shadow-premium-sm hover:shadow-premium hover:border-primary/20"
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-4 right-4 bg-[#D9A441] text-secondary-dark text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm animate-pulse">
                    {t("জনপ্রিয়", "Popular")}
                  </span>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="border-b border-border-subtle/50 pb-5 mb-6 text-left">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-primary">
                      {planName}
                    </h3>
                    <p className="text-xs font-bold text-text-secondary/55 uppercase tracking-wider mt-1">
                      {t(plan.nameEn, plan.nameBn)}
                    </p>
                    
                    {/* Pricing info */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-4xl font-serif font-black text-primary">
                        ৳{formattedPrice}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-text-secondary">
                        {t("/ প্রতি মাস", "/ Month")}
                      </span>
                    </div>

                    {plan.originalPrice && (
                      <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm font-semibold">
                        <span className="text-text-secondary/70 line-through">
                          ৳{formattedOriginal}
                        </span>
                        <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 text-[11px] font-bold">
                          {t(`৳${formattedSave} সাশ্রয়`, `Save ৳${formattedSave}`)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {planFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-left">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-primary stroke-current" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-text-main">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`https://wa.me/8801852077834?text=${encodeURIComponent(planMsg)}`}
                  target="_blank"
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-center text-xs sm:text-sm shadow-premium-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? "bg-primary text-background-warm hover:bg-primary-hover hover:scale-[1.02] active:scale-98"
                      : "bg-[#D9A441] text-secondary-dark hover:bg-[#C59335] hover:scale-[1.02] active:scale-98"
                  }`}
                >
                  <span>{t("ভর্তি হতে যোগাযোগ করুন", "Enroll via WhatsApp")}</span>
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.905-6.99C16.488 1.876 14.012.842 11.371.841 5.937.841 1.512 5.26 1.508 10.7c-.001 1.737.457 3.43 1.32 4.938L1.86 20.198l4.787-1.254zM17.487 14.4c-.326-.163-1.93-.953-2.229-1.062-.3-.11-.518-.163-.735.163-.218.327-.844 1.062-1.034 1.28-.19.218-.38.245-.706.082-1.157-.578-2.062-1.012-2.883-2.422-.22-.377.22-.35.63-.1.368-.224.408-.27.61-.408.203-.136.102-.27-.051-.571-.153-.3-.735-1.77-.999-2.408-.266-.643-.538-.553-.735-.559-.19-.007-.408-.008-.626-.008-.218 0-.571.082-.87.408-.3.326-1.14 1.116-1.14 2.72 0 1.605 1.169 3.159 1.328 3.377.16.218 2.3 3.513 5.572 4.928.778.337 1.387.538 1.86.689.782.248 1.493.213 2.056.129.627-.094 1.93-.79 2.2-1.554.273-.764.273-1.417.19-1.554-.082-.137-.3-.218-.626-.38z" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
