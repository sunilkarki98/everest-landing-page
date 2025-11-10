"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Info } from "lucide-react";

const items = [
  {
    image: "/images/business.jpg",
    title: "Business Studies",
    button: "Read More",
  },
  { image: "/images/eng.jpg", title: "Engineering", button: "Read More" },
  {
    image: "/images/it.jpg",
    title: "Information Technology",
    button: "Read More",
  },
  {
    image: "/images/health.jpg",
    title: "Health & Science",
    button: "Read More",
  },
];

export default function ImageCardCarousel() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else setItemsPerPage(2);
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
    <section className="w-full flex flex-col items-center gap-8 py-10 relative">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
        Featured Courses
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        <AnimatePresence mode="wait">
          {displayedItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="group relative w-[90%] sm:w-[420px] md:w-[360px] lg:w-[420px] xl:w-[500px] flex-shrink-0"
            >
              {/* Main Image */}
              <div className="relative h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
                {/* Green overlay */}
                <div className="absolute top-0 left-0 w-full h-0 bg-green-200/20 group-hover:h-full transition-all duration-1000 pointer-events-none"></div>
              </div>

              {/* Overlapping Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 
                           w-[85%] bg-white shadow-lg rounded-xl p-4 flex flex-col items-start overflow-hidden"
              >
                {/* Blue overlay */}
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-blue-400/20
                                 group-hover:h-full transition-all duration-1000 pointer-events-none rounded-xl"
                ></span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-3 relative z-10">
                  <Info className="w-5 h-5 text-gray-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 relative z-10">
                  {item.title}
                </h3>

                {/* Button */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 relative z-10">
                  {item.button}
                </button>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 md:mt-12 py-2 mt-14">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              page === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
