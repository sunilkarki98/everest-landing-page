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

export default async function Page() {
  const testimonials = await getGoogleReviews();

  return (
    <>
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
