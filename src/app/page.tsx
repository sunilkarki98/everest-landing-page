import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import { getGoogleReviews } from "@/lib/google-reviews";

const WelcomeSection = dynamic(() => import("@/components/sections/WelcomeSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const FeaturedSection = dynamic(() => import("@/components/sections/FeaturedSection"));
const StudyPathwaysSection = dynamic(() => import("@/components/sections/StudyPathwaysSection"));
const FeedbackSection = dynamic(() => import("@/components/sections/FeedbackSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const GlobalContactSection = dynamic(() => import("@/components/sections/GlobalContactSection"));
const EmployeeSection = dynamic(() => import("@/components/sections/EmployeeSection"));

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://eevsgroup.com",
  },
};

export default async function Page() {
  const testimonials = await getGoogleReviews();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eevsgroup.com/#organization",
        "name": "Everest Education & Visa Services",
        "url": "https://eevsgroup.com",
        "logo": "https://eevsgroup.com/logos/everestlogo.png",
        "sameAs": [
          "https://www.facebook.com/EEVSAustralia/",
          "https://twitter.com/EverestEduGroup",
          "https://www.instagram.com/EverestEduGroup",
          "https://www.linkedin.com/company/EverestEduGroup"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://eevsgroup.com/#localbusiness",
        "name": "Everest Education & Visa Services",
        "url": "https://eevsgroup.com",
        "telephone": "+61 406 000 815",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 1, Suite 7, 2-10 Oatley Court",
          "addressLocality": "Belconnen",
          "addressRegion": "ACT",
          "postalCode": "2617",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://eevsgroup.com/#website",
        "url": "https://eevsgroup.com",
        "name": "Everest Education & Visa Services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero — Study • Work • Migrate — Australia */}
      <HeroSection />

      {/* 2. Family Message */}
      <WelcomeSection />



      {/* 4. Our Services — 6 premium cards */}
      <ServicesSection />

      {/* 4.5 Study Pathways & Universities */}
      <StudyPathwaysSection />

      {/* 6. Study in Australia — Sydney, Melbourne, Brisbane, Adelaide, Perth */}
      <FeaturedSection />

      {/* 3.5. Employee Section */}
      <EmployeeSection />

      {/* 7. Student Success Stories — Testimonials */}
      <FeedbackSection testimonials={testimonials} />

      {/* 8. Latest Visa Updates & News */}
      <BlogSection />


      {/* 9. Global Contact Hub */}
      <GlobalContactSection />
    </>
  );
}
