"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface MotionCardProps {
  children: React.ReactNode;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: any;
  custom?: number;
}

export function MotionCard({
  children,
  variants,
  initial,
  whileInView,
  viewport,
  custom,
}: MotionCardProps) {
  return (
    <motion.div
      custom={custom}
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
