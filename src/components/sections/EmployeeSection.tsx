"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUpContainer, fadeUpCard } from "@/lib/animations";
import { siteConfig } from "@/config/site";
import { teamMembers as team } from "@/data/home";

type EmployeeCardProps = {
  name: string;
  phone: string;
  role: string;
  description: string;
  image: string;
  priority?: boolean;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  phone,
  role,
  description,
  image,
  priority,
}) => {
  return (
    <motion.div
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-accent/30"
      variants={fadeUpCard}
    >
      {/* Image Container */}
      <div className="relative w-full h-[300px] sm:h-[320px] overflow-hidden bg-slate-50">
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Soft gradient overlay for social icons */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Social Icons on Hover - Sliding up slightly */}
        <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-3.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Twitter`}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Facebook`}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>

      {/* Content Box */}
      <div className="relative p-6 sm:p-7 flex flex-col flex-grow bg-white">
        <div className="mb-4">
           <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-primary text-xs font-bold text-white tracking-wider uppercase mb-3">
             {role}
           </span>
           <h3 className="text-xl sm:text-2xl font-bold text-primary leading-tight group-hover:text-accent transition-colors duration-300">
             {name}
           </h3>
           <p className="text-sm font-semibold text-slate-700 mt-2 flex items-center gap-1.5 antialiased">
             <Phone className="w-3.5 h-3.5 text-accent" />
             {phone}
           </p>
        </div>
        
        <p className="text-base leading-relaxed text-slate-700 font-medium flex-grow antialiased">
          {description}
        </p>
      </div>
    </motion.div>
  );
};


const EmployeeSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      {/* Heading */}
      <div className="text-center mb-16 px-4 relative z-10 flex flex-col items-center">
        <SectionHeading 
          eyebrow="Our Team" 
          title="Meet The Experts At EEVS" 
          eyebrowColor="text-accent" 
          titleColor="text-primary"
          className="mb-8"
        />
        <a 
          href="#team"
          className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-8 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/50 hover:text-accent transition-all duration-300"
        >
          View All Members <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Employee Cards */}
      <motion.div
        className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {team.map((member, index) => (
          <EmployeeCard key={member.name} {...member} priority={index < 2} />
        ))}
      </motion.div>
    </section>
  );
};

export default EmployeeSection;
