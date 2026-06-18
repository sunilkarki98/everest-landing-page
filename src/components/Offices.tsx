"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { siteConfig } from "../config/site";

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
    phone: siteConfig.contact.phones.main,
    email: siteConfig.contact.emails.main,
    address: "Suite 2, Level 1, 9A Hindley St, Adelaide SA 5000, Australia",
    mapLink: "https://maps.google.com/?q=9A+Hindley+St+Adelaide+SA+5000",
  },
  {
    id: 2,
    country: "NEW ZEALAND OFFICE",
    title: "Auckland Office",
    phone: siteConfig.contact.phones.secondary,
    email: siteConfig.contact.emails.secondary,
    address:
      "Suite 202, 87–93 Queen Street, Dingwall Building, Auckland, New Zealand",
    mapLink: "https://maps.google.com/?q=87+Queen+Street+Auckland",
  },
  {
    id: 3,
    country: "SOUTH ASIA OFFICES",
    title: "Bagbazar Office",
    phone: siteConfig.contact.phones.main,
    email: siteConfig.contact.emails.main,
    address: "Bagbazar, Kathmandu (Opposite of Pipalbot), Nepal",
    mapLink: "https://maps.google.com/?q=Bagbazar+Kathmandu+Nepal",
  },
  {
    id: 4,
    country: "SOUTH ASIA OFFICES",
    title: "Baglung Office",
    phone: siteConfig.contact.phones.secondary,
    email: siteConfig.contact.emails.secondary,
    address: "Hanumandas Road, Next to Hotel Peace Palace, Baglung, Nepal",
    mapLink: "https://maps.google.com/?q=Baglung+Nepal",
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
    <section className="w-full py-10 lg:py-14 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="mb-8">
        <div className="overflow-x-auto lg:overflow-x-visible scrollbar-hide">
          <div className="flex justify-center items-center gap-3 min-w-max lg:min-w-[1100px] px-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-base font-medium whitespace-nowrap transition-colors duration-200 ${activeTab === tab
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

      <SectionHeading
        title={activeTab === "ALL BRANCHES" ? "All Offices" : activeTab}
      />

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

                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 mb-2 text-sm text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-5 h-5 text-black flex-shrink-0" />
                  <span>{office.phone}</span>
                </a>

                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 mb-2 text-sm text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5 text-black flex-shrink-0" />
                  <span>{office.email}</span>
                </a>

                <div className="flex items-start gap-2 text-sm text-gray-800 mb-4">
                  <MapPin className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <span>{office.address}</span>
                </div>
              </div>

              <a
                href={
                  office.mapLink ||
                  `https://maps.google.com/?q=${encodeURIComponent(
                    office.address
                  )}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-gradient-to-r from-violet-800 to-violet-400 text-white py-2.5 rounded-lg font-medium hover:from-violet-600 hover:to-blue-800 hover:-translate-y-1 transition-all ease-in-out duration-300 text-center block"
              >
                Get Directions
              </a>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}