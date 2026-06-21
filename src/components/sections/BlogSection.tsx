"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { latestArticles as articles } from "@/data/home";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function BlogSection() {
  return (
    <section className="py-10 lg:py-14 bg-background relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Stay Informed"
          title="Latest Updates"
          className="mb-10 lg:mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                href={article.href}
                className="group relative flex flex-col h-full rounded-2xl bg-white border border-border hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-all duration-400 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${article.accent}`} />

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Tag + Date row */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${article.accentLight}`}
                    >
                      <Tag className="w-3 h-3" />
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-primary leading-snug mb-3 group-hover:text-secondary transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-muted-foreground flex-1 mb-2">
                    {article.description}
                  </p>
                </div>

                {/* Hover overlay with centered CTA */}
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <span className="flex items-center gap-2 text-sm font-bold text-white drop-shadow-md bg-accent/30 backdrop-blur-md border border-accent/50 px-6 py-3 rounded-full shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
