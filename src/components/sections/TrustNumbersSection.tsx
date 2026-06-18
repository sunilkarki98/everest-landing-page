"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Building2, ThumbsUp } from "lucide-react";
import { Container } from "@/components/layout/Container";

// Counter component
interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
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
    <div ref={ref} className="text-xl sm:text-2xl font-extrabold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const trustItems = [
  { icon: Award, number: 20, suffix: "+", label: "Years Experience" },
  { icon: Users, number: 10000, suffix: "+", label: "Students Assisted" },
  { icon: Building2, number: 300, suffix: "+", label: "Institutions" },
  { icon: ThumbsUp, number: 98, suffix: "%", label: "Satisfaction" },
];

export default function TrustNumbersSection() {
  return (
    <section className="relative z-30 py-16 lg:py-24 bg-secondary/10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-border/40 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-secondary/15 mb-6">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="mb-2">
                  <Counter target={item.number} suffix={item.suffix} />
                </div>
                <p className="text-sm sm:text-base font-semibold text-primary">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
