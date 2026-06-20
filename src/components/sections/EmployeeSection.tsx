"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUpContainer, fadeUpCard } from "@/lib/animations";
import { siteConfig } from "@/config/site";

type EmployeeCardProps = {
  name: string;
  phone: string;
  role: string;
  description: string;
  image: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  phone,
  role,
  description,
  image,
}) => {
  return (
    <motion.div
      className="relative group bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 flex flex-col h-full transform transition duration-500 hover:-translate-y-2 border border-slate-100"
      variants={fadeUpCard}
    >
      {/* Image with tighter structural height to reduce overall card size */}
      <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Social Icons on Hover */}
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/40 backdrop-blur-sm z-20">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-accent hover:text-primary transition transform hover:scale-110 shadow-lg"
          >
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Twitter`}
            className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-accent hover:text-primary transition transform hover:scale-110 shadow-lg"
          >
            <Twitter className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Facebook`}
            className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-accent hover:text-primary transition transform hover:scale-110 shadow-lg"
          >
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Text Info sliding box */}
      <div className="relative flex-grow flex flex-col overflow-hidden">
        {/* Navy Shade Background animates by transforming its Y axis perfectly to fill the container */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-primary/90 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
        
        {/* Content Box */}
        <div className="relative z-10 p-6 flex flex-col flex-grow transition-colors duration-500 group-hover:text-white">
          <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors">{name}</h3>
          <p className="text-sm font-semibold text-accent mt-1 uppercase tracking-wider">{role}</p>
          <p className="text-base mt-3 font-medium opacity-90 text-slate-600 group-hover:text-white/90 transition-colors">{phone}</p>
          <p className="text-base mt-2 leading-relaxed font-light text-slate-500 group-hover:text-white/80 transition-colors">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

type Employee = {
  name: string;
  phone: string;
  role: string;
  description: string;
  image: string;
};

const EmployeeSection: React.FC = () => {
  const team: Employee[] = [
    {
      name: "Laura Awasthi",
      phone: "+977 9801234567",
      role: "Senior Consultant",
      description:
        "Laura has 10+ years of experience in education consultancy and student migration services.",
      image: "/images/employees/sika.jpg",
    },
    {
      name: "Jane Smith",
      phone: "+977 9807654321",
      role: "Visa Expert",
      description:
        "Jane specializes in student visas and has helped thousands of students achieve their dreams of studying abroad.",
      image: "/images/employees/chika.jpg",
    },
    {
      name: "Emmy Johnson",
      phone: "+977 9812345678",
      role: "Migration Agent",
      description:
        "Emmy is an expert in migration laws and ensures smooth processes for students and families. She is also expert in IELTS training.",
      image: "/images/employees/gwife.jpg",
    },
    {
      name: "Sophia Williams",
      phone: "+977 9823456789",
      role: "Career Advisor",
      description:
        "Sophia guides students to make the best choices for their career goals and education abroad.",
      image: "/images/employees/golendra.jpg",
    },
  ];

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
        {team.map((member) => (
          <EmployeeCard key={member.name} {...member} />
        ))}
      </motion.div>
    </section>
  );
};

export default EmployeeSection;
