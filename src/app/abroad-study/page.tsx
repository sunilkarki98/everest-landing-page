import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeatureGrid, FeatureItem } from "@/components/ui/FeatureGrid";
import { Container } from "@/components/layout/Container";
import ContactUs from "@/components/sections/ContactUs";
import { GraduationCap, Building2, SearchCheck, Award, MessageSquareHeart, FolderOpen, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Abroad | Everest Education",
  description: "Explore international education opportunities and achieve your academic goals.",
};

const abroadServices: FeatureItem[] = [
  {
    id: "university",
    title: "University Admissions",
    description: "Direct assistance with applying to leading universities across Australia and globally.",
    icon: <Building2 size={28} />,
  },
  {
    id: "college",
    title: "College Admissions",
    description: "Help finding and applying to top-tier vocational colleges and institutes.",
    icon: <GraduationCap size={28} />,
  },
  {
    id: "course",
    title: "Course Selection",
    description: "Expert advice on selecting the right course to align with your career and migration goals.",
    icon: <SearchCheck size={28} />,
  },
  {
    id: "scholarships",
    title: "Scholarship Assistance",
    description: "Guidance on identifying and applying for international student scholarships and grants.",
    icon: <Award size={28} />,
  },
  {
    id: "counselling",
    title: "Student Counselling",
    description: "One-on-one career and education counselling to plan your future pathway.",
    icon: <MessageSquareHeart size={28} />,
  },
  {
    id: "documentation",
    title: "Documentation Support",
    description: "Thorough review and preparation of all required academic and financial documents.",
    icon: <FolderOpen size={28} />,
  },
  {
    id: "processing",
    title: "Application Processing",
    description: "Fast and reliable processing of your education applications from start to finish.",
    icon: <Send size={28} />,
  },
];

export default function AbroadStudyPage() {
  return (
    <main>
      <PageHeader 
        title="Study Abroad Opportunities" 
        subtitle="Explore international education opportunities and achieve your academic goals."
        breadcrumbs={[{ label: "Abroad Study" }]}
      />
      
      <section className="py-20 bg-background">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">How We Help You</h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              From choosing the right university to submitting your final application, our comprehensive study abroad services cover every step of your international education journey.
            </p>
          </div>
          <FeatureGrid items={abroadServices} />
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
