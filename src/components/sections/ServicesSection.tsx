"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUpFastContainer, fadeUpCard, cardHoverTransition } from "../../lib/animations";

const services = [
  { name: "Migration", imageSrc: "/images/passport.jpg", alt: "Hand holding a passport and boarding pass", href: "/migration/StudentVisa" },
  { name: "Education", imageSrc: "/images/education.jpg", alt: "Graduation cap on a stack of books", href: "/services/EducationalService" },
  { name: "Professional Year", imageSrc: "/images/pyr.jpg", alt: "People working on computers", href: "/services/ProfessionalYear" },
  { name: "NAATI | PTE", imageSrc: "/images/pte.jpg", alt: "Students looking at a laptop", href: "/services/NaatiPteService" },
];


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
        variants={fadeUpFastContainer}
      >
        {/* Heading */}
        <SectionHeading 
          title="How We Can Help You" 
          titleColor="text-white"
        />

        {/* Cards — responsive width */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:w-80 cursor-pointer will-change-transform"
              variants={fadeUpCard}
              whileHover={{ scale: 1.05 }}
              transition={cardHoverTransition}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

              {/* Gradient Button — now a link */}
              <Link
                href={service.href}
                className="relative block w-full px-4 py-4 text-xl font-semibold text-black/90 overflow-hidden text-center"
              >
                {service.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-blue-400/40 to-violet-500/40 
                    transition-all duration-700 group-hover:w-full 
                    pointer-events-none"
                ></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
