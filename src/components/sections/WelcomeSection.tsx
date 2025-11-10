"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function WelcomeSection() {
  const stats = [
    { number: 50, label: "STUDENTS", suffix: "K+" },
    { number: 500, label: "EDUCATION PARTNERS", suffix: "+" },
    { number: 18, label: "YEARS" },
    { number: 20, label: "MIGRATION AGENTS", suffix: "+" },
    { number: 42, label: "TOTAL BRANCHES" },
  ];

  // Counter component with typed props
  interface CounterProps {
    target: number;
    suffix?: string;
  }

  const Counter: React.FC<CounterProps> = ({ target, suffix }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [isInView, target]);

    return (
      <div
        ref={ref}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-400 leading-none truncate"
      >
        {count.toLocaleString()}
        {suffix && suffix}
      </div>
    );
  };

  // Slide-in variants
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section className="bg-gray-50 py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT: Title + Stats */}
        <motion.div
          className="flex-1 flex flex-col min-w-[280px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={leftVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-indigo-600 mb-4">
            Welcome to Everest Education
          </h1>
          <p className="text-gray-600 mb-8 text-lg sm:text-xl">
            Where we connect life & learning.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center py-6 px-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <Counter target={item.number} suffix={item.suffix} />
                <div className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg font-medium text-gray-600 tracking-widest">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          className="flex-1 min-w-[280px] flex justify-center lg:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={rightVariants}
        >
          <div className="bg-white rounded-2xl shadow-xl p-2 flex items-center justify-center w-full max-w-[600px]">
            <Image
              src="/images/Nepal-Map.png"
              alt="Welcome Illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
