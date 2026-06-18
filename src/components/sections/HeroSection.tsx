"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Users, Award, GraduationCap } from "lucide-react";

const destinations = [
  { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070&auto=format&fit=crop" },
  { name: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop" },
  { name: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop" },
  { name: "USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop" },
  { name: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" },
  { name: "South Korea", image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070&auto=format&fit=crop" },
  { name: "Europe", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop" },
];

const trustStats = [
  { icon: Users, value: "10,000+", label: "Students Placed" },
  { icon: Award, value: "15+ Years", label: "Education Experts" },
  { icon: GraduationCap, value: "98%", label: "Admission Success" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload next image to avoid flickering
    const nextIndex = (currentIndex + 1) % destinations.length;
    const img = new window.Image();
    img.src = destinations[nextIndex].image;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 3500); // Slightly longer interval so users can appreciate the image
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-16 overflow-hidden bg-black">

      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].name}
              fill
              className="object-cover brightness-105 contrast-105"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Gradient Overlay for text readability (Left side only on desktop) */}
        {/* On mobile, covers everything. On desktop, smoothly fades to transparent and leaves right side completely bright */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-navy/30 lg:bg-transparent lg:bg-gradient-to-r lg:from-primary/80 lg:via-primary/50 lg:to-transparent z-10 pointer-events-none" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 mx-auto relative z-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 h-full">

        {/* LEFT SIDE - Content */}
        <div className="w-full lg:w-3/5 flex flex-col items-start text-left">

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 mb-6"
          >
            <span className="text-lg leading-none">🏆</span>
            <span className="text-sm font-bold text-white tracking-wide uppercase">The Most Trusted Agency</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-[family-name:var(--font-caveat)] text-accent tracking-wide mb-2 drop-shadow-md"
          >
            Your Journey Starts Here
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6"
          >
            Migrate <span className="text-accent text-5xl lg:text-6xl font-bold align-middle">·</span> Study <span className="text-accent text-5xl lg:text-6xl font-bold align-middle">·</span> Work
            <br />
            <span className="text-accent inline-flex relative min-w-[12rem] sm:min-w-[20rem] font-[family-name:var(--font-caveat)] font-medium text-5xl sm:text-6xl lg:text-[5.5rem] leading-none tracking-normal mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block will-change-transform"
                >
                  {destinations[currentIndex].name}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-xl drop-shadow-md font-medium"
          >
            Helping students and migrants build a brighter future with <span className="font-bold text-accent">honesty</span>, <span className="font-bold text-accent">care</span> & <span className="font-bold text-accent">professional</span> guidance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              href="#contact-us"
              className="inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-accent px-8 text-lg sm:text-xl font-bold text-primary shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Free Consultation
            </a>

            <Button variant="outline" className="h-12 sm:h-14 px-6 text-xl font-bold bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary w-full sm:w-auto transition-all shadow-lg rounded-xl" asChild>
              <a href="#universities">Explore</a>
            </Button>
          </motion.div>

          {/* SVG Definitions for 3D Gold Gradient */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <linearGradient id="gold-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-gold-light)" />
                <stop offset="45%" stopColor="var(--color-gold)" />
                <stop offset="50%" stopColor="var(--color-gold-light)" />
                <stop offset="51%" stopColor="var(--color-gold-dark)" />
                <stop offset="100%" stopColor="var(--color-accent)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 mt-12 pt-8 border-t border-white/20 w-full max-w-3xl"
          >
            {trustStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className="relative">
                    <Icon
                      size={38}
                      style={{ stroke: "url(#gold-3d)", strokeWidth: 2, fill: "none", filter: "drop-shadow(1px 2px 1px rgba(0,0,0,0.8))" }}
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-xl sm:text-2xl text-white" style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.6), 2px 2px 0 rgba(0,0,0,0.4), 3px 3px 0 rgba(0,0,0,0.2)' }}>
                      {stat.value}
                    </p>
                    <p className="text-sm font-bold text-accent uppercase tracking-widest drop-shadow-md">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT SIDE - Floating Cards (Bouncing) */}
        <div ref={rightContainerRef} className="hidden lg:flex w-full lg:w-2/5 relative min-h-[500px] flex-col justify-center items-end pr-10">
          {/* Floating Card 1: Success Alert */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-16 right-12 xl:right-24 bg-gradient-to-br from-accent/20 to-black/40 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_32px_rgba(212,175,55,0.15)] flex items-center gap-4 border border-accent/30 z-20 cursor-default will-change-transform"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
              <CheckCircle2 size={22} className="text-green-400 drop-shadow-md" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-green-300 uppercase tracking-widest mb-0.5 drop-shadow-md">Visa Granted</p>
              <p className="text-md font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Subclass 500</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Partner Uni */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-4 left-16 lg:left-32 xl:left-48 bg-gradient-to-br from-accent/20 to-black/40 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_32px_rgba(212,175,55,0.15)] border border-accent/30 z-20 cursor-default will-change-transform"
          >
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Partner Universities</p>
            <div className="flex -space-x-4">
              {["USyd", "UoM", "UNSW", "UCL", "UoT"].map((uni, i) => (
                <div key={i} className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 shadow-lg flex items-center justify-center font-bold text-[10px] text-white z-10 relative backdrop-blur-md">
                  {uni}
                </div>
              ))}
              <div className="w-14 h-14 rounded-full bg-accent border-2 border-white/30 shadow-lg flex items-center justify-center font-bold text-sm text-primary z-20 relative">
                300+
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
