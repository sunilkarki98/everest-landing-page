import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogSection from "@/components/sections/BlogSection";
import ContactUs from "@/components/sections/ContactUs";
import EmployeeSection from "@/components/sections/EmployeeSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import FooterSection from "@/components/sections/FooterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WelcomeSection from "@/components/sections/WelcomeSection";

export default function Page() {
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
      <ContactUs />
      {/* Footer Section */}
      <FooterSection />
    </>
  );
}
