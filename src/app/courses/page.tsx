import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeatureGrid, FeatureItem } from "@/components/ui/FeatureGrid";
import { Container } from "@/components/layout/Container";
import ContactUs from "@/components/sections/ContactUs";
import { Stethoscope, Monitor, HardHat, Briefcase, ChefHat, Wrench } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Everest Education",
  description: "Explore study options including Health, IT, Engineering, Business, and Trade courses.",
};

const courseCategories: FeatureItem[] = [
  {
    id: "health",
    title: "Health & Science",
    description: "Healthcare, Nursing, Medical Sciences, Public Health and more.",
    icon: <Stethoscope size={28} />,
  },
  {
    id: "it",
    title: "Information Technology (IT)",
    description: "Software Development, Cybersecurity, Networking, Data Science and more.",
    icon: <Monitor size={28} />,
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Civil, Mechanical, Electrical, Software and other engineering disciplines.",
    icon: <HardHat size={28} />,
  },
  {
    id: "business",
    title: "Business & Management Studies",
    description: "Business Administration, Marketing, Finance, Human Resources and more.",
    icon: <Briefcase size={28} />,
  },
  {
    id: "cookery",
    title: "Cookery & Hospitality Management",
    description: "Commercial Cookery, Hospitality, Hotel Management and Tourism.",
    icon: <ChefHat size={28} />,
  },
  {
    id: "trade",
    title: "Trade Courses",
    description: "Automotive, Construction, Carpentry, Plumbing, Electrical and related trades.",
    icon: <Wrench size={28} />,
  },
];

export default function CoursesPage() {
  return (
    <main>
      <PageHeader 
        title="Explore Study Options" 
        subtitle="We help students find the right course and institution based on their goals and interests."
        breadcrumbs={[{ label: "Courses" }]}
      />
      
      <section className="py-20 bg-background">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Course Categories</h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              Discover a wide range of study options designed to help you achieve your career aspirations. We partner with top institutions to provide you with the best educational pathways.
            </p>
          </div>
          <FeatureGrid items={courseCategories} />
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
