import Hero from "@/components/Hero";
import BlogSection from "@/components/sections/BlogSection";
import ContactUs from "@/components/sections/ContactUs";
import EmployeeSection from "@/components/sections/EmployeeSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import FaqSection from "@/components/sections/FaqSection";
import BranchesMapSection from "@/components/sections/BranchesMapSection";
import AssociatedUniversities from "@/components/sections/AssociatedUniversities";

export default function Page() {
  // In your layout or home page

  return (
    <>
      {/* Hero Section */}
      <Hero />
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
