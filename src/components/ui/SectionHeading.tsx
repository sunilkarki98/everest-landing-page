"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { headingVariants } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  animationVariants?: Variants;
  eyebrowColor?: string;
  titleColor?: string;
}


export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className,
  animationVariants = headingVariants,
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
          <div className={cn("text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase", eyebrowColor || "text-accent")}>
            {eyebrow}
          </div>
          <span className="block w-6 sm:w-10 h-px bg-accent" />
        </div>
      )}
      <h2 className={cn("text-ui-section-title tracking-tight", titleColor || "text-primary")}>
        {title}
      </h2>
      {isCenter && (
        <div className="w-16 h-0.5 mx-auto mt-4 bg-accent" />
      )}
    </motion.div>
  );
}
