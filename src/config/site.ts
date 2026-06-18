// src/config/site.ts

export type MenuKey = "courses" | "visaServices" | "visaMigration" | "abroadStudy" | "otherServices" | string;

export type SubLink = {
  label: string;
  href: string;
  description?: string;
};

export type MenuItem = {
  key: MenuKey;
  label: string;
  href: string | null;
  links: SubLink[];
};

export const siteConfig = {
  name: "Everest Education & Visa Services",
  shortName: "Everest Education",
  description: "Trusted education & visa services in Australia. Family-owned, student-first.",
  foundedYear: 2006,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://everesteducation.com.au",
  
  contact: {
    emails: {
      main: "info@eevsgroup.com",
      secondary: "everesteduaustralia@gmail.com",
    },
    phones: {
      main: "+61 406 000 815",
      secondary: "+61 466 117 512",
    },
    address: "Unit 6, 17–23 Oatley Court, Belconnen ACT 2615, Australia",
  },

  social: {
    facebook: "https://www.facebook.com/EverestEducationGroup",
    twitter: "https://twitter.com/EverestEduGroup",
    instagram: "https://www.instagram.com/EverestEduGroup",
    linkedin: "https://www.linkedin.com/company/EverestEduGroup",
  },

  nav: [
    {
      key: "courses",
      label: "Courses",
      href: "/courses",
      links: [
        { label: "Health & Science", href: "/courses/health-science" },
        { label: "Information Technology (IT)", href: "/courses/it" },
        { label: "Engineering", href: "/courses/engineering" },
        { label: "Business & Management Studies", href: "/courses/business" },
        { label: "Cookery & Hospitality", href: "/courses/cookery" },
        { label: "Trade Courses", href: "/courses/trade" },
      ],
    },
    {
      key: "visaServices",
      label: "Visa Services",
      href: "/visa-services",
      links: [
        { label: "Student Visa Applications", href: "/visa-services/student-visa" },
        { label: "GTE Documentation", href: "/visa-services/gte" },
        { label: "Visa Extensions", href: "/visa-services/extensions" },
        { label: "Visa Guidance", href: "/visa-services/guidance" },
        { label: "Visa Compliance Support", href: "/visa-services/compliance" },
      ],
    },
    {
      key: "visaMigration",
      label: "Visa & Migration",
      href: "/migration",
      links: [
        { label: "Skilled Migration", href: "/migration/skilled" },
        { label: "Family Visa", href: "/migration/family" },
        { label: "Partner Visa", href: "/migration/partner" },
        { label: "Skill Assessment", href: "/migration/skill-assessment" },
        { label: "Citizenship Applications", href: "/migration/citizenship" },
        { label: "ART Appeals", href: "/migration/art-appeals" },
      ],
    },
    {
      key: "abroadStudy",
      label: "Abroad Study",
      href: "/abroad-study",
      links: [
        { label: "University Admissions", href: "/abroad-study/university" },
        { label: "College Admissions", href: "/abroad-study/college" },
        { label: "Course Selection", href: "/abroad-study/course-selection" },
        { label: "Scholarship Assistance", href: "/abroad-study/scholarships" },
        { label: "Student Counselling", href: "/abroad-study/counselling" },
        { label: "Documentation Support", href: "/abroad-study/documentation" },
      ],
    },
    {
      key: "otherServices",
      label: "Other Services",
      href: "/other-services",
      links: [
        { label: "Skill Assessment", href: "/other-services/skill-assessment" },
        { label: "OSHC & OVHC", href: "/other-services/oshc" },
        { label: "Taxation & Accounting", href: "/other-services/taxation" },
        { label: "Business Setup & Advisory", href: "/other-services/business" },
        { label: "Education Loan Guidance", href: "/other-services/loans" },
      ],
    },
  ] as MenuItem[],
};
