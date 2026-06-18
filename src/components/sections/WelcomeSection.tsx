"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, HeartHandshake, Map, GraduationCap, Scale, FileCheck, CheckCircle2, Award, Users, Building2, ThumbsUp, ShieldCheck, FileSignature, Landmark } from "lucide-react";
import { Container } from "@/components/layout/Container";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Australia & Nepal Family Owned",
    description: "Built on family values, ensuring personal care and trust at every step of your journey.",
  },
  {
    icon: GraduationCap,
    title: "Direct Partnerships",
    description: "Strong ties with leading colleges and universities for seamless admission processes.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "A vast network of educational institutions across Australia, NZ, UK, Canada, and beyond.",
  },
  {
    icon: Map,
    title: "Personalized Support",
    description: "One-on-one student guidance tailored to your unique goals and circumstances.",
  },
  {
    icon: Scale,
    title: "Migration Expertise",
    description: "Experienced migration agents who simplify complex visa and citizenship pathways.",
  },
  {
    icon: FileCheck,
    title: "End-to-End Assistance",
    description: "From initial counselling to final visa lodgement — we handle it all for you.",
  },
];

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
    <div ref={ref} className="text-3xl font-extrabold text-primary tracking-tight">
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

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
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

      {/* Subtle background decorations */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[200px] bg-accent/5" />

      <Container className="relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-text font-semibold text-sm uppercase tracking-widest mb-6"
          >
            <CheckCircle2 size={16} /> Why Choose EEVS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight"
          >
            Everest Since <span className="text-accent-text">2011</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            A trusted education and migration consultancy helping students and migrants achieve their academic and career goals in Australia and beyond.
          </motion.p>
        </div>

        {/* Combined Content Grid: Highlights on Left, Stats/Accreditations on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Highlights Cards Grid (Left Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Background hover sweep */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top gold accent line */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-full" />

                  {/* Icon + Title — same line */}
                  <div className="relative z-10 flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent via-amber-400 to-gold flex items-center justify-center shrink-0 shadow-md shadow-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon size={24} className="text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-bold text-primary group-hover:text-accent-text transition-colors duration-300 leading-tight">
                      {highlight.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Stats & Accreditations (Right Column) */}
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
                    className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-md border border-slate-200 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/15 mb-2 group-hover:bg-accent/25 transition-colors duration-300 shadow-inner">
                      <Icon className="w-6 h-6 text-accent-text drop-shadow-md" strokeWidth={2.5} />
                    </div>
                    <div className="mb-1">
                      <Counter target={item.number} suffix={item.suffix} />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-primary opacity-80 uppercase tracking-wider">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row: Compact Accreditations Card */}
            <div className="bg-gradient-to-r from-[#2a4f8f] via-[#325ba0] to-[#2a4f8f] rounded-2xl p-6 shadow-lg border border-secondary/40 flex-1 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

              <div className="relative z-10 flex items-center gap-4 mb-5 border-b border-white/15 pb-5">
                <div className="relative w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0 shadow-[0_0_15px_hsl(var(--accent)/0.25)]">
                  <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin" style={{ animationDuration: '4s' }} />
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight antialiased">Officially Recognized</p>
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mt-0.5 antialiased">& Fully Accredited</p>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4">
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
                          className="w-6 h-6"
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
