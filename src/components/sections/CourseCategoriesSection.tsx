"use client";

import React from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FeatureGrid, FeatureItem } from "../ui/FeatureGrid";
import { Stethoscope, Monitor, HardHat, Briefcase, ChefHat, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const courseCategories: FeatureItem[] = [
  {
    id: "health",
    title: "Health & Science",
    description: "Healthcare, Nursing, Medical Sciences, Public Health and more.",
    icon: <Stethoscope size={28} />,
    href: "/courses", // Points to the courses page
  },
  {
    id: "it",
    title: "Information Technology",
    description: "Software Development, Cybersecurity, Networking, Data Science and more.",
    icon: <Monitor size={28} />,
    href: "/courses",
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Civil, Mechanical, Electrical, Software and other engineering disciplines.",
    icon: <HardHat size={28} />,
    href: "/courses",
  },
  {
    id: "business",
    title: "Business & Management",
    description: "Business Administration, Marketing, Finance, Human Resources and more.",
    icon: <Briefcase size={28} />,
    href: "/courses",
  },
  {
    id: "cookery",
    title: "Cookery & Hospitality",
    description: "Commercial Cookery, Hospitality, Hotel Management and Tourism.",
    icon: <ChefHat size={28} />,
    href: "/courses",
  },
  {
    id: "trade",
    title: "Trade Courses",
    description: "Automotive, Construction, Carpentry, Plumbing, Electrical and related trades.",
    icon: <Wrench size={28} />,
    href: "/courses",
  },
];

export default function CourseCategoriesSection() {
  return (
    <section className="pb-16 lg:pb-24 pt-0 bg-slate-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionHeading 
              eyebrow="Explore Your Options" 
              title="Popular Course Categories" 
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Discover a wide range of study options designed to help you achieve your career and migration aspirations in Australia.
            </p>
          </div>
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 font-bold text-accent-text hover:text-accent transition-colors duration-300 group"
          >
            View All Courses 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* We reuse the DRY FeatureGrid from the interior pages */}
        <FeatureGrid items={courseCategories} columns={3} />
        
      </Container>
    </section>
  );
}
