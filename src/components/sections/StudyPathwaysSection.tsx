"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout/Container";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { detailedCourses } from "@/data/courses";
import { universities } from "@/data/universities";


const getFlagEmoji = (country: string) => {
  if (!country) return '🎓';
  if (country.includes('Australia')) return '🇦🇺';
  if (country.includes('Canada')) return '🇨🇦';
  if (country.includes('New Zealand')) return '🇳🇿';
  if (country.includes('Kingdom') || country === 'UK') return '🇬🇧';
  if (country.includes('USA') || country.includes('United States')) return '🇺🇸';
  return '🎓';
};

export default function StudyPathwaysSection() {
  // Handle scroll for universities
  const unisRef = useRef<HTMLDivElement>(null);
  const scrollUnisLeft = () => {
    if (unisRef.current) {
      unisRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollUnisRight = () => {
    if (unisRef.current) {
      unisRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-slate-50 overflow-hidden border-b border-border/40 py-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <Container>
        {/* TOP SPLIT SECTION: Text + Courses Grid */}
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Left Content (Text) */}
          <div className="xl:w-5/12 relative z-10 flex flex-col justify-center">
            <div className="inline-flex items-center self-start gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-ui-small font-bold mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Your Academic Future
            </div>
            <h2 className="text-ui-section-title font-extrabold text-primary mb-6 tracking-tight">
              Study Pathways &<br />
              <span className="text-accent">Partner Universities</span>
            </h2>
            <p className="text-ui-lead text-slate-600 leading-relaxed max-w-lg mb-8">
              Explore our core study disciplines and discover the world-class Australian institutions where you can launch your career. We provide comprehensive study support across all major academic fields.
            </p>
            <Link href="/courses" className="inline-flex items-center self-start gap-2 font-bold text-primary hover:text-accent transition-colors duration-300 group">
              View All Courses 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Content (Courses Grid) */}
          <div className="xl:w-7/12 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {detailedCourses.map((course) => {
                const Icon = course.icon || CheckCircle2;
                return (
                  <Link href={`/courses/${course.id}`} key={course.id} className="group block relative">
                    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-12 h-12 rounded-xl ${course.bgLight} ${course.borderLight} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 shadow-sm`}>
                          <Icon size={24} className={course.iconColor} strokeWidth={2.5} />
                        </div>
                        <h4 className={`text-ui-card-title font-extrabold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${course.color} transition-all leading-tight antialiased tracking-tight`}>
                          {course.title}
                        </h4>
                      </div>
                      <p className="text-slate-600 font-medium text-ui-body leading-relaxed mb-4 flex-grow antialiased">
                        {course.tagline || course.description.substring(0, 80) + '...'}
                      </p>
                      
                      {/* Hover Arrow Icon */}
                      <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent opacity-0 scale-75 -translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 shadow-sm">
                        <ArrowRight size={14} strokeWidth={3} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Universities & CTA */}
        <div className="relative z-20">
          
          {/* Partner Institutions Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h3 className="text-ui-card-title text-primary">Study at Our <span className="text-accent">300+</span> Global Partner Institutions</h3>
              <div className="flex items-center gap-4">
                <Link href="/about" className="hidden md:flex items-center gap-2 text-ui-small font-semibold text-slate-500 hover:text-accent transition-colors">
                  View All Partners <ArrowRight size={16} />
                </Link>
                <div className="flex items-center gap-2">
                  <button onClick={scrollUnisLeft} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors bg-white shadow-sm" aria-label="Scroll left">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={scrollUnisRight} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors bg-white shadow-sm" aria-label="Scroll right">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div 
              ref={unisRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0"
            >
              {universities.map((uni, index) => (
                <a
                  key={`${uni.name}-${index}`}
                  href={uni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-start shrink-0 w-[280px] flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-accent/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden p-2">
                    {uni.logo ? (
                      <Image src={uni.logo} alt={uni.name} width={40} height={40} className="w-full h-full object-contain" />
                    ) : (
                      <span className="font-bold text-primary">{uni.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-ui-body font-bold text-primary group-hover:text-accent transition-colors truncate leading-snug mb-1">
                      {uni.name}
                    </h4>
                    <span className="text-ui-small text-slate-500 font-medium flex items-center gap-1.5 truncate">
                      <span className="text-ui-small leading-none shrink-0" title={uni.country}>{getFlagEmoji(uni.country)}</span>
                      <span className="truncate">{uni.location.split(',')[0]}, {uni.country}</span>
                    </span>
                  </div>
                </a>
              ))}
              
              {/* "And 300+ More" Card */}
              <Link href="/about" className="snap-start shrink-0 w-[280px] flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-slate-200 bg-transparent hover:bg-slate-50 hover:border-accent/40 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <ArrowRight size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-ui-body font-bold text-slate-700 mb-0.5 truncate">Explore More</h4>
                  <span className="text-ui-small text-slate-500 font-medium truncate block">300+ Partners</span>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="w-full bg-gradient-to-r from-primary to-navy-dark rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute right-20 top-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-accent backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-ui-card-title mb-1">Not sure where to start?</h4>
                <p className="text-white/70 text-ui-body">Get personalized guidance from our experienced education consultants.</p>
              </div>
            </div>
            
            <a 
              href="https://condat.com.au/condat/318/customer?method=website" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all relative z-10"
            >
              Book a Free Consultation <ExternalLink size={18} />
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}
