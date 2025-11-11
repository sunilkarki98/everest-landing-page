"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Student Visa?",
    answer:
      "The Student Visa (Subclass 500) allows international students to study full-time in Australia at primary/secondary schools, vocational training, universities, or other institutions, and permits family members to accompany them.",
  },
  {
    id: 2,
    question: "What Can You Do With a Visitor Visa (Subclass 600)?",
    answer:
      "A Visitor Visa (Subclass 600) lets you visit Australia for tourism or business purposes for up to three, six, or twelve months depending on your circumstances.",
  },
  {
    id: 3,
    question: "What is a Partner Visa?",
    answer:
      "A Partner Visa allows the partner or spouse of an Australian citizen, permanent resident, or eligible New Zealand citizen to live in Australia.",
  },
  {
    id: 4,
    question: "What is a 485 Visa?",
    answer:
      "The Temporary Graduate Visa (Subclass 485) allows international students to live, study, and work in Australia temporarily after they finish their studies.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
      {/* LEFT SIDE - FAQ */}
      <div>
        <p className="text-sky-500 font-semibold mb-2">FAQs</p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-snug">
          Get the Answers to <br /> Common Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-900 hover:text-sky-600"
              >
                {faq.question}
                {openId === faq.id ? (
                  <ChevronUp className="text-sky-500" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE + BUTTON */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/faq.jpg" // <-- place your image in /public/images/
            alt="FAQ section team"
            fill
            priority
            className="object-cover"
          />
        </div>

        <a
          href="#"
          className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all"
        >
          Read More Q & A
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
