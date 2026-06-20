"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import ContactUs from "@/components/sections/ContactUs";
import { Button } from "@/components/ui/Button";
import { 
  Stethoscope, Monitor, HardHat, Briefcase, ChefHat, Wrench, 
  CheckCircle2, ArrowRight, TrendingUp, Landmark, CircleDollarSign, GraduationCap 
} from "lucide-react";

// Detailed course data with premium stats and university context
const detailedCourses = [
  {
    id: "health",
    title: "Health & Science",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    description: "Australia's healthcare system is world-renowned. Studying health and medical sciences opens doors to highly respected, globally recognized qualifications with excellent employment prospects and clear migration pathways.",
    stats: { label: "High PR Demand", value: "98% Placement" },
    avgFee: "$30,000 - $45,000 / year",
    programs: [
      "Bachelor of Nursing (Registered Nurse)",
      "Master of Public Health",
      "Bachelor of Medical Science",
      "Diploma of Healthcare",
    ],
    outcomes: "Registered Nurse, Healthcare Administrator, Medical Researcher, Public Health Officer.",
    universities: [
      { name: "University of Sydney", logo: "" },
      { name: "Deakin University", logo: "" },
      { name: "King's College London", logo: "" }
    ],
    color: "from-rose-400 to-red-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-100",
  },
  {
    id: "it",
    title: "Information Technology (IT)",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    description: "The tech industry is booming globally. From cybersecurity to artificial intelligence, studying IT equips you with future-proof skills that are in critical shortage, making it a highly sought-after field for skilled migration.",
    stats: { label: "Avg Starting Salary", value: "$85k - $120k" },
    avgFee: "$28,000 - $40,000 / year",
    programs: [
      "Master of Data Science",
      "Bachelor of Cyber Security",
      "Bachelor of Software Engineering",
      "Master of Information Technology",
    ],
    outcomes: "Software Developer, Data Analyst, Cyber Security Expert, Network Engineer.",
    universities: [
      { name: "University of Melbourne", logo: "" },
      { name: "University of Toronto", logo: "" },
      { name: "Deakin University", logo: "" }
    ],
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    description: "Engineering degrees in our partner countries are globally accredited. Massive infrastructure and mining projects constantly demand qualified engineers across all major disciplines.",
    stats: { label: "Global Mobility", value: "Washington Accord" },
    avgFee: "$32,000 - $48,000 / year",
    programs: [
      "Bachelor of Civil Engineering",
      "Master of Engineering (Mechanical)",
      "Bachelor of Electrical Engineering",
      "Master of Professional Engineering",
    ],
    outcomes: "Civil Engineer, Mechanical Engineer, Electrical Engineer, Project Manager.",
    universities: [
      { name: "University of Auckland", logo: "" },
      { name: "University of Melbourne", logo: "" },
      { name: "University of Sydney", logo: "" }
    ],
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    borderLight: "border-amber-100",
  },
  {
    id: "business",
    title: "Business & Management",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    description: "Equip yourself with versatile skills that apply to any industry. Business programs focus heavily on practical experience, networking, and modern management techniques for the global market.",
    stats: { label: "Career Versatility", value: "Top Tier Networking" },
    avgFee: "$25,000 - $42,000 / year",
    programs: [
      "Master of Business Administration (MBA)",
      "Bachelor of Commerce (Accounting)",
      "Master of Professional Accounting",
      "Bachelor of Marketing",
    ],
    outcomes: "Accountant, Marketing Manager, Business Analyst, HR Manager.",
    universities: [
      { name: "King's College London", logo: "" },
      { name: "University of Toronto", logo: "" },
      { name: "University of Auckland", logo: "" }
    ],
    color: "from-emerald-400 to-green-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-100",
  },
  {
    id: "cookery",
    title: "Cookery & Hospitality",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    description: "The vibrant tourism and hospitality sector is constantly looking for skilled chefs and managers. These courses offer hands-on training and excellent employment opportunities immediately upon graduation.",
    stats: { label: "Job Placement", value: "Immediate Hiring" },
    avgFee: "$15,000 - $22,000 / year",
    programs: [
      "Certificate IV in Commercial Cookery",
      "Diploma of Hospitality Management",
      "Bachelor of Tourism and Event Management",
      "Advanced Diploma of Hospitality",
    ],
    outcomes: "Chef, Restaurant Manager, Event Coordinator, Hotel Manager.",
    universities: [
      { name: "Le Cordon Bleu", logo: "" },
      { name: "William Angliss Institute", logo: "" },
      { name: "TAFE NSW", logo: "" }
    ],
    color: "from-purple-400 to-fuchsia-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-100",
  },
  {
    id: "trade",
    title: "Trade Courses",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    description: "Trade professions are highly respected and well-paid. Due to massive skill shortages globally, studying a trade offers one of the most direct and reliable pathways to permanent residency.",
    stats: { label: "PR Pathway", value: "Critical Shortage" },
    avgFee: "$12,000 - $18,000 / year",
    programs: [
      "Certificate III in Carpentry",
      "Certificate III in Light Vehicle Mechanical Technology",
      "Certificate III in Electrotechnology Electrician",
      "Certificate III in Plumbing",
    ],
    outcomes: "Carpenter, Automotive Mechanic, Electrician, Plumber.",
    universities: [
      { name: "TAFE Institutes", logo: "" },
      { name: "Victoria University", logo: "" },
      { name: "SkillsTech", logo: "" }
    ],
    color: "from-slate-500 to-slate-700",
    bgLight: "bg-slate-50",
    borderLight: "border-slate-200",
  },
];

