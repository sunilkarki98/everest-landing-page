"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return "Name must be at least 2 characters.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please provide a valid email address.";
    }
    if (!formData.phone.trim() || !/^[+\d\s()-]{7,20}$/.test(formData.phone)) {
      return "Please provide a valid phone number (7-20 digits).";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return "Message must be at least 10 characters.";
    }
    if (formData.message.length > 2000) {
      return "Message must be under 2000 characters.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.result === "success") {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(result.error || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <SectionHeading 
          eyebrow="Contact Us" 
          title="Speak to our Team" 
          eyebrowColor="text-blue-400" 
          titleColor="text-blue-700" 
          className="!mb-2" // override margin bottom to keep the subtitle close
        />
        <p className="text-gray-600 mt-2">
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col sm:flex-row min-h-[650px] h-auto">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="sm:w-1/3 w-full relative min-h-[200px] sm:min-h-0"
        >
          <Image
            src="/images/contact.jpg"
            alt="Contact Us"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="sm:w-2/3 w-full p-6 sm:p-10 flex flex-col justify-center bg-white"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+977 9800000000"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={20}
                pattern="[+\d\s()-]{7,20}"
                className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                placeholder="I am looking to study in Australia..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={2000}
                className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 sm:mt-6 bg-gradient-to-r from-violet-800 to-violet-400 text-white py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all ease-in-out duration-300 ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:from-violet-600 hover:to-blue-800 hover:-translate-y-1"
              }`}
            >
              {loading ? "Sending..." : (<><FiSend /> Send Message</>)}
            </button>

            {success && (
              <p className="text-green-600 text-center mt-3">
                ✅ Your message has been sent successfully!
              </p>
            )}
            {error && <p className="text-red-600 text-center mt-3">{error}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
