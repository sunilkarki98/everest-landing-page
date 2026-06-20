"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const testimonials = [
  {
    name: "Rajan Sharma",
    course: "MBA — University of Melbourne, AU",
    feedback:
      "Everest Education made my student visa process simple and stress-free. Their team guided me through every step — from university selection to visa lodgement. I couldn't have done it without their support.",
    rating: 5,
    flag: "🇦🇺",
    outcome: "Visa Granted in 14 Days",
    image: "/images/clients/client1.jpg"
  },
  {
    name: "Kajal Shahi",
    course: "MSc Data Science — University of Toronto, CA",
    feedback:
      "The entire process was smooth and professional. The counselling team was always available and made every step clear. I highly recommend Everest Education to anyone planning to study abroad.",
    rating: 5,
    flag: "🇨🇦",
    outcome: "Admitted with 20% Scholarship",
    image: "/images/clients/client2.jpg"
  },
  {
    name: "Nisha Baniya",
    course: "Master of IT — Deakin University, AU",
    feedback:
      "I'm glad I chose Everest Education for my studies. They fully assisted and guided me through the entire process. The support, the administration, and the welcoming office environment are all truly impressive.",
    rating: 5,
    flag: "🇦🇺",
    outcome: "Visa Granted (Subclass 500)",
  },
  {
    name: "Sanjeet Parajuli",
    course: "BSc Business — King's College London, UK",
    feedback:
      "I feel fortunate to be related with Everest Education and satisfied with their entire service. I am extremely grateful for their support in making my processing much more efficient than I expected.",
    rating: 5,
    flag: "🇬🇧",
    outcome: "Admitted & Visa Granted",
  },
];

/* ── Testimonial Card ── */
function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <Card className="relative group h-full flex flex-col justify-between p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-border/40">
      {/* Top Section with Outcome */}
      <div className="flex justify-between items-start mb-6">
        <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary transition-colors" />
        <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
          {item.outcome}
        </div>
      </div>

      {/* Feedback */}
      <p className="text-base sm:text-lg leading-relaxed mb-8 flex-1 text-foreground italic">
        &ldquo;{item.feedback}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Footer */}
      <div className="pt-5 border-t border-border flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary relative overflow-hidden shrink-0 border-2 border-white shadow-sm">
           {item.image ? (
             <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
           ) : (
             <span className="text-lg">{item.name.charAt(0)}</span>
           )}
           <div className="absolute -bottom-1 -right-1 text-sm bg-white rounded-full leading-none shadow-sm z-10">{item.flag}</div>
        </div>
        <div>
          <p className="font-bold text-primary text-sm sm:text-base">{item.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5 font-medium">{item.course}</p>
        </div>
      </div>
    </Card>
  );
}

/* ── Main Section ── */
export default function FeedbackSection() {
  const autoplayRef = React.useRef(Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: "auto" },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-10 lg:py-14 bg-primary overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Student Success Stories"
            title="Hear From Our Successful Students"
            titleColor="text-primary-foreground"
            className="mb-4"
          />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
            Real experiences from students who achieved their study and migration goals with {siteConfig.shortName}.
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="mt-8 lg:mt-12">
          {/* Viewport — negative mx to allow cards to bleed into the outer padding */}
          <div className="overflow-hidden -mx-2" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex-[0_0_100%]
                    min-w-0
                    md:flex-[0_0_50%]
                    lg:flex-[0_0_33.333%]
                    px-3
                  "
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="h-full pb-2"
                  >
                    <TestimonialCard item={item} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {scrollSnaps.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-8 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
          {/* View All Button */}
          <div className="mt-10 flex justify-center">
            <Button 
              variant="outline" 
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white group transition-all duration-300" 
              asChild
            >
              <Link href="/success-stories">
                Read All Success Stories
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
