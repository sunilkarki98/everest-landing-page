"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, Plane } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    id: "01",
    title: "Free Consultation",
    description: "Meet with our expert counselors to discuss your career goals, academic background, and preferred study destinations. We analyze your profile to find the perfect match.",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "University Selection",
    description: "We help you shortlist the best universities and courses based on your profile, budget, and long-term aspirations, ensuring maximum scholarship opportunities.",
    icon: Search,
  },
  {
    id: "03",
    title: "Application & Docs",
    description: "Our team assists with SOP writing, offer letter applications, and compiling all necessary financial documents to ensure a flawless application.",
    icon: FileText,
  },
  {
    id: "04",
    title: "Visa & Departure",
    description: "Complete visa lodgement support followed by comprehensive pre-departure briefings to prepare you for your exciting new life abroad.",
    icon: Plane,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Dark Premium Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <Container className="relative z-10">
        <div className="text-center mb-20">
          <SectionHeading
            eyebrow="Simple 4-Step Process"
            title="Your Journey to Success"
            titleColor="text-white"
            className="mb-6"
          />
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We've streamlined the complex process of studying abroad into four simple, transparent steps to get you to your dream destination faster.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-500 flex flex-col relative overflow-hidden">
                    
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Step Number Background (Large & Faded) */}
                    <div className="absolute -top-4 -right-2 text-[8rem] font-bold text-white/[0.03] group-hover:text-accent/[0.05] transition-colors duration-500 font-[family-name:var(--font-caveat)] leading-none select-none pointer-events-none">
                      {step.id}
                    </div>

                    {/* Icon & Badge Header */}
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-500 shadow-lg">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div className="text-sm font-bold text-white/40 tracking-widest">
                        STEP {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-grow">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Progress Indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                      <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
