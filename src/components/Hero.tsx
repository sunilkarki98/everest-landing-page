"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "STUDY | WORK | MIGRATE",
    subtitle: "in Australia",
    image: "/banners/dummybanners.png",
  },
  {
    id: 2,
    title: "STUDY | WORK | MIGRATE",
    subtitle: "in Canada",
    image: "/images/hero2.jpg",
  },
  {
    id: 3,
    title: "STUDY | WORK | MIGRATE",
    subtitle: "in UK",
    image: "/images/hero3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Slide */}
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Angled Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Parallelogram */}
        <div className="absolute top-0 -left-4 h-full w-1/3 bg-white/10 clip-left"></div>

        {/* Right Parallelogram */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-purple-700/90 clip-right"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl drop-shadow">
          {slides[current].subtitle}
        </p>

        {/* Buttons positioned lower */}
        <div className="absolute bottom-10 flex space-x-6">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition">
            Apply Now
          </button>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition">
            Read More
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition z-20"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
