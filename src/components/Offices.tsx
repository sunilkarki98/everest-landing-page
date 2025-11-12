"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

type Office = {
  id: number;
  country: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  mapLink?: string;
};

const tabs = [
  "ALL BRANCHES",
  "AUSTRALIA OFFICES",
  "SOUTH ASIA OFFICES",
  "DUBAI OFFICE",
  "INDONESIA OFFICE",
  "KENYA OFFICE",
  "NEW ZEALAND OFFICE",
  "PHILIPPINES OFFICE",
];

const offices: Office[] = [
  {
    id: 1,
    country: "AUSTRALIA OFFICES",
    title: "Adelaide Office",
    phone: "+61 (08) 7225 7892",
    email: "adelaide@graceintlgroup.com",
    address: "Suite 2, Level 1, 9A Hindley St, Adelaide SA 5000, Australia",
  },
  {
    id: 2,
    country: "NEW ZEALAND OFFICE",
    title: "Auckland Office",
    phone: "+64 95585152",
    email: "director.nz@graceintlgroup.com",
    address:
      "Suite 202, 87–93 Queen Street, Dingwall Building, Auckland, New Zealand",
  },
  {
    id: 3,
    country: "SOUTH ASIA OFFICES",
    title: "Bagbazar Office",
    phone: "+977 (01) 4256121 / 5356121",
    email: "bagbazar@grace.edu.np",
    address: "Bagbazar, Kathmandu (Opposite of Pipalbot), Nepal",
  },
  {
    id: 4,
    country: "SOUTH ASIA OFFICES",
    title: "Baglung Office",
    phone: "+977 (068) 522667",
    email: "baglung@grace.edu.np",
    address: "Hanumandas Road, Next to Hotel Peace Palace, Baglung, Nepal",
  },
];

export default function Offices() {
  const [activeTab, setActiveTab] = useState<string>("ALL BRANCHES");

  const normalize = (str: string) =>
    str
      .toLowerCase()
      .replace(/offices?/, "")
      .trim();

  const filtered =
    activeTab === "ALL BRANCHES"
      ? offices
      : offices.filter((o) => normalize(o.country) === normalize(activeTab));
      
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="mb-8">
        {/* allow horizontal scroll only on small/medium; visible (no scroll) on lg+ */}
        <div className="overflow-x-auto lg:overflow-x-visible scrollbar-hide">
          {/* 
            min-w-max lets the inner row be as wide as content on small screens (so it scrolls).
            On large screens we force a larger min-width so tabs fit in one line without wrapping/scroll.
            Adjust lg:min-w-[1100px] up/down if you add/remove tabs.
          */}
          <div className="flex justify-center items-center gap-3 min-w-max lg:min-w-[1100px] px-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
        {activeTab === "ALL BRANCHES" ? "All Offices" : activeTab}
      </h2>

      {/* Cards */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((office) => (
            <motion.div
              key={office.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-200 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-2xl text-black/80 mb-4">
                  {office.title}
                </h3>

                {/* Phone */}
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-800">
                  <Phone className="w-5 h-5 text-black flex-shrink-0" />
                  <span>{office.phone}</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-800">
                  <Mail className="w-5 h-5 text-black flex-shrink-0" />
                  <span>{office.email}</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-gray-800 mb-4">
                  <MapPin className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <span>{office.address}</span>
                </div>
              </div>

              <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors duration-200">
                Get Directions
              </button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
