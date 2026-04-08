"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Left section: logo, social, subscribe */}
        <div className="sm:col-span-2 md:col-span-1 space-y-4">
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/logos/logo.png"
              alt="Everest Education Logo"
              width={150}
              height={50}
              className="object-contain rounded-lg"
            />
            <p className="text-sm text-gray-300">Since {siteConfig.foundedYear}</p>
            <p className="text-sm text-gray-400">{siteConfig.description}</p>
          </div>
          <div className="flex space-x-3 mt-2">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-500 transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-500 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-500 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-500 transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email here"
              aria-label="Email for newsletter"
              className="p-2 w-full rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="mt-2 w-full bg-green-500 hover:bg-green-600 p-2 rounded text-white font-semibold transition-colors">
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
            <li><Link href="/" className="hover:text-green-400 transition-colors">Who We Are</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Our Timeline</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Our Leadership Team</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Partner With Us</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Awards Recognitions</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Our Services
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Meet us Online</Link></li>
            <li><Link href="/services/EducationalService" className="hover:text-green-400 transition-colors">Admission Counseling</Link></li>
            <li><Link href="/services/OshcOhvcServices" className="hover:text-green-400 transition-colors">Health Cover</Link></li>
            <li><Link href="/migration/StudentVisa" className="hover:text-green-400 transition-colors">Student Visa Service</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Visit Our Virtual Office</Link></li>
            <li><Link href="/services/NaatiPteService" className="hover:text-green-400 transition-colors">Test Preparation</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">International Study Guide</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Duolingo English Test</Link></li>
          </ul>
        </div>

        {/* Study Destinations */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Study Destinations
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><Link href="/" className="hover:text-green-400 transition-colors">Study in Australia</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Study in Canada</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Study in Europe</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Study in New Zealand</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Study in UK</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">Study in USA</Link></li>
          </ul>
        </div>

        {/* Courses Abroad & Global Offices */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Courses Abroad
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300 mb-4">
            <li><Link href="/courses/BusinessStudies" className="hover:text-green-400 transition-colors">MBA in Australia</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">MBA in USA</Link></li>
            <li><Link href="/" className="hover:text-green-400 transition-colors">MBA in Canada</Link></li>
          </ul>

          <h3 className="font-bold text-white mb-2 border-b border-green-500 inline-block">
            Global Offices
          </h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Australia</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Bangladesh</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Dubai</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">India</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Indonesia</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Kenya</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Nepal</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">New Zealand</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Pakistan</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Philippines</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Sri Lanka</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-4 text-center text-gray-300 text-sm">
        Copyright © {new Date().getFullYear()}. Everest Education Groups. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