export default function CoursesPage() {
  return (
    <main>
      <PageHeader 
        title="Premium Study Pathways" 
        subtitle="Detailed insights into popular courses, top teaching institutions, career outcomes, and migration pathways."
        breadcrumbs={[{ label: "Courses" }]}
      />
      
      <section className="py-20 bg-slate-50 overflow-hidden">
        <Container>
          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight"
            >
              Find Your Perfect <span className="text-accent">Academic Pathway</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Choosing the right course is the most critical step in your international education journey. We partner with top universities, colleges, and institutes globally to provide you with tailored options that align with your career goals.
            </motion.p>
          </div>

          {/* Detailed Course Sections */}
          <div className="space-y-32">
            {detailedCourses.map((course, index) => {
              const isEven = index % 2 === 0;
              const Icon = course.icon;

              return (
                <motion.div 
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2 relative group perspective-1000">
                    <motion.div 
                      whileHover={{ scale: 1.02, rotateY: isEven ? 2 : -2 }}
                      transition={{ duration: 0.5 }}
                      className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50"
                    >
                      <Image 
                        src={course.image} 
                        alt={course.title} 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                      
                      {/* Glassmorphic Stat Box (Top Right) */}
                      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl shadow-black/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                            <TrendingUp size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">{course.stats.label}</p>
                            <p className="text-white font-bold text-lg">{course.stats.value}</p>
                          </div>
                        </div>
                      </div>

                      {/* Floating Identity Badge (Bottom Left) */}
                      <div className="absolute bottom-8 left-8 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${course.color} text-white shadow-xl shadow-black/20 ring-4 ring-white/20`}>
                          <Icon size={28} />
                        </div>
                        <h3 className="text-3xl font-bold text-white tracking-wide drop-shadow-lg">{course.title}</h3>
                      </div>
                    </motion.div>
                    
                    {/* Decorative Blob */}
                    <div className={`absolute -z-10 w-full h-full top-0 left-0 scale-110 blur-[80px] opacity-20 bg-gradient-to-br ${course.color} rounded-full`} />
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${course.bgLight} ${course.borderLight} border text-sm font-bold text-slate-700 mb-6`}>
                      <Icon size={16} className="text-primary" />
                      Sector Overview
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed font-light">
                      {course.description}
                    </p>

                    {/* Average Fee Context */}
                    <div className="flex items-center gap-3 mb-10 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm w-full md:w-auto">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center shrink-0`}>
                        <CircleDollarSign size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average Annual Tuition</p>
                        <p className="text-primary font-bold text-lg">{course.avgFee}</p>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {/* Popular Programs */}
                      <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-primary mb-5 flex items-center gap-2 text-lg">
                          <CheckCircle2 size={20} className="text-accent" /> 
                          Popular Programs
                        </h4>
                        <ul className="space-y-4">
                          {course.programs.map((program, i) => (
                            <li key={i} className="text-sm font-medium text-slate-600 flex items-start gap-3 leading-tight">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              {program}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Career Outcomes */}
                      <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-primary mb-5 flex items-center gap-2 text-lg">
                          <Briefcase size={20} className="text-accent" /> 
                          Career Outcomes
                        </h4>
                        <p className="text-sm font-medium text-slate-600 leading-loose">
                          {course.outcomes}
                        </p>
                      </div>
                    </div>

                    {/* Top Institutions Context - Lighter & Brighter with Logo Placeholders */}
                    <div className="w-full p-6 rounded-3xl bg-white border border-slate-200 shadow-sm mb-10 relative overflow-hidden group">
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${course.color} blur-[80px] opacity-5 pointer-events-none transition-opacity duration-700`} />
                      
                      <h4 className="font-bold text-primary mb-6 flex items-center gap-2 relative z-10 text-lg">
                        <Landmark size={20} className="text-accent" /> 
                        Top Teaching Institutions
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                        {course.universities.map((uni, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-white transition-colors group/uni cursor-default shadow-sm">
                            {/* Logo Placeholder */}
                            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover/uni:border-accent transition-colors">
                              {uni.logo ? (
                                <Image src={uni.logo} alt={uni.name} width={24} height={24} className="object-contain" />
                              ) : (
                                <GraduationCap size={18} className="text-slate-400 group-hover/uni:text-accent transition-colors" />
                              )}
                            </div>
                            {/* Uni Name */}
                            <span className="text-sm font-bold text-slate-700 leading-tight">
                              {uni.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className={`gap-2 h-14 px-8 text-lg rounded-full bg-gradient-to-r ${course.color} hover:brightness-110 shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:-translate-y-1`} asChild>
                      <a href={`/contact?interest=${course.id}`}>
                        Inquire About {course.title}
                        <ArrowRight size={20} className="animate-pulse" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactUs />
    </main>
  );
}
