"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "STUDY | WORK | MIGRATE",
    subtitle: "Australia",
    image: "/banners/aus.jpg",
  },
  {
    id: 2,
    title: "STUDY | WORK | MIGRATE",
    subtitle: "Canada",
    image: "/banners/canada.jpg",
  },
  {
    id: 3,
    title: "STUDY | WORK | MIGRATE",
    subtitle: "UK",
    image: "/banners/uk.jpg",
  },
  {
    id: 4,
    title: "STUDY | WORK | MIGRATE",
    subtitle: "New Zealand",
    image: "/banners/newzlnd.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

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

      {/* Top-Right Floating Ring */}
      <motion.div
        className="absolute top-1 right-0 translate-x-1/2 -translate-y-1/2
                   w-96 h-96 rounded-full
                   bg-[conic-gradient(from_0deg,#a855f7,#8b5cf6,#6366f1,#3b82f6)]
                   [mask:radial-gradient(circle_160px_at_center,transparent_85%,black_100%)]
                   [-webkit-mask:radial-gradient(circle_160px_at_center,transparent_85%,black_100%)]
                   opacity-40 pointer-events-none"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 5, 10, 7, 0, -7, -10, -5, 0], // random-ish horizontal float
          y: [0, -5, -10, -7, 0, 7, 10, 5, 0], // random-ish vertical float
        }}
        transition={{
          duration: 18, // slow, smooth
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Bottom-Left Static Ring */}
      <div
        className="absolute bottom-1 left-1 -translate-x-1/2 translate-y-1/2
                      w-56 h-56 rounded-full
                      bg-[conic-gradient(from_0deg,#7F00FF,#8b5cf6,#6366f1,#3b82f6)]
                      [mask:radial-gradient(circle_88px_at_center,transparent_99%,black_100%)]
                      [-webkit-mask:radial-gradient(circle_88px_at_center,transparent_99%,black_100%)]
                      opacity-80 pointer-events-none"
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === current ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="mt-4 text-white text-2xl md:text-3xl drop-shadow font-semibold">
                  {slide.subtitle}
                </p>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="absolute bottom-30 flex space-x-6">
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition">
            Apply Now
          </button>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition">
            Read More
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-purple-700 transition z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-purple-700 transition z-20"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
