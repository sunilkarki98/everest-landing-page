"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  eyebrowColor?: string;
  titleColor?: string;
  className?: string;
  animationVariants?: Variants;
}

const defaultHeadingVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  eyebrowColor = "text-blue-400",
  titleColor = "text-gray-800",
  className = "",
  animationVariants = defaultHeadingVariants,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  
  return (
    <motion.div
      className={`mb-10 lg:mb-12 ${alignClass} ${className}`}
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {eyebrow && (
        <p className={`${eyebrowColor} font-semibold text-lg md:text-xl tracking-wide uppercase`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`${titleColor} text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 leading-tight`}>
        {title}
      </h2>
    </motion.div>
  );
}
