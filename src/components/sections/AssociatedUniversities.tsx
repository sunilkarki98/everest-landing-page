"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const universities = [
  { name: "University of Sydney", location: "Sydney, AU", ranking: "Top 20" },
  { name: "University of Toronto", location: "Toronto, CA", ranking: "Top 25" },
  { name: "University College London", location: "London, UK", ranking: "Top 10" },
  { name: "University of Auckland", location: "Auckland, NZ", ranking: "Top 70" },
  { name: "University of Melbourne", location: "Melbourne, AU", ranking: "Top 15" },
  { name: "King's College London", location: "London, UK", ranking: "Top 40" },
];

export default function AssociatedUniversities() {
  // Duplicate array to ensure seamless loop
  const marqueeItems = [...universities, ...universities, ...universities];

  return (
    <section id="universities" className="py-16 lg:py-24 bg-white overflow-hidden border-b border-border/40">
      <Container className="mb-10">
        <SectionHeading eyebrow="Global Network" title="500+ University Partnerships" className="text-center" />
        <p className="text-center mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          We collaborate with the world&apos;s leading institutions to ensure you find the perfect course for your career aspirations.
        </p>
      </Container>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-6 w-max pl-6"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {marqueeItems.map((uni, index) => (
            <div
              key={`${uni.name}-${index}`}
              className="flex-shrink-0 w-72 flex items-center justify-between p-5 rounded-2xl border border-border/60 bg-gradient-to-br from-[#FFFEF8] to-white hover:border-accent/50 hover:shadow-xl transition-all duration-300 cursor-pointer group/card relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold bg-[#F8F9FA] border border-border text-primary group-hover/card:bg-primary group-hover/card:text-white transition-colors duration-300">
                  {uni.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground group-hover/card:text-primary transition-colors">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>{uni.location}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="font-semibold text-accent-text">{uni.ranking}</span>
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover/card:opacity-100 group-hover/card:text-primary transition-all duration-300 -translate-x-2 group-hover/card:translate-x-0 relative z-10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
