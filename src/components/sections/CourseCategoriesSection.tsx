"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { detailedCourses } from "@/data/courses";

export default function CourseCategoriesSection() {
  return (
    <section className="pb-16 lg:pb-24 pt-0 bg-slate-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionHeading 
              eyebrow="Explore Your Options" 
              title="Popular Course Categories" 
              className="mb-4"
              align="left"
            />
            <p className="text-muted-foreground text-lg">
              Discover a wide range of study options designed to help you achieve your career and migration aspirations in Australia.
            </p>
          </div>
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 font-bold text-accent-text hover:text-accent transition-colors duration-300 group shrink-0"
          >
            View All Courses 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Custom Image Grid replacing generic FeatureGrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {detailedCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[280px] md:h-[320px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill 
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-4 group-hover:bg-accent group-hover:border-accent group-hover:-translate-y-2 transition-all duration-500 shadow-lg">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {course.title}
                  </h3>
                  
                  <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                    <p className="text-white/80 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 mt-2">
                      Explore {course.programs.length} specialized programs and career pathways.
                    </p>
                  </div>
                </div>

                {/* Click Overlay */}
                <Link href={`/courses/${course.id}`} className="absolute inset-0 z-10">
                  <span className="sr-only">Explore {course.title}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </Container>
    </section>
  );
}
