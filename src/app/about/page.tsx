import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import EmployeeSection from "@/components/sections/EmployeeSection";
import ContactUs from "@/components/sections/ContactUs";
import { Target, Eye, Flag, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Everest Education",
  description: "Learn about Everest Education & Visa Services (EEVS) and our mission to empower students globally.",
};

const coreValues = [
  {
    title: "Our Mission",
    description: "To empower students and migrants by providing professional, ethical, and reliable education and migration services.",
    icon: <Target size={32} className="text-accent mb-4" />,
  },
  {
    title: "Our Vision",
    description: "To become a globally recognized education and migration consultancy known for excellence, integrity, and success.",
    icon: <Eye size={32} className="text-accent mb-4" />,
  },
  {
    title: "Our Goal",
    description: "To help individuals unlock opportunities through quality education and successful migration pathways.",
    icon: <Flag size={32} className="text-accent mb-4" />,
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader 
        title="Who We Are" 
        subtitle="Everest Education & Visa Services (EEVS) is a trusted consultancy dedicated to helping you achieve your goals."
        breadcrumbs={[{ label: "About Us" }]}
      />
      
      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                eyebrow="Everest Since 2006" 
                title="Your Trusted Partner in Global Education" 
                className="mb-6"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Everest Education & Visa Services (EEVS) is a trusted education and migration consultancy dedicated to helping students and migrants achieve their goals through expert guidance and personalized support.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With deep roots in Australia and Nepal as a family-owned business, we understand the complexities of moving abroad. We strive to provide transparent, end-to-end assistance for every step of your journey.
              </p>
              
              <div className="flex items-center gap-4 mt-8 p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
                <ShieldCheck size={40} className="text-secondary shrink-0" />
                <p className="font-semibold text-primary">
                  15+ Years of Experience helping over 10,000 students successfully achieve their goals with a 98% success rate.
                </p>
              </div>
            </div>
            
            {/* Image Placeholder (can be replaced with actual office/team image) */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                 {/* Decorative placeholder */}
                 <div className="text-center p-8">
                   <div className="w-24 h-24 bg-white/50 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-md shadow-lg border border-white">
                      <span className="text-4xl">🏢</span>
                   </div>
                   <p className="font-bold text-slate-500 tracking-widest uppercase">Office Showcase</p>
                 </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Goal Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <Card key={idx} className="p-8 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-accent/50 bg-white group">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <div className="py-10">
         <EmployeeSection />
      </div>

      {/* Partner With Us CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <SectionHeading 
            eyebrow="Collaborate With EEVS" 
            title="Partner With Us" 
            titleColor="text-white"
            className="mb-6"
          />
          <p className="text-white/80 text-xl mb-10 leading-relaxed">
            We are always looking to build successful international partnerships. Collaborate with EEVS to create new educational opportunities and expand global reach together.
          </p>
          <a 
            href="#contact-us" 
            className="inline-flex items-center justify-center h-14 px-8 rounded-full font-bold text-lg bg-accent text-primary hover:bg-gold transition-colors duration-300 shadow-xl hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
          >
            Get In Touch Today
          </a>
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
