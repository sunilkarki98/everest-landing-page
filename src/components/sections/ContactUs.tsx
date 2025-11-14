"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxu1vj0eEbnakjT7QQQscVfvJdUuwT_K34_SKw523_Fit0CO4TsPKwTkfo1UxtMsOdoQ/exec";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8"},
        body: JSON.stringify(formData),
        mode: "cors",
      });

      if (!response.ok) throw new Error("Failed to connect to server");

      const result = await response.json();

      if (result.result === "success") {
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
        <p className="text-blue-400 text-xl font-medium">Contact Us</p>
        <h2 className="text-4xl font-bold text-blue-700 mt-2">
          Speak to our Team
        </h2>
        <p className="text-gray-600 mt-2">
          Fill out the form below and we’ll get back to you shortly.
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col sm:flex-row h-[650px]">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="sm:w-1/3 w-full relative"
        >
          <Image
            src="/images/contact.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="sm:w-2/3 w-full p-10 flex flex-col justify-center bg-white"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 bg-gradient-to-r from-violet-800 to-violet-400 text-white py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all ease-in-out duration-300 ${
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
