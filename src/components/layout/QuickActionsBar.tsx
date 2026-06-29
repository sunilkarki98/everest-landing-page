"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, ExternalLink, X, ClipboardCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export function QuickActionsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show the bar after scrolling down slightly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false); // Auto collapse when near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3"
        >
          {/* Expanded Actions */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="flex flex-col gap-3 mb-2"
              >
                {/* Client Portal */}
                <a
                  href="https://condat.com.au/condat/318/all-clients"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all group"
                  title="Client Portal"
                >
                  <span className="font-bold text-sm text-slate-700 group-hover:text-primary transition-colors">Client Portal</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ExternalLink size={16} />
                  </div>
                </a>

                {/* Check Eligibility */}
                <button
                  onClick={() => window.dispatchEvent(new Event("open-eligibility-modal"))}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-accent/20 hover:border-accent hover:shadow-2xl transition-all group"
                  title="Check Eligibility"
                >
                  <span className="font-bold text-sm text-slate-700 group-hover:text-primary transition-colors">Check Eligibility</span>
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                    <ClipboardCheck size={16} />
                  </div>
                </button>

                {/* Book Consultation */}
                <a
                  href="https://condat.com.au/condat/318/customer?method=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all group"
                  title="Book Free Consultation"
                >
                  <span className="font-bold text-sm text-slate-700 group-hover:text-primary transition-colors">Book Consult</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Calendar size={16} />
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.contact.phones.main.replace(/[^\d+]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all group"
                  title="Chat on WhatsApp"
                >
                  <span className="font-bold text-sm text-slate-700 group-hover:text-emerald-600 transition-colors">WhatsApp</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageCircle size={16} />
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? "bg-slate-800 text-white hover:bg-slate-700 rotate-90" 
                : "bg-accent text-primary hover:bg-white hover:text-primary hover:scale-105"
            }`}
            aria-label={isExpanded ? "Close quick actions" : "Open quick actions"}
          >
            {isExpanded ? (
              <X size={24} />
            ) : (
              <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <span className="w-1 h-1 bg-current rounded-full" />
                <span className="w-1 h-1 bg-current rounded-full" />
                <span className="w-1 h-1 bg-current rounded-full" />
              </div>
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
