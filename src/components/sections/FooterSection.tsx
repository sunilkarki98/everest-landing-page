"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Left section: logo, social, subscribe */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/images/logo.jpeg" // replace with your logo
              alt="Everest Education Logo"
              width={150}
              height={50}
              className="object-contain rounded-lg"
            />
            <p className="text-sm text-gray-300">Since 2006</p>
            <p className="text-sm text-gray-400">Connecting Life & Learning</p>
          </div>
          <div className="flex space-x-3 mt-2">
            <FaFacebookF className="w-5 h-5 hover:text-green-500" />
            <FaTwitter className="w-5 h-5 hover:text-green-500" />
            <FaInstagram className="w-5 h-5 hover:text-green-500" />
            <FaLinkedinIn className="w-5 h-5 hover:text-green-500" />
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-2 w-full rounded border border-gray-700 bg-gray-800 text-white focus:outline-none"
            />
            <button className="mt-2 w-full bg-green-500 hover:bg-green-600 p-2 rounded text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            About Us
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Who We Are</li>
            <li>Our Timeline</li>
            <li>Our Leadership Team</li>
            <li>Partner With Us</li>
            <li>Awards Recognitions</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Our Services
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Meet us Online</li>
            <li>Admission Counseling</li>
            <li>Health Cover</li>
            <li>Student Visa Service</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Visit Our Virtual Office</li>
            <li>Test Preparation</li>
            <li>International Study Guide</li>
            <li>Duolingo English Test</li>
          </ul>
        </div>

        {/* Study Destinations */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Study Destinations
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Study in Australia</li>
            <li>Study in Canada</li>
            <li>Study in Europe</li>
            <li>Study in New Zealand</li>
            <li>Study in UK</li>
            <li>Study in USA</li>
          </ul>
        </div>

        {/* Courses Abroad & Global Offices */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Courses Abroad
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300 mb-4">
            <li>MBA in Australia</li>
            <li>MBA in USA</li>
            <li>MBA in Canada</li>
          </ul>

          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Global Offices
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Australia</li>
            <li>Bangladesh</li>
            <li>Dubai</li>
            <li>India</li>
            <li>Indonesia</li>
            <li>Kenya</li>
            <li>Nepal</li>
            <li>New Zealand</li>
            <li>Pakistan</li>
            <li>Philippines</li>
            <li>Sri Lanka</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        Copyright © 2024. Everest Education Groups. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
