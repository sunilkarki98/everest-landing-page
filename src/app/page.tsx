import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

const WelcomeSection = dynamic(() => import("@/components/sections/WelcomeSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const FeaturedSection = dynamic(() => import("@/components/sections/FeaturedSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const EmployeeSection = dynamic(() => import("@/components/sections/EmployeeSection"));
const FeedbackSection = dynamic(() => import("@/components/sections/FeedbackSection"));
const BranchesMapSection = dynamic(() => import("@/components/sections/BranchesMapSection"));
const AssociatedUniversities = dynamic(() => import("@/components/sections/AssociatedUniversities"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
const ContactUs = dynamic(() => import("@/components/sections/ContactUs"));

export default function Page() {
  // In your layout or home page

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <FeaturedSection />
      <BlogSection />
      <EmployeeSection />
      <FeedbackSection />
      <BranchesMapSection />
      <AssociatedUniversities />
      <FaqSection />
      <ContactUs />
    </>
  );
}
