"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import CallToAction from "@/components/sections/CallToAction";
import { ServiceDetail, iconMap } from "@/data/services";
import { ChevronRight, CheckCircle2, ListChecks, HelpCircle } from "lucide-react";

interface ServiceDetailClientProps {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  services: ServiceDetail[];
  contactId?: string;
}

export function ServiceDetailClient({
  title,
  subtitle,
  breadcrumbLabel,
  services,
  contactId = "contact"
}: ServiceDetailClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  
  // On mount, check if there's a ?service=id in the URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceId = params.get("service");
      if (serviceId) {
        const index = services.findIndex(s => s.id === serviceId);
        if (index !== -1) {
          setActiveIndex(index);
        }
      }
    }
  }, [services]);

  useEffect(() => {
    if (navRef.current && activeTabRef.current) {
      const nav = navRef.current;
      const tab = activeTabRef.current;
      
      const scrollLeft = tab.offsetLeft - (nav.offsetWidth / 2) + (tab.offsetWidth / 2);
      
      requestAnimationFrame(() => {
        nav.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      });
    }
  }, [activeIndex]);

  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
    if (typeof window !== "undefined") {
      const serviceId = services[index].id;
      const url = new URL(window.location.href);
      url.searchParams.set("service", serviceId);
      window.history.pushState({}, "", url.toString());
    }
  };

  const activeService = services[activeIndex];
  const ActiveIcon = iconMap[activeService.icon] || ChevronRight;

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader 
        title={title} 
        subtitle={subtitle}
        breadcrumbs={[
          { label: breadcrumbLabel }
        ]}
      />

      {/* Services Categories Navigation */}
      <div className="bg-white border-b border-slate-200 py-4">
        <Container>
          <nav ref={navRef} className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 relative">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const NavIcon = iconMap[service.icon] || ChevronRight;
              return (
                <button 
                  key={service.id} 
                  onClick={() => handleServiceClick(index)}
                  ref={isActive ? activeTabRef : null}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-colors duration-300 ${
                    isActive 
                      ? "text-primary font-bold" 
                      : "text-slate-600 hover:text-primary font-medium bg-slate-50 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServicePill"
                      className="absolute inset-0 bg-accent rounded-full shadow-md shadow-accent/20 border border-accent z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <NavIcon size={18} className={`relative z-10 transition-colors duration-300 ${isActive ? "text-primary" : "text-accent"}`} />
                  <span className="relative z-10">{service.title}</span>
                </button>
              );
            })}
          </nav>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm"
              >
                {/* Header Area */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <ActiveIcon size={40} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight tracking-tight">
                      {activeService.title}
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-primary mb-4">Overview</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {activeService.overview}
                  </p>
                </div>

                {/* Important Notice Callout */}
                {activeService.importantNote && (
                  <div className="mb-12 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-500 shadow-sm relative overflow-hidden">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <HelpCircle size={18} className="text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-800 mb-2">Important Notice</h4>
                        <p className="text-amber-700 leading-relaxed text-sm">
                          {activeService.importantNote}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Key Benefits Grid */}
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full">
                    <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                      <CheckCircle2 className="text-accent" size={20} />
                      Key Benefits & Features
                    </h3>
                    <div className="flex flex-col gap-3">
                      {activeService.keyBenefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={14} className="text-accent" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700 leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Eligibility / Who Is This For? */}
                  {activeService.eligibility && (
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
                      <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                        <ListChecks className="text-emerald-500" size={20} />
                        Eligibility Criteria
                      </h3>
                      <ul className="space-y-4">
                        {activeService.eligibility.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 size={12} className="text-emerald-500" />
                            </div>
                            <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Process Steps */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <ListChecks className="text-secondary" size={24} />
                    Our Process
                  </h3>
                  <div className="space-y-6">
                    {activeService.processSteps.map((step, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0 z-10 shadow-md">
                            {i + 1}
                          </div>
                          {i !== activeService.processSteps.length - 1 && (
                            <div className="w-0.5 h-full bg-slate-100 my-2" />
                          )}
                        </div>
                        <div className="pt-2 pb-6">
                          <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
                          <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs - Accordion */}
                <div className="border-t border-slate-100 pt-10">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <HelpCircle className="text-slate-400" size={24} />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {activeService.faqs.map((faq, i) => (
                      <details key={i} className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-slate-300 transition-colors [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-primary text-base">
                          <span>{faq.q}</span>
                          <span className="transition-transform group-open:rotate-180 w-6 h-6 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 shrink-0">
                            <ChevronRight size={16} className="group-open:hidden" />
                            <ChevronRight size={16} className="hidden group-open:block rotate-90" />
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-2 hidden group-open:block animate-in fade-in slide-in-from-top-2">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 p-6 md:p-8 bg-gradient-to-br from-[#2a4f8f] to-[#1a365d] rounded-2xl text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                  <div className="relative z-10 flex-1 text-center md:text-left">
                    <h4 className="font-bold text-xl md:text-2xl mb-2">Need Professional Guidance?</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      Have questions about {activeService.title}? Speak directly to our Everest Migration Experts to explore your options.
                    </p>
                  </div>
                  <div className="relative z-10 shrink-0 w-full md:w-auto">
                    <a href={`#${contactId}`} className="flex items-center justify-center bg-accent text-primary font-bold py-3.5 px-6 rounded-xl hover:bg-white transition-colors duration-300 shadow-lg shadow-accent/20 whitespace-nowrap">
                      Book Your Free Consultation
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
        </div>
      </Container>
      
      <div id={contactId}>
        <CallToAction />
      </div>
    </main>
  );
}
