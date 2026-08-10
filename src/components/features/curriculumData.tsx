import { ReactNode } from "react";

export interface LearningCard {
  id: string;
  titleBn: string;
  titleEn: string;
  subtitleBn?: string;
  subtitleEn?: string;
  descBn: string;
  descEn: string;
  image: string;
  icon?: ReactNode;
  itemsBn?: string[];
  itemsEn?: string[];
}

export const learningCards: LearningCard[] = [
  {
    id: "qaida",
    titleBn: "নূরানী কায়দা",
    titleEn: "Noorani Qaida",
    subtitleBn: "বেসিক নূরানী কায়দা",
    subtitleEn: "Basic Noorani Qaida",
    descBn: "আরবি হরফ চেনা এবং সঠিক উচ্চারণের প্রথম মৌলিক ধাপ।",
    descEn: "The fundamental first step to recognizing Arabic letters and correct pronunciation.",
    image: "/images/qaida.png",
    icon: (
      <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: "quran",
    titleBn: "নাজেরা (কুরআন তিলাওয়াত)",
    titleEn: "Quran Recitation",
    subtitleBn: "সহীহশুদ্ধভাবে অনর্গল কুরআন তেলাওয়াত",
    subtitleEn: "Fluent Quran Recitation",
    descBn: "সাবলীলভাবে ও তাজওয়ীদ সহকারে পবিত্র কুরআন পাঠ।",
    descEn: "Fluent and smooth reading of the Holy Quran with proper Tajweed rules.",
    image: "/images/quran.png",
    icon: (
      <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: "makharij",
    titleBn: "মাখারিজ সংশোধন",
    titleEn: "Makharij Correction",
    subtitleBn: "সঠিক উচ্চারণ ও তাজউইদ",
    subtitleEn: "Correct Pronunciation & Tajweed",
    descBn: "হরফগুলো কোথা থেকে উচ্চারিত হয় তার সঠিক জ্ঞান এবং ত্রুটি সংশোধন।",
    descEn: "Detailed learning of letter origins and rectifying recitation mistakes.",
    image: "/images/makharij.png",
    icon: (
      <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    )
  },
  {
    id: "arabic",
    titleBn: "আরবি পড়া",
    titleEn: "Arabic Reading",
    subtitleBn: "কুরআনের ভাষা শিক্ষা",
    subtitleEn: "Language of the Quran",
    descBn: "কুরআনের ভাষা বুঝতে সহায়ক প্রাথমিক আরবি পঠন।",
    descEn: "Basic Arabic reading skills to help understand and connect with the Quran.",
    image: "/images/arabic.png",
    icon: (
      <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.313 1.565-.953 3.051-1.895 4.385m-2.69-2.885A18.04 18.04 0 016.16 6h6.885" />
      </svg>
    )
  },
  {
    id: "namaz",
    titleBn: "নামাজ শিক্ষা",
    titleEn: "Salah Education",
    subtitleBn: "ব্যবহারিক নামাজ ও দোয়া",
    subtitleEn: "Practical Prayer & Duas",
    descBn: "ব্যবহারিক পদ্ধতিতে সঠিক নামাজ আদায়ের নিয়মাবলী।",
    descEn: "Practical, step-by-step guidance on how to perform prayers correctly.",
    image: "/images/namaz.png",
    icon: (
      <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "essential",
    titleBn: "অন্যান্য অত্যাবশ্যকীয় শিক্ষা",
    titleEn: "Essential Studies",
    subtitleBn: "মৌলিক ইসলামী জ্ঞান",
    subtitleEn: "Basic Islamic Knowledge",
    descBn: "সূরা ও দোয়া মুখস্থ, ছয় কালিমা, দৈনন্দিন মাসনুন আমল এবং প্রাথমিক আকাইদ শিক্ষা।",
    descEn: "Memorizing Surahs & Duas, 6 Kalimahs, daily prayers, and basic Islamic manners.",
    image: "/images/essential.png",
    itemsBn: [
      "সূরা ও দোয়া মুখস্থ",
      "ছয় কালিমা",
      "দৈনন্দিন দোয়া ও মাসনুন আমল",
      "প্রাথমিক ইসলামী জ্ঞান (আকাইদ)"
    ],
    itemsEn: [
      "Memorizing Surahs & Duas",
      "Six Kalimahs",
      "Daily Prayers & Sunnah acts",
      "Basic Islamic Creed (Aqidah)"
    ]
  }
];

