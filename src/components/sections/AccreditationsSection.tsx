"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileSignature, Globe, Landmark } from "lucide-react";

const accreditations = [
  { name: "MARA Registered", desc: "Migration Agents Registration Authority", icon: FileSignature, gradientId: "grad-mara", stroke: "#B45309" },
  { name: "QEAC Certified", desc: "Qualified Education Agent Counsellors", icon: Award, gradientId: "grad-qeac", stroke: "#1D4ED8" },
  { name: "PIER Agency", desc: "Professional Int. Education Resources", icon: Globe, gradientId: "grad-pier", stroke: "#047857" },
  { name: "Gov. Approved", desc: "Ministry of Education, Nepal", icon: Landmark, gradientId: "grad-gov", stroke: "#5B21B6" },
];

export default function AccreditationsSection() {
  return (
    <section className="relative z-30 w-full bg-gradient-to-r from-primary via-[#1A2A5E] to-primary backdrop-blur-md border-y border-secondary/30 shadow-[0_0_40px_rgba(137,207,240,0.1)]">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="grad-mara" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="grad-qeac" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BFDBFE" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="grad-pier" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="grad-gov" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DDD6FE" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
        
        {/* Left Side: Main Badge */}
        <div className="flex items-center gap-5 shrink-0 xl:border-r xl:border-white/10 xl:pr-12">
          <div className="relative w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 shadow-[0_0_15px_hsl(var(--accent)/0.2)]">
            <div className="absolute inset-0 rounded-full border-t border-accent animate-spin" style={{ animationDuration: '4s' }} />
            <ShieldCheck className="w-7 h-7 text-accent drop-shadow-md" />
          </div>
          <div>
            <p className="text-white font-bold text-lg sm:text-xl leading-tight antialiased">Officially Recognized &</p>
            <p className="text-accent text-sm font-bold tracking-widest uppercase mt-1 antialiased">Fully Accredited</p>
          </div>
        </div>
        
        {/* Right Side: Accreditation List */}
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-end gap-x-8 sm:gap-x-12 xl:gap-x-0 gap-y-8 flex-1 w-full xl:divide-x xl:divide-white/10">
          {accreditations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 xl:px-8 first:xl:pl-0 last:xl:pr-0"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 shadow-inner">
                  <Icon 
                    className="w-5 h-5" 
                    style={{ 
                      fill: `url(#${item.gradientId})`, 
                      stroke: item.stroke, 
                      strokeWidth: 1,
                      filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.6))"
                    }} 
                  />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm tracking-wide antialiased">{item.name}</p>
                  <p className="text-white/80 text-xs font-medium mt-1 max-w-[140px] leading-relaxed hidden sm:block antialiased">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
