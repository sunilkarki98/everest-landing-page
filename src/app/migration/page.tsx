import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeatureGrid, FeatureItem } from "@/components/ui/FeatureGrid";
import { Container } from "@/components/layout/Container";
import ContactUs from "@/components/sections/ContactUs";
import { Users, Heart, ClipboardCheck, Landmark, Scale, BriefcaseBusiness } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migration Services | Everest Education",
  description: "Professional migration support tailored to your individual circumstances in Australia.",
};

const migrationServices: FeatureItem[] = [
  {
    id: "skilled",
    title: "Skilled Migration Visa",
    description: "Pathways for skilled workers to live and work in Australia permanently or temporarily.",
    icon: <BriefcaseBusiness size={28} />,
  },
  {
    id: "family",
    title: "Family Visa",
    description: "Reunite with your family members in Australia through various family visa subclasses.",
    icon: <Users size={28} />,
  },
  {
    id: "partner",
    title: "Partner Visa",
    description: "Bring your partner or spouse to Australia with expert guidance on evidence and documentation.",
    icon: <Heart size={28} />,
  },
  {
    id: "skill-assessment",
    title: "Skill Assessment",
    description: "Assistance with obtaining positive skill assessments from relevant Australian authorities.",
    icon: <ClipboardCheck size={28} />,
  },
  {
    id: "citizenship",
    title: "Citizenship Applications",
    description: "Complete support for permanent residents taking the final step to become Australian citizens.",
    icon: <Landmark size={28} />,
  },
  {
    id: "art-appeals",
    title: "ART Appeals",
    description: "Professional representation and assistance with Administrative Review Tribunal (ART) appeals.",
    icon: <Scale size={28} />,
  },
];

export default function MigrationPage() {
  return (
    <main>
      <PageHeader 
        title="Migration Services" 
        subtitle="Professional migration support tailored to your individual circumstances."
        breadcrumbs={[{ label: "Visa & Migration" }]}
      />
      
      <section className="py-20 bg-background">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Migration Pathways</h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              Whether you are a skilled professional, seeking family reunification, or looking to appeal a visa decision, our registered migration agents provide expert advice and representation.
            </p>
          </div>
          <FeatureGrid items={migrationServices} />
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
