"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Globe,
  FileText,
  BookOpen,
  Users,
  Heart,
  Scale,
  ShieldCheck,
  Calculator,
  Building,
  Landmark,
  Plane
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  name: string;
  description: string;
}

const serviceCategories = {
  education: [
    { icon: School, name: "College & University Admissions", description: "Direct assistance applying to top institutions." },
    { icon: Briefcase, name: "Professional Year (PY)", description: "Enhance your employability with PY programs." },
    { icon: GraduationCap, name: "Scholarship Assistance", description: "Find and secure international scholarships." },
    { icon: FileText, name: "SOP & GTE Documentation", description: "Expert guidance on your supporting documents." },
    { icon: BookOpen, name: "PTE Preparation", description: "Comprehensive coaching for PTE success." },
    { icon: BookOpen, name: "IELTS Preparation", description: "Targeted training to achieve your desired band." },
    { icon: Users, name: "Education Counselling", description: "Personalized advice for your career pathway." },
    { icon: Plane, name: "Student Visa Assistance", description: "End-to-end support for your visa application." },
  ],
  migration: [
    { icon: Plane, name: "Skilled Migration Visas", description: "Pathways for skilled workers to live in Australia." },
    { icon: Users, name: "Family Visas", description: "Reunite with your family members abroad." },
    { icon: Heart, name: "Partner Visas", description: "Bring your partner with expert application support." },
    { icon: FileText, name: "Skill Assessments", description: "Assistance with obtaining positive assessments." },
    { icon: Globe, name: "Citizenship Applications", description: "The final step to becoming an Australian citizen." },
    { icon: Scale, name: "ART Appeals", description: "Professional representation for visa appeals." },
  ],
  other: [
    { icon: ShieldCheck, name: "OSHC & OVHC", description: "Affordable health insurance for your stay." },
    { icon: Calculator, name: "Taxation & Accounting", description: "Professional tax returns and financial support." },
    { icon: Building, name: "Business Setup & Advisory", description: "Guidance for establishing a business in Australia." },
    { icon: Landmark, name: "Education Loan Guidance", description: "Expert advice on educational financing options." },
  ],
};

// Lucide React School Icon since it wasn't imported directly above
import { School } from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"education" | "migration" | "other">("education");

  const tabs = [
    { id: "education", label: "Education Services" },
    { id: "migration", label: "Migration Services" },
    { id: "other", label: "Other Services" },
  ] as const;

  return (
    <section className="pt-16 lg:pt-24 pb-8 lg:pb-12 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Comprehensive Solutions <br /> for Your Future
            </>
          }
        />

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-accent text-primary shadow-lg shadow-accent/20"
                  : "bg-white text-muted-foreground border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {serviceCategories[activeTab].map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col text-left relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex items-start gap-3 mb-3 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center shrink-0 shadow-sm shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight pt-1">
                        {service.name}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
