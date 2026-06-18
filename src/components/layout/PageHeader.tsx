"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
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
    <div className={`relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-indigo-50 via-purple-50/80 to-amber-50/40 text-primary overflow-hidden ${className}`}>
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[120px] bg-accent/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-[120px] bg-secondary/5" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-6"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary"
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
      </Container>
    </div>
  );
};

