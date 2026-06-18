"use client";

import { motion } from "framer-motion";
import { MapPin, DollarSign, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const destinations = [
  {
    name: "Sydney",
    country: "Australia",
    universities: "UNSW, University of Sydney, UTS",
    costOfLiving: "AUD $2,200 – $2,800/mo",
    opportunities: "Finance, tech & healthcare hub.",
    image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Auckland",
    country: "New Zealand",
    universities: "University of Auckland, AUT, Victoria",
    costOfLiving: "NZD $1,800 – $2,400/mo",
    opportunities: "Agriculture, IT & tourism.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "London",
    country: "United Kingdom",
    universities: "UCL, Imperial, King's College",
    costOfLiving: "GBP £1,800 – £2,500/mo",
    opportunities: "Finance, law & creative arts.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Toronto",
    country: "Canada",
    universities: "University of Toronto, Ryerson, York",
    costOfLiving: "CAD $2,000 – $2,800/mo",
    opportunities: "Tech, finance & healthcare.",
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Tokyo",
    country: "Japan",
    universities: "Waseda, Keio, University of Tokyo",
    costOfLiving: "JPY ¥120,000 – ¥180,000/mo",
    opportunities: "Engineering, robotics & culture.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Paris",
    country: "Europe",
    universities: "Sorbonne, Sciences Po, HEC Paris",
    costOfLiving: "EUR €1,500 – €2,200/mo",
    opportunities: "Fashion, business & research.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export default function FeaturedSection() {
  return (
    <section id="popular-destinations" className="py-10 lg:py-14 bg-background">
      <Container>
        {/* Heading */}
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Study Abroad"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6 mt-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-md border border-border ${dest.gridClass}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  fill
                  className="object-cover brightness-110 contrast-105 transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Gradient Overlay for legibility */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content Container — anchored to bottom-left */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-5 md:p-6 h-full text-white">

                {/* Glassmorphism Details Panel */}
                <div className="space-y-3 opacity-0 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out group-hover:opacity-100 backdrop-blur-xl bg-white/10 p-4 rounded-xl border border-white/15 mb-4">
                  <div className="flex gap-3 items-start">
                    <GraduationCap className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/60">Universities</p>
                      <p className="text-sm font-medium">{dest.universities}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <DollarSign className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/60">Cost of Living</p>
                      <p className="text-sm font-medium">{dest.costOfLiving}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Briefcase className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/60">Opportunities</p>
                      <p className="text-sm font-medium text-white/90">{dest.opportunities}</p>
                    </div>
                  </div>
                </div>

                {/* Header — bottom-left aligned */}
                <div className="mt-auto">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0px 4px rgba(0,0,0,0.8)' }}>{dest.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span className="text-sm font-semibold tracking-wide text-white/90">{dest.country}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
