"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-1">
      <div className="container mx-auto px-2 py-1 flex justify-between items-center lg:px-12">
        {/* Left side: City + Phone + Email */}
        <div className="flex items-center gap-3  xl:gap-6 flex-wrap">
          {/* City Selector */}
          <div className="flex items-center gap-1 border border-white px-2 py-1 rounded-full">
            <MapPin size={16} className="text-white" />
            <select className="bg-transparent text-white outline-none cursor-pointer">
              <option>Select City</option>
              <option>Melbourne</option>
              <option>Kathmandu</option>
            </select>
          </div>

          {/* Phone */}
          <a href="tel:+9779800000000" className="flex items-center gap-1 font-medium">
            <Phone className="w-5 h-5 text-blue-400 " />
            <span className="hidden sm:inline">+977-9800000000</span>
          </a>

          {/* Email */}
          <a href="mailto:nepal@everestgroupgroup.com" className="flex items-center gap-1 font-medium">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="hidden sm:inline">nepal@everestgroupgroup.com</span>
          </a>
        </div>

        {/* Right side: Social icons */}
        <div className="flex gap-2 xl:gap-6">
          {[
            { bg: "bg-blue-700", link: "https://facebook.com/yourpage", path: "M22 12a10 10 0 1 0-11 9.95v-7.05h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.87 0 1.8.15 1.8.15v2h-1c-1 0-1.3.63-1.3 1.28v1.87h2.2l-.35 2.9h-1.85v7.05A10 10 0 0 0 22 12" },
            { bg: "bg-sky-500", link: "https://twitter.com/yourpage", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.12 9.12 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.1 1.03A12.94 12.94 0 0 1 1.64 1.1a4.5 4.5 0 0 0-.61 2.27c0 1.57.8 2.95 2 3.76a4.47 4.47 0 0 1-2-.55v.06c0 2.18 1.55 4 3.61 4.43a4.52 4.52 0 0 1-2 .08c.57 1.8 2.24 3.1 4.2 3.14A9 9 0 0 1 0 19.54 12.78 12.78 0 0 0 6.92 21c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" },
            { bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600", link: "https://instagram.com/yourpage", path: "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" },
            { bg: "bg-blue-600", link: "https://linkedin.com/yourpage", path: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.35c.89-1.16 2.42-1.85 4-1.85 2.76 0 5 2.24 5 5v5.5z" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.bg} w-8 h-8 flex items-center justify-center rounded-full text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d={item.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
