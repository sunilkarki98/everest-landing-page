
"use client"
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
import AssociatedUniversities from "@/components/sections/AssociatedUniversities";
import { useEffect } from "react";
import FaqSection from "@/components/sections/FaqSection";
import BranchesMapSection from "@/components/sections/BranchesMapSection";

export default function Page() {
  // In your layout or home page
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
      {/* Footer Section */}
      <FooterSection />
    </>
  );
}
