"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { Award, Users, Building2, ThumbsUp, ShieldCheck, FileSignature, Globe, Landmark } from "lucide-react";
import { Container } from "@/components/layout/Container";


// 🗺️ Branch data
interface Branch {
  id: number;
  name: string;
  position: [number, number];
  country: string;
}

const branches: Branch[] = [
  { id: 1, name: "Everest Education - Kathmandu", position: [27.7172, 85.324], country: "Nepal" },
];

// ⚡ Lazy load the Leaflet map
const DynamicMap = dynamic<{ branches: Branch[] }>(
  () => import("../LeafletMap").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-full min-h-[400px] bg-secondary/10 rounded-3xl border border-secondary/20 shadow-inner">
        <p className="text-secondary/60 animate-pulse font-medium">Loading interactive map...</p>
      </div>
    ),
  }
);

// Counter component
interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-2xl lg:text-3xl font-extrabold text-primary tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const trustItems = [
  { icon: Award, number: 20, suffix: "+", label: "Years Exp." },
  { icon: Users, number: 10000, suffix: "+", label: "Students" },
  { icon: Building2, number: 300, suffix: "+", label: "Institutions" },
  { icon: ThumbsUp, number: 98, suffix: "%", label: "Satisfaction" },
];

const accreditations = [
  { name: "MARA Registered", desc: "Migration Agents", icon: FileSignature, gradientId: "grad-mara-light", stroke: "#B45309" },
  { name: "QEAC Certified", desc: "Education Counsellors", icon: Award, gradientId: "grad-qeac-light", stroke: "#1D4ED8" },
  { name: "PIER Agency", desc: "Professional Resources", icon: Globe, gradientId: "grad-pier-light", stroke: "#047857" },
  { name: "Gov. Approved", desc: "Ministry of Education", icon: Landmark, gradientId: "grad-gov-light", stroke: "#5B21B6" },
];

export default function TrustAndAccreditations() {
  return (
    <section className="relative z-30 py-16 lg:py-24 bg-secondary/10 overflow-hidden">
      {/* Decorative Gradients for Accreditations */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="grad-mara-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="grad-qeac-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BFDBFE" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="grad-pier-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="grad-gov-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DDD6FE" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
        </defs>
      </svg>

      <Container>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* LEFT COLUMN: Heading & Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-8">
              <h3 className="text-base font-bold tracking-widest text-secondary uppercase mb-2">Why Choose Us</h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-wide [word-spacing:0.25em]">
                Everest Education <br className="hidden sm:block" /> &amp; Visa Services
              </h2>
            </div>
            <div className="relative w-full flex-1 min-h-[220px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-border/50">
              <Suspense fallback={<div className="h-full bg-secondary/10 animate-pulse" />}>
                <DynamicMap branches={branches} />
              </Suspense>
            </div>
          </div>

          {/* RIGHT COLUMN: Stats & Accreditations */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Top Row: 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {trustItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-md border border-border/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/15 mb-1 group-hover:bg-accent/25 transition-colors duration-300 shadow-inner">
                      <Icon className="w-7 h-7 text-accent drop-shadow-md" strokeWidth={2.5} />
                    </div>
                    <div className="mb-1">
                      <Counter target={item.number} suffix={item.suffix} />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-foreground opacity-80 uppercase tracking-wider">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row: Compact Accreditations Card */}
            <div className="bg-gradient-to-r from-[#2a4f8f] via-[#325ba0] to-[#2a4f8f] rounded-2xl p-6 shadow-lg border border-secondary/40 flex-1 flex flex-col justify-center">

              <div className="flex items-center gap-4 mb-5 border-b border-white/15 pb-5">
                <div className="relative w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0 shadow-[0_0_15px_hsl(var(--accent)/0.25)]">
                  <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin" style={{ animationDuration: '4s' }} />
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight antialiased">Officially Recognized</p>
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mt-0.5 antialiased">& Fully Accredited</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {accreditations.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
                        <Icon
                          className="w-7 h-7"
                          style={{
                            fill: `url(#${item.gradientId})`,
                            stroke: item.stroke,
                            strokeWidth: 1.5,
                            filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.6))"
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xs tracking-wide antialiased leading-tight">{item.name}</p>
                        <p className="text-white/70 text-[10px] font-medium mt-0.5 leading-snug antialiased truncate">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
