"use client";

import React from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-blue-400 font-medium">Contact Us</p>
        <h2 className="text-4xl lg:text-4xl font-bold text-blue-700 mt-2">
          Speak to our Team
        </h2>
        <p className="text-gray-600 mt-2">
          Fill out the form below for a free consultation with our expert team.
        </p>
      </div>

      {/* Container */}
      <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col sm:flex-row h-[650px]">
        {/* Left Side Image (1/3 width) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="sm:w-1/3 w-full relative"
        >
          <Image
            src="/images/contact.jpg" // replace with your image path
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Side Form (2/3 width) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="sm:w-2/3 w-full p-10 flex flex-col justify-center bg-white"
        >
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border  text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border  text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border  text-gray-700 border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-violet-800 to-violet-400 text-white py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:from-violet-600 hover:to-blue-800 hover:-translate-y-1 transition-all ease-in-out duration-300"
            >
              <FiSend /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
