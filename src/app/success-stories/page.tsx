import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import FeedbackSection from "@/components/sections/FeedbackSection";
import ContactUs from "@/components/sections/ContactUs";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Success Stories | Everest Education",
  description: "Celebrating the achievements and real experiences of our students who achieved their study and migration goals.",
};

export default function SuccessStoriesPage() {
  return (
    <main>
      <PageHeader 
        title="Student Success Stories" 
        subtitle="Celebrating the achievements of our students who successfully reached their education and migration goals."
        breadcrumbs={[{ label: "Success Stories" }]}
      />
      
      {/* Testimonials — no gap */}
      <FeedbackSection />

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[120px] bg-accent/20" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-[120px] bg-secondary/10" />

        <Container className="relative z-10 text-center max-w-4xl">
          <SectionHeading 
            eyebrow="Your Story Starts Here" 
            title="Be Our Next Success Story" 
            titleColor="text-white"
            className="mb-6"
          />
          <p className="text-white/80 text-lg sm:text-xl mb-10 leading-relaxed">
            Join thousands of students who have successfully achieved their education and migration goals with EEVS. Book a free consultation today and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-us" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full font-bold text-lg bg-accent text-primary hover:bg-gold transition-colors duration-300 shadow-xl hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
            >
              Book Free Consultation
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full font-bold text-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
