import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

const WelcomeSection = dynamic(() => import("@/components/sections/WelcomeSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const CourseCategoriesSection = dynamic(() => import("@/components/sections/CourseCategoriesSection"));
const FeaturedSection = dynamic(() => import("@/components/sections/FeaturedSection"));
const AssociatedUniversities = dynamic(() => import("@/components/sections/AssociatedUniversities"));
const FeedbackSection = dynamic(() => import("@/components/sections/FeedbackSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const ContactUs = dynamic(() => import("@/components/sections/ContactUs"));
const BranchesMapSection = dynamic(() => import("@/components/sections/BranchesMapSection"));
const EmployeeSection = dynamic(() => import("@/components/sections/EmployeeSection"));

export default function Page() {
  return (
    <>
      {/* 1. Hero — Study • Work • Migrate — Australia */}
      <HeroSection />

      {/* 2. Family Message */}
      <WelcomeSection />



      {/* 4. Our Services — 6 premium cards */}
      <ServicesSection />

      {/* 3.5. Employee Section */}
      <EmployeeSection />

      {/* 4.5 Popular Course Categories */}
      <CourseCategoriesSection />

      {/* 5. Study in Australia — Sydney, Melbourne, Brisbane, Adelaide, Perth */}
      <FeaturedSection />

      {/* 6. Partner Universities — Grid */}
      <AssociatedUniversities />

      {/* 7. Student Success Stories — Testimonials */}
      <FeedbackSection />

      {/* 8. Latest Visa Updates & News */}
      <BlogSection />


      {/* 9. Contact Section — Split Layout */}
      <ContactUs />

      {/* 10. Map Section — Global Offices */}
      <BranchesMapSection />
    </>
  );
}
