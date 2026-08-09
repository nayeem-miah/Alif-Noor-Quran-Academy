import { ReactNode } from "react";

export interface AboutItem {
  icon: ReactNode;
  text: string;
}

export const aboutItems: AboutItem[] = [
  {
    icon: (
      <svg 
        className="w-5 h-5 text-primary shrink-0" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    text: "হাফিজ ও কারী"
  },
  {
    icon: (
      <svg 
        className="w-5 h-5 text-primary shrink-0" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 10l12-3M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
      </svg>
    ),
    text: "নাশিদ শিল্পী (Nasheed artist)"
  },
  {
    icon: (
      <svg 
        className="w-5 h-5 text-primary shrink-0" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    text: "ফাজিল (স্নাতক) অধ্যয়নরত"
  },
  {
    icon: (
      <svg 
        className="w-5 h-5 text-primary shrink-0" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "৫ বছরের অনলাইন শিক্ষাদানের অভিজ্ঞতা"
  },
  {
    icon: (
      <svg 
        className="w-5 h-5 text-primary shrink-0" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    text: "দারুল কিরাতে ৮ বছরের শিক্ষা"
  }
];
