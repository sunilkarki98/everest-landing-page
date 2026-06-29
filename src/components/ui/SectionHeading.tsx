"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  animationVariants?: Variants;
  eyebrowColor?: string;
  titleColor?: string;
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
  className,
  animationVariants = defaultHeadingVariants,
  eyebrowColor,
  titleColor,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  
  return (
    <motion.div
      className={cn(
        "mb-10 lg:mb-12 will-change-transform",
        isCenter ? "text-center mx-auto" : "text-left",
        className
      )}
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-4", isCenter ? "justify-center" : "justify-start")}>
          <span className="block w-6 sm:w-10 h-px bg-accent" />
          <p className={cn("text-ui-small font-medium tracking-[0.2em] uppercase", eyebrowColor || "text-accent")}>
            {eyebrow}
          </p>
          <span className="block w-6 sm:w-10 h-px bg-accent" />
        </div>
      )}
      <h2 className={cn("text-ui-section-title", titleColor || "text-primary")}>
        {title}
      </h2>
      {isCenter && (
        <div className="w-16 h-0.5 mx-auto mt-4 bg-accent" />
      )}
    </motion.div>
  );
}
