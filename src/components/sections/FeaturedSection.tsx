"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Info } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";

const items = [
  {
    image: "/images/business.jpg",
    title: "Business Studies",
    button: "Read More",
    href: "/courses/BusinessStudies",
  },
  {
    image: "/images/eng.jpg",
    title: "Engineering",
    button: "Read More",
    href: "/courses/Engineering",
  },
  {
    image: "/images/it.jpg",
    title: "Information Technology",
    button: "Read More",
    href: "/courses/InformationTechnologies",
  },
  {
    image: "/images/health.jpg",
    title: "Health & Science",
    button: "Read More",
    href: "/courses/HealthAndScience",
  },
];

export default function ImageCardCarousel() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const displayedItems = items.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section id="popular-courses" className="w-full flex flex-col items-center gap-8 py-10 pb-10 relative">
      <SectionHeading title="Featured Courses" />

      {/* Fixed-height wrapper prevents layout collapse during page transitions */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 min-h-[340px] md:min-h-[380px] lg:min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex justify-center gap-6 flex-wrap"
          >
            {displayedItems.map((item, idx) => (
              <div
                key={item.title}
                className="group relative w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex-shrink-0"
              >
                {/* Main Image */}
                <div className="relative h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={page === 0 && idx === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                  />
                  {/* Green overlay */}
                  <div className="absolute top-0 left-0 w-full h-0 bg-green-200/20 group-hover:h-full transition-all duration-1000 pointer-events-none"></div>
                </div>

                {/* Overlapping Card */}
                <div
                  className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 
                             w-[85%] min-h-[200px] bg-white shadow-lg rounded-xl p-4 flex flex-col items-start overflow-hidden"
                >
                  {/* Blue overlay */}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0 bg-blue-400/20
                                   group-hover:h-full transition-all duration-1000 pointer-events-none rounded-xl"
                  ></span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-3 relative z-10 flex-shrink-0">
                    <Info className="w-5 h-5 text-gray-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] leading-tight sm:text-lg font-semibold mb-3 relative z-10 flex-1">
                    {item.title}
                  </h3>

                  {/* Button */}
                  <Link
                    href={item.href}
                    className="px-4 py-2 mt-auto bg-blue-500 text-white rounded-lg hover:bg-blue-600 relative z-10 text-sm sm:text-base whitespace-nowrap"
                  >
                    {item.button}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-6 py-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                page === idx ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
}
