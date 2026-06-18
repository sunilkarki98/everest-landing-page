import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeatureGrid, FeatureItem } from "@/components/ui/FeatureGrid";
import { Container } from "@/components/layout/Container";
import ContactUs from "@/components/sections/ContactUs";
import { ClipboardCheck, HeartPulse, Calculator, Briefcase, HandCoins } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Services | Everest Education",
  description: "Additional support services including insurance, taxation, business advisory, and more.",
};

const otherServices: FeatureItem[] = [
  {
    id: "skill-assessment",
    title: "Skill Assessment",
    description: "Professional assistance with migration-related skill assessments and documentation.",
    icon: <ClipboardCheck size={28} />,
  },
  {
    id: "insurance",
    title: "OSHC & OVHC",
    description: "Affordable health insurance solutions for international students and overseas visitors.",
    icon: <HeartPulse size={28} />,
  },
  {
    id: "taxation",
    title: "Taxation & Accounting",
    description: "Professional accounting, tax return filing, and financial support services.",
    icon: <Calculator size={28} />,
  },
  {
    id: "business",
    title: "Business Setup & Advisory",
    description: "Strategic guidance for establishing, managing, and growing businesses in Australia.",
    icon: <Briefcase size={28} />,
  },
  {
    id: "loans",
    title: "Education Loan Guidance",
    description: "Support and expert advice regarding educational financing and loan options.",
    icon: <HandCoins size={28} />,
  },
];

export default function OtherServicesPage() {
  return (
    <main>
      <PageHeader 
        title="Additional Services" 
        subtitle="Comprehensive support beyond education and migration."
        breadcrumbs={[{ label: "Other Services" }]}
      />
      
      <section className="py-20 bg-background">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">How We Can Help</h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              We offer a holistic suite of services to ensure your transition and continued life in Australia is as smooth and successful as possible.
            </p>
          </div>
          <FeatureGrid items={otherServices} />
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
