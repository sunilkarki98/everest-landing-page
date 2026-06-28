"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  className = "",
}) => {
  return (
    <div className={`relative pt-28 pb-10 lg:pt-32 lg:pb-12 bg-gradient-to-br from-slate-50 via-primary/5 to-primary/10 text-primary overflow-hidden ${className}`}>
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[120px] bg-accent/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-[120px] bg-secondary/5" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-base font-medium text-muted-foreground mb-4"
              >
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                {breadcrumbs.map((crumb) => (
                  <React.Fragment key={crumb.label}>
                    <ChevronRight size={14} className="text-slate-400" />
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-accent transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-primary font-semibold">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </motion.nav>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-primary"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Persistent QR Code Contact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center shrink-0"
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 w-40 h-40 relative overflow-hidden mb-3">
              <Image src="/contacusQR.jpeg" alt="Contact QR Code" fill sizes="160px" className="object-cover" priority />
            </div>
            <div className="font-extrabold text-primary text-sm uppercase tracking-widest tracking-[0.2em]">Contact Us</div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

