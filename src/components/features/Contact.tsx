/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [timezone, setTimezone] = useState("");
  const [age, setAge] = useState("");
  const [timePref, setTimePref] = useState("morning");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !timezone || !age) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          timezone,
          age,
          timePref,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      setSubmitted(true);
      // Reset form fields
      setName("");
      setContact("");
      setTimezone("");
      setAge("");
      setTimePref("morning");
    } catch (error: any) {
      console.error("Booking error:", error);
      alert(t(
        `বুকিং সম্পন্ন করতে সমস্যা হয়েছে: ${error.message || "অনুগ্রহ করে আবার চেষ্টা করুন"}`,
        `Failed to submit booking: ${error.message || "Please try again later"}`
      ));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPrefLabel = (val: string) => {
    switch (val) {
      case "morning":
        return t("সকাল (Morning)", "Morning");
      case "afternoon":
        return t("দুপুর (Afternoon)", "Afternoon");
      case "evening":
        return t("বিকাল (Evening)", "Evening");
      case "night":
        return t("রাত (Night)", "Night");
      default:
        return t("সকাল (Morning)", "Morning");
    }
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-background-warm flex items-center justify-center border-t border-border-subtle relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start order-2 md:order-1 animate-fade-in-up">
            
            {/* Heading */}
            <div className="flex flex-col items-start w-full text-left">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary">
                {t("যোগাযোগ করুন", "Contact Us")}
              </h2>
              <div className="w-12 h-[3.5px] bg-[#D9A441] mt-2.5 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-medium mt-5 max-w-sm text-left">
              {t(
                "আপনার কোনো প্রশ্ন থাকলে বা ক্লাস বুক করতে চাইলে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি WhatsApp-এ মেসেজ দিন।",
                "If you have any questions or would like to book a class, fill out the form below or send a message directly on WhatsApp."
              )}
            </p>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/8801852077834"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#FDFCF9] border border-border-subtle/75 rounded-2xl p-5 flex items-start gap-4 shadow-premium-sm transition-all duration-300 hover:bg-[#F2EFE6]/40 hover:border-border-subtle mt-6 cursor-pointer text-left"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] shrink-0">
                <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.905-6.99C16.488 1.876 14.012.842 11.371.841 5.937.841 1.512 5.26 1.508 10.7c-.001 1.737.457 3.43 1.32 4.938L1.86 20.198l4.787-1.254zM17.487 14.4c-.326-.163-1.93-.953-2.229-1.062-.3-.11-.518-.163-.735.163-.218.327-.844 1.062-1.034 1.28-.19.218-.38.245-.706.082-1.157-.578-2.062-1.012-2.883-2.422-.22-.377.22-.35.63-.1.368-.224.408-.27.61-.408.203-.136.102-.27-.051-.571-.153-.3-.735-1.77-.999-2.408-.266-.643-.538-.553-.735-.559-.19-.007-.408-.008-.626-.008-.218 0-.571.082-.87.408-.3.326-1.14 1.116-1.14 2.72 0 1.605 1.169 3.159 1.328 3.377.16.218 2.3 3.513 5.572 4.928.778.337 1.387.538 1.86.689.782.248 1.493.213 2.056.129.627-.094 1.93-.79 2.2-1.554.273-.764.273-1.417.19-1.554-.082-.137-.3-.218-.626-.38z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif text-lg font-bold text-primary leading-tight">
                  WhatsApp
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm font-medium mt-1">
                  {t("সরাসরি কথা বলতে মেসেজ দিন", "Message to chat directly")}
                </p>
                <span className="text-[#22C55E] text-xs sm:text-sm font-bold mt-2 flex items-center">
                  {t("মেসেজ পাঠান →", "Send Message →")}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:sheikhshakibahomd@gmail.com"
              className="w-full bg-[#FDFCF9] border border-border-subtle/75 rounded-2xl p-5 flex items-start gap-4 shadow-premium-sm transition-all duration-300 hover:bg-[#F2EFE6]/40 hover:border-border-subtle mt-4 cursor-pointer text-left"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/5 border border-primary/10 text-primary shrink-0">
                <svg className="w-5.5 h-5.5 fill-none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif text-lg font-bold text-primary leading-tight">
                  {t("ইমেইল", "Email")}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm font-medium mt-1">
                  {t("বিস্তারিত জানতে ইমেইল করুন", "Email for detailed inquiries")}
                </p>
                <span className="text-primary text-xs sm:text-sm font-semibold mt-2 break-all">
                  sheikhshakibahomd@gmail.com
                </span>
              </div>
            </a>

          </div>

          {/* Right Column: Class Booking Form */}
          <div className="md:col-span-7 w-full order-1 md:order-2 animate-fade-in relative">
            
            {/* Form container card */}
            <div className="relative bg-card-cream/35 border border-border-subtle rounded-2xl p-6 sm:p-8 md:p-10 shadow-premium-lg overflow-hidden">
              
              {/* Subtle top-right decorative gold shape */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D9A441]/8 rounded-full pointer-events-none" />

              {/* Form Heading */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary text-left mb-6 sm:mb-8">
                {t("ক্লাস বুকিং ফর্ম", "Class Booking Form")}
              </h3>

              {submitted ? (
                /* Success message state */
                <div className="bg-emerald-50/80 border border-emerald-100 text-emerald-800 rounded-xl p-6 text-center flex flex-col items-center gap-4 animate-fade-in">
                  <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left leading-relaxed">
                    <h4 className="font-bold text-base text-emerald-950 text-center mb-1">
                      {t("সফলভাবে বুকিং সম্পন্ন হয়েছে!", "Booking Submitted Successfully!")}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900 text-center font-medium">
                      {t(
                        "আলহামদুলিল্লাহ, আপনার বুকিং অনুরোধটি সফলভাবে জমা দেওয়া হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব ইনশাআল্লাহ।",
                        "Alhamdulillah, your booking request has been successfully submitted! We will contact you soon In sha Allah."
                      )}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-primary underline hover:text-primary-hover focus:outline-none cursor-pointer"
                  >
                    {t("নতুন আরেকটি ফর্ম পূরণ করুন", "Fill out another form")}
                  </button>
                </div>
              ) : (
                /* Interactive Form fields */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                  
                  {/* Parent Full Name */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="parentName" className="text-xs sm:text-sm font-bold text-primary mb-2">
                      {t("অভিভাবকের নাম", "Parent's Full Name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      placeholder={t("আপনার নাম", "Your Full Name")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-text-main placeholder-text-secondary/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-sm font-semibold shadow-premium-sm"
                    />
                  </div>

                  {/* Desktop 2-column layout block */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    
                    {/* Contact Info (Email or Phone) */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="contactInfo" className="text-xs sm:text-sm font-bold text-primary mb-2">
                        {t("ইমেইল বা হোয়াটসঅ্যাপ নম্বর", "Email or WhatsApp Number")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contactInfo"
                        type="text"
                        required
                        placeholder="e.g. name@mail.com / +12345"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-text-main placeholder-text-secondary/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-sm font-semibold shadow-premium-sm"
                      />
                    </div>

                    {/* Timezone */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="timezone" className="text-xs sm:text-sm font-bold text-primary mb-2">
                        {t("দেশ (Timezone)", "Country (Timezone)")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="timezone"
                        type="text"
                        required
                        placeholder="e.g. USA, UK, Canada"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-text-main placeholder-text-secondary/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-sm font-semibold shadow-premium-sm"
                      />
                    </div>

                    {/* Child Age */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="childAge" className="text-xs sm:text-sm font-bold text-primary mb-2">
                        {t("সন্তানের বয়স", "Child's Age")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="childAge"
                        type="text"
                        required
                        placeholder={t("যেমন: ৮ বছর", "e.g. 8 years")}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-text-main placeholder-text-secondary/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-sm font-semibold shadow-premium-sm"
                      />
                    </div>

                    {/* Time Preference dropdown selection */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs sm:text-sm font-bold text-primary mb-2">
                        {t("পছন্দের সময়", "Preferred Time")} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsOpenSelect(!isOpenSelect)}
                          className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white text-text-main text-sm font-semibold flex items-center justify-between cursor-pointer focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-left shadow-premium-sm"
                        >
                          <span>{getPrefLabel(timePref)}</span>
                          <svg className={`w-5 h-5 text-primary transition-transform duration-200 ${isOpenSelect ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {isOpenSelect && (
                          <>
                            {/* Backdrop overlay to close on outside click */}
                            <div className="fixed inset-0 z-10" onClick={() => setIsOpenSelect(false)} />
                            
                            <div className="absolute bottom-full left-0 w-full mb-2 bg-[#FDFCF9] border border-border-subtle rounded-xl shadow-premium-lg z-20 py-1 overflow-hidden animate-fade-in">
                              {[
                                "morning",
                                "afternoon",
                                "evening",
                                "night"
                              ].map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    setTimePref(option);
                                    setIsOpenSelect(false);
                                  }}
                                  className={`w-full px-4 py-2.5 text-sm text-text-main text-left cursor-pointer transition-colors duration-150 hover:bg-[#F2EFE6] font-semibold ${timePref === option ? 'bg-[#F2EFE6] text-primary' : ''}`}
                                >
                                  {option === "morning" ? t("সকাল (Morning)", "Morning") : option === "afternoon" ? t("দুপুর (Afternoon)", "Afternoon") : option === "evening" ? t("বিকাল (Evening)", "Evening") : t("রাত (Night)", "Night")}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 bg-primary text-background-warm font-bold rounded-full shadow-premium hover:bg-primary-hover active:scale-98 transition-all duration-200 mt-2 cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-background-warm" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t("প্রসেস হচ্ছে...", "Processing...")}</span>
                      </>
                    ) : (
                      <span>{t("সাবমিট করুন", "Submit Booking")}</span>
                    )}
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
