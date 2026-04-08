"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";

const universities = [
  { id: 1, name: "TAFE", image: "/logos/universities/apic.png" },
  { id: 2, name: "Navitas", image: "/logos/universities/apic.png" },
  { id: 3, name: "APIC", image: "/logos/universities/apic.png" },
  { id: 4, name: "Australian Institute", image: "/logos/universities/apic.png" },
  { id: 5, name: "La Trobe", image: "/logos/universities/apic.png" },
  { id: 6, name: "Deakin", image: "/logos/universities/apic.png" },
];

export default function AssociatedUniversities() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setVisibleCount(2);
      else if (width < 768) setVisibleCount(3);
      else if (width < 1024) setVisibleCount(4);
      else setVisibleCount(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % universities.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + universities.length) % universities.length);

  const visibleUniversities = useMemo(() => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const idx = (index + i) % universities.length;
      return universities[idx];
    });
  }, [index, visibleCount]);

  return (
    <section className="py-20 bg-white text-center select-none">
      {/* Title */}
      <div className="mb-10">
        <SectionHeading 
          title="Associated Universities" 
          titleColor="text-purple-600" 
          className="!mb-3" 
        />
        <p className="text-gray-600 text-base md:text-lg">
          Partner with leading educational institutions across Australia
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-2 sm:gap-4 px-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous universities"
          className="p-2 sm:p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-300 flex-shrink-0"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel content */}
        <div className="flex gap-3 sm:gap-6 overflow-hidden">
          <AnimatePresence initial={false}>
            {visibleUniversities.map((u) => (
              <motion.div
                key={u.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px] shadow-md hover:shadow-lg transition">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={u.image}
                      alt={`${u.name} Logo`}
                      width={128}
                      height={128}
                      className="object-cover w-[90%] h-[90%] rounded-full"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">{u.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next universities"
          className="p-2 sm:p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-300 flex-shrink-0"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* CTA Button */}
      <button className="mt-12 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
        View All Partners
      </button>
    </section>
  );
}
