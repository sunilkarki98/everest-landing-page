import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import GlobalContactSection from "@/components/sections/GlobalContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Everest Education",
  description: "Get in touch with Everest Education & Visa Services. View our office locations in Australia and Nepal.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Get in Touch" 
        subtitle="We are here to answer your questions and guide you on your journey to global exposure."
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      
      {/* We reuse the comprehensive Contact Us form from the homepage */}
      <div className="pt-10">
        <GlobalContactSection />
      </div>
    </main>
  );
}
