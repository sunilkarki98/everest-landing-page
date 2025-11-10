"use client";

import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

const services = [
  { name: "Migration", imageSrc: "/images/passport.jpg", alt: "Hand holding a passport and boarding pass" },
  { name: "Education", imageSrc: "/images/education.jpg", alt: "Graduation cap on a stack of books" },
  { name: "Professional Year", imageSrc: "/images/pyr.jpg", alt: "People working on computers" },
  { name: "NAATI | PTE", imageSrc: "/images/pte.jpg", alt: "Students looking at a laptop" },
];

// Parent container with stagger
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

export default function ServiceSection() {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500 to-blue-950 opacity-70"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          How We Can Help You
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden w-80 cursor-pointer will-change-transform"
              variants={cardVariants} // ✅ only variants, parent controls animation
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Shiny hover overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-green-200/30 to-transparent 
                    transform translate-x-full -translate-y-full 
                    group-hover:translate-x-0 group-hover:translate-y-0 
                    transition-transform duration-700 ease-out pointer-events-none"
                ></div>
              </div>

              {/* Gradient Button */}
              <button className="relative w-full px-4 py-4 text-xl font-semibold text-black/90 overflow-hidden">
                {service.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-blue-400/40 to-violet-500/40 
                    transition-all duration-700 group-hover:w-full 
                    pointer-events-none"
                ></span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
