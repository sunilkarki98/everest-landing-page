"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { id: 1, subtitle: "Australia", image: "/banners/aus.jpg" },
  { id: 2, subtitle: "Canada", image: "/banners/canada.jpg" },
  { id: 3, subtitle: "UK", image: "/banners/uk.jpg" },
  { id: 4, subtitle: "New Zealand", image: "/banners/newzlnd.jpg" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden bg-gray-900">
      {/* Background Slides — Statically rendered and preloaded to prevent network flashes */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt={`Study in ${slide.subtitle}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Aesthetic Overlay Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Top-Right Floating Blob - Replaced unsafe WebKit CSS mask with safe blurred blob */}
      <motion.div
        className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-3xl opacity-40 pointer-events-none transform-gpu"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Bottom-Left Static Blob */}
      <div
        className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 blur-3xl opacity-50 pointer-events-none transform-gpu"
      />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        
        {/* Hardware-Accelerated Static Title */}
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-semibold drop-shadow-2xl flex items-center justify-center gap-2 sm:gap-4 flex-wrap transform-gpu" style={{ WebkitFontSmoothing: "antialiased" }}>
          <span>STUDY</span>
          <span className="text-blue-400 text-xl sm:text-3xl md:text-5xl leading-none flex items-center relative top-[2px]">♦</span>
          <span>WORK</span>
          <span className="text-blue-400 text-xl sm:text-3xl md:text-5xl leading-none flex items-center relative top-[2px]">♦</span>
          <span>MIGRATE</span>
        </h1>

        {/* Bounding box wrapper completely neutralizes exit/enter layout jumping */}
        <div className="h-10 sm:h-12 md:h-14 mt-2 sm:mt-4 flex items-center justify-center w-full relative z-20 transform-gpu">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center absolute"
            >
              <p className="text-cyan-300 text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-bold tracking-wide">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-8 sm:bottom-16 md:bottom-24 lg:bottom-30 flex flex-col sm:flex-row gap-3 sm:gap-6 z-30">
          <a
            href="#contact-us"
            className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-purple-700 transition text-center shadow-lg"
          >
            Apply Now
          </a>
          <a
            href="#popular-courses"
            className="bg-white/90 backdrop-blur-sm text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition text-center shadow-lg"
          >
            Read More
          </a>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/20 text-white p-2 sm:p-3 rounded-full hover:bg-primary transition z-30"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/20 text-white p-2 sm:p-3 rounded-full hover:bg-primary transition z-30"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>
    </section>
  );
}
