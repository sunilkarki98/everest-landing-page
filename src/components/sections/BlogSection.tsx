"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Format date for display
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function BlogSection() {
  // Show latest 3 blog posts
  const articles = blogPosts.slice(0, 3);

  return (
    <section className="section-py-sm section-py-sm-lg bg-background relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-muted-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-muted-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <SectionHeading
            eyebrow="Insights"
            title="Insights & Updates"
            className="mb-0"
          />
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-accent font-bold text-ui-small hover:translate-x-1 transition-transform"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((post, index) => (
            <motion.div
              key={post.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                href={`/blog/${post.id}`}
                className="group flex flex-col h-full rounded-2xl bg-white border border-border hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-all duration-400 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/95 text-primary border-none shadow-md backdrop-blur-sm text-ui-small">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Date + Read Time */}
                  <div className="flex items-center gap-3 text-ui-small text-foreground font-semibold antialiased mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-surface-muted" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-ui-card-title text-primary leading-snug mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-ui-body text-muted-foreground flex-1 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
                    <span className="text-ui-small font-bold text-foreground uppercase tracking-widest antialiased">
                      {post.author}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "View All" link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full font-bold bg-surface-hover text-primary w-full"
          >
            View All Insights
          </Link>
        </div>
      </Container>
    </section>
  );
}
