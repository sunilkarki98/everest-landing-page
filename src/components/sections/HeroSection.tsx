"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, QrCode, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroDestinations as destinations, trustStats } from "@/data/home";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % destinations.length;
        const img = new window.Image();
        img.src = destinations[(next + 1) % destinations.length].image;
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
              sizes="100vw"
              className="object-cover brightness-105 contrast-105"
              priority={currentIndex === 0}
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

          {/* Eyebrow & Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-colors cursor-default">
              <span className="text-lg leading-none">🏆</span>
              <span className="text-sm font-bold text-white tracking-wide uppercase">The Most Trusted Agency</span>
            </div>

            <a
              href="https://share.google/Bp8LPnaFi9wzvzr3a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFB400" className="w-4 h-4 group-hover:scale-110 transition-transform">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 group-hover:scale-110 transition-transform">
                  <defs>
                    <linearGradient id="halfStar" x1="0" x2="100%" y1="0" y2="0">
                      <stop offset="50%" stopColor="#FFB400" />
                      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#halfStar)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-white tracking-wide uppercase group-hover:text-accent transition-colors">4.8 Google Rating</span>
            </a>
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
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
          >
            {/* Primary CTA */}
            <a
              href="https://condat.com.au/condat/318/customer?method=website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-accent px-8 text-lg sm:text-xl font-bold text-primary shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Free Consultation
            </a>

            <Button variant="outline" className="h-12 sm:h-14 px-6 text-xl font-bold bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary w-full sm:w-auto transition-all shadow-lg rounded-xl" asChild>
              <Link href="#universities">Explore</Link>
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
            {trustStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-4">
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

        {/* RIGHT SIDE - Useful Links & QR Button */}
        <div
          ref={rightContainerRef}
          className="hidden lg:flex w-full lg:w-2/5 relative min-h-[500px] flex-col justify-end items-end"
        >
          <div className="absolute -bottom-12 right-0 z-30 flex flex-col items-end gap-6">

            {/* Useful Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-lg flex flex-col gap-2.5 w-[240px]"
            >
              <h4 className="flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider drop-shadow-md border-b border-white/10 pb-2 mb-1">
                Useful Links
                <ExternalLink className="w-4 h-4" />
              </h4>

              {[
                { label: "VEVO Visa Check", href: "https://online.immi.gov.au/evo/firstParty?actionType=query" },
                { label: "Create USI (Student ID)", href: "https://www.usi.gov.au/students/get-a-usi" },
                { label: "Apply for TFN (Tax)", href: "https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/" },
                { label: "Book PTE Academic", href: "https://www.pearsonpte.com/" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-sm font-medium text-white/90 hover:text-accent transition-colors py-1"
                >
                  <span className="group-hover:underline underline-offset-4 decoration-accent/50">{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                </a>
              ))}
            </motion.div>

            {/* QR Popup Trigger */}
            <motion.button
              onClick={() => setIsQrOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-accent/20 to-black/40 backdrop-blur-md py-3 px-5 rounded-2xl shadow-[0_8px_32px_rgba(212,175,55,0.15)] flex items-center gap-3 border border-accent/30 hover:border-accent/60 transition-colors w-[240px]"
            >
              <div className="bg-white/90 p-1.5 rounded-lg shrink-0">
                <QrCode className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-white text-sm tracking-tight drop-shadow-md leading-none mb-1">
                  Got Questions?
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-accent drop-shadow-md leading-none">
                  Scan to WhatsApp
                </p>
              </div>
            </motion.button>
          </div>
        </div>

      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {isQrOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQrOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white p-8 pb-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center max-w-sm w-full"
            >
              <button
                onClick={() => setIsQrOpen(false)}
                className="absolute top-4 right-4 p-2 bg-muted text-muted-foreground hover:bg-muted/80 hover:text-primary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-primary mb-2 mt-2 text-center font-serif">Scan to Connect</h3>
              <p className="text-muted-foreground text-sm text-center mb-8">
                Open your camera and scan the QR code to chat with us on WhatsApp instantly.
              </p>

              <div className="relative w-48 h-48 bg-white p-2 shadow-inner border border-border/50 rounded-xl overflow-hidden">
                <Image
                  src="/contacusQR.jpeg"
                  alt="Contact QR Code"
                  width={192}
                  height={192}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
