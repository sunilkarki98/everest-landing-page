import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeatureGrid, FeatureItem } from "@/components/ui/FeatureGrid";
import { Container } from "@/components/layout/Container";
import ContactUs from "@/components/sections/ContactUs";
import { FileText, ShieldCheck, Clock, Compass, FileSearch } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Services | Everest Education",
  description: "Complete guidance for international students applying to study in Australia.",
};

const visaServices: FeatureItem[] = [
  {
    id: "student-visa",
    title: "Student Visa Applications",
    description: "End-to-end assistance with compiling and submitting your Student Visa (Subclass 500) application.",
    icon: <FileText size={28} />,
  },
  {
    id: "gte",
    title: "GTE Documentation",
    description: "Expert guidance in preparing a strong Genuine Temporary Entrant (GTE) statement and supporting evidence.",
    icon: <FileSearch size={28} />,
  },
  {
    id: "extensions",
    title: "Visa Extensions",
    description: "Support for extending your stay in Australia to continue your studies or transition to a new visa.",
    icon: <Clock size={28} />,
  },
  {
    id: "guidance",
    title: "Visa Guidance",
    description: "Personalized consultations to help you understand visa requirements, conditions, and pathways.",
    icon: <Compass size={28} />,
  },
  {
    id: "compliance",
    title: "Visa Compliance Support",
    description: "Ensuring you understand and adhere to all student visa conditions to maintain lawful status.",
    icon: <ShieldCheck size={28} />,
  },
];

export default function VisaServicesPage() {
  return (
    <main>
      <PageHeader 
        title="Student Visa Assistance" 
        subtitle="Complete guidance for international students applying to study in Australia."
        breadcrumbs={[{ label: "Visa Services" }]}
      />
      
      <section className="py-20 bg-background">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              Navigating the Australian visa system can be complex. Our experienced team is here to simplify the process and maximize your chances of a successful outcome.
            </p>
          </div>
          <FeatureGrid items={visaServices} />
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
