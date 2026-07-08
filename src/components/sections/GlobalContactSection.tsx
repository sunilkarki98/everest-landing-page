"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe2, Map, X, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { activeBranches, futureBranches } from "@/data/home";

export default function GlobalContactSection() {
  const [expandedMapId, setExpandedMapId] = useState<number | null>(null);

  const toggleMap = (id: number) => {
    setExpandedMapId(prev => (prev === id ? null : id));
  };

  return (
    <section id="contact" className="py-14 lg:py-22 bg-slate-50 relative overflow-hidden border-t border-border/40">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] bg-accent/5" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full blur-[150px] bg-primary/5 translate-y-1/2 translate-x-1/3" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Global Network"
            title="Get in Touch & Visit Our Offices"
            className="mb-4"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-ui-lead">
            Speak with our experienced consultants or visit one of our dedicated branches for personalized guidance.
          </p>
        </div>

        {/* 1. MAIN CONTACT CARD (Head Office & Inquiries) */}
        <Card className="overflow-hidden shadow-2xl border-white/10 max-w-[1100px] mx-auto mb-16 bg-primary text-white relative">

          {/* Decorative bg */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="flex flex-col xl:flex-row items-center xl:items-stretch relative z-10">

            {/* 1. Logo & Address */}
            <div className="flex items-center gap-4 p-5 xl:py-6 xl:pl-6 xl:pr-4 xl:w-[28%] shrink-0">
              <div className="w-[72px] h-[72px] relative shrink-0 rounded-xl overflow-hidden bg-white shadow-lg">
                <Image src="/logos/everestlogo.png" alt="Everest Education Logo" fill sizes="72px" className="object-contain" />
              </div>
              <div>
                <h3 className="text-ui-card-title font-bold text-white tracking-tight leading-tight">Main Office</h3>
                <p className="text-white/70 text-ui-small font-medium leading-snug mt-0.5">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="hidden xl:block w-px self-stretch my-4 bg-white/10" />

            {/* 2. Contact Details (Phones & Emails) */}
            <div className="flex gap-8 p-5 xl:px-5 xl:py-5 xl:w-[33%] min-w-0">
              {/* Phones */}
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-1.5 text-accent mb-1">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-ui-small uppercase tracking-widest font-bold">Phone</span>
                </div>
                <a href={`tel:${siteConfig.contact.phones.main.replace(/[^\d+]/g, "")}`} className="font-semibold text-ui-small text-white hover:text-accent transition-colors whitespace-nowrap">
                  {siteConfig.contact.phones.main}
                </a>
                <a href={`tel:${siteConfig.contact.phones.secondary.replace(/[^\d+]/g, "")}`} className="font-semibold text-ui-small text-white hover:text-accent transition-colors whitespace-nowrap">
                  {siteConfig.contact.phones.secondary}
                </a>
              </div>

              {/* Emails */}
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-1.5 text-accent mb-1">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-ui-small uppercase tracking-widest font-bold">Email</span>
                </div>
                <a href={`mailto:${siteConfig.contact.emails.main}`} className="font-semibold text-ui-small text-white hover:text-accent transition-colors truncate">
                  {siteConfig.contact.emails.main}
                </a>
                <a href={`mailto:${siteConfig.contact.emails.secondary}`} className="font-semibold text-ui-small text-white hover:text-accent transition-colors truncate">
                  {siteConfig.contact.emails.secondary}
                </a>
              </div>
            </div>

            <div className="hidden xl:block w-px self-stretch my-4 bg-white/10" />

            {/* 3. CTA Button */}
            <div className="shrink-0 flex items-center justify-center p-3 xl:px-3 xl:w-[17%]">
              <a
                href="https://condat.com.au/condat/318/customer?method=website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-primary font-bold text-ui-card-title rounded-xl shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Enquire Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden xl:block w-px self-stretch my-4 bg-white/10" />

            {/* 4. QR Code */}
            <div className="flex items-center gap-3 p-5 xl:pl-4 xl:pr-5 shrink-0 xl:w-[20%] xl:justify-center">
              <div className="text-right hidden sm:block">
                <h5 className="font-bold text-ui-card-title text-white leading-tight">Scan to Chat</h5>
                <p className="text-ui-small text-accent font-bold uppercase tracking-wider">WhatsApp</p>
              </div>
              <div className="w-24 h-24 bg-white rounded-lg overflow-hidden shrink-0 shadow-lg">
                <div className="relative w-full h-full">
                  <Image src="/contacusQR.jpeg" alt="WhatsApp QR Code" fill sizes="96px" className="object-contain" />
                </div>
              </div>
            </div>

          </div>
        </Card>

        {/* 2. BRANCHES SECTION */}
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-ui-section-title text-primary">Our Global Branches</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {activeBranches.map((branch) => {
              const isExpanded = expandedMapId === branch.id;

              return (
                <div
                  key={branch.id}
                  className={`bg-white border ${isExpanded ? 'border-accent shadow-md' : 'border-slate-200 shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300 flex flex-col`}
                >
                  <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-accent text-primary' : 'bg-slate-50 text-accent border border-slate-200 shadow-sm'}`}>
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h5 className="text-ui-card-title font-bold text-primary leading-tight">{branch.name}</h5>
                        <p className="text-ui-small font-bold text-accent-text uppercase tracking-widest mt-1">{branch.country}</p>
                        <p className="text-ui-body font-medium text-slate-600 mt-1 antialiased">{branch.address}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleMap(branch.id)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-ui-small font-semibold transition-colors bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 shrink-0"
                    >
                      {isExpanded ? (
                        <>Close Map <X size={16} /></>
                      ) : (
                        <>View Map <Map size={16} /></>
                      )}
                    </button>
                  </div>

                  {/* Expandable Map */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 250, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full border-t border-slate-100 bg-slate-50"
                      >
                        <iframe
                          title={`Google Map for ${branch.name}`}
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Future Expansion Banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-lg text-center lg:text-left">
              <h4 className="text-ui-card-title font-bold text-primary mb-2 flex items-center justify-center lg:justify-start gap-2.5">
                <Globe2 className="text-accent" size={20} />
                Future Expansion
              </h4>
              <p className="text-slate-500 text-ui-body leading-relaxed">
                We are constantly growing to better serve our international students. We are excited to announce new EEVS branches opening soon.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
              {futureBranches.map((branch) => (
                <div key={branch.id} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="flex flex-col items-start">
                    <span className="text-ui-body font-bold text-primary">{branch.name}</span>
                    <span className="text-ui-small text-slate-500 font-medium">{branch.region}</span>
                  </div>
                  <span className="text-ui-small font-bold uppercase tracking-widest text-accent-text bg-accent/10 border border-accent/20 px-2 py-1 rounded">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
