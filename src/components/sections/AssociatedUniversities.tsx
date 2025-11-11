"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const universities = [
  { id: 1, name: "TAFE", image: "/partners/tafe.jpg" },
  { id: 2, name: "Navitas", image: "/partners/navitas.jpg" },
  { id: 3, name: "APIC", image: "/logos/universities/apic.png" },
  { id: 4, name: "Australian Institute", image: "/partners/aii.jpg" },
  { id: 5, name: "La Trobe", image: "/partners/latrobe.jpg" },
  { id: 6, name: "Deakin", image: "/partners/deakin.jpg" },
];

export default function AssociatedUniversities() {
  const [index, setIndex] = useState(0);
  const visibleCount = 5;

  const nextSlide = () => setIndex((prev) => (prev + 1) % universities.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + universities.length) % universities.length);

  // Precompute visible universities for performance
  const visibleUniversities = useMemo(() => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const idx = (index + i) % universities.length;
      return universities[idx];
    });
  }, [index]);

  return (
    <section className="py-20 bg-white text-center select-none">
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-600 mb-3">
          Associated Universities
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Partner with leading educational institutions across Australia
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous universities"
          className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel content */}
        <div className="flex gap-6 overflow-hidden">
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
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px] shadow-md hover:shadow-lg transition">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={u.image}
                      alt={`${u.name} Logo`}
                      loading="lazy"
                      className="object-cover w-[90%] h-[90%] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next universities"
          className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* CTA Button */}
      <button className="mt-12 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
        View All Partners
      </button>
    </section>
  );
}
