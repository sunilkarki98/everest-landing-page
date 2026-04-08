// src/config/site.ts

export type MenuKey = "popular" | "student" | "migration" | "other" | string;

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
  name: "Everest Education",
  shortName: "Everest",
  description: "Connecting Life & Learning since 2006",
  foundedYear: 2006,
  url: "https://everestgroupgroup.com",
  
  contact: {
    emails: {
      nepal: "nepal@everestgroupgroup.com",
      adelaide: "adelaide@everestgroupgroup.com",
      newZealand: "director.nz@everestgroupgroup.com",
      bagbazar: "bagbazar@everest.edu.np",
      baglung: "baglung@everest.edu.np",
    },
    phones: {
      nepal: "+977-9800000000",
      adelaide: "+61 (08) 7225 7892",
      newZealand: "+64 95585152",
      bagbazar: "+977 (01) 4256121 / 5356121",
      baglung: "+977 (068) 522667",
    },
  },

  social: {
    facebook: "https://www.facebook.com/EverestEducationGroup",
    twitter: "https://twitter.com/EverestEduGroup",
    instagram: "https://www.instagram.com/EverestEduGroup",
    linkedin: "https://www.linkedin.com/company/EverestEduGroup",
  },

  nav: [
    {
      key: "popular",
      label: "Popular Courses",
      href: null,
      links: [
        { label: "Business Studies", href: "/courses/BusinessStudies" },
        { label: "Health And Science", href: "/courses/HealthAndScience" },
        { label: "Information Technologies", href: "/courses/InformationTechnologies" },
        { label: "Engineering", href: "/courses/Engineering" },
        { label: "Trade Courses", href: "/courses/TradeCourses" },
      ],
    },
    {
      key: "student",
      label: "Student Services",
      href: null,
      links: [
        { label: "Education Service", href: "/services/EducationalService" },
        { label: "Educational Partners", href: "/services/EducationalPartners" },
        { label: "ScholarShip", href: "/services/ScholarshipService" },
      ],
    },
    {
      key: "migration",
      label: "Migration Services",
      href: null,
      links: [
        { label: "Student Visa/SC 500", href: "/migration/StudentVisa" },
        { label: "Visitor Visa/SC600", href: "/migration/VisitorVisa" },
        { label: "TSS Visa/SC 482", href: "/migration/TssVisa" },
        { label: "Partner Visa", href: "/migration/PartnerVisa" },
        { label: "Skilled Work Regional Visa/SC 491", href: "/migration/RegionalWorkVisa" },
        { label: "Skilled Independent Visa", href: "/migration/IndependentVisa" },
        { label: "PSW Temporary Resident Visa", href: "/migration/new-zealand" },
        { label: "State Nomination Visa", href: "/migration/NominationVisa" },
        { label: "407 Training Visa/SC 407", href: "/migration/TrainingVisa" },
        { label: "Skill Assessment", href: "/migration/SKillAssessmentVisa" },
        { label: "AAT-MRT", href: "/migration/ArtMrtVisa" },
      ],
    },
    {
      key: "other",
      label: "Other Services",
      href: null,
      links: [
        { label: "OSHC/OHVC", href: "/services/OshcOhvcServices" },
        { label: "NAATI/PTE", href: "/services/NaatiPteService" },
        { label: "Professional Year", href: "/services/ProfessionalYear" },
      ],
    },
  ],
};
