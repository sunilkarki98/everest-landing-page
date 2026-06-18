"use client";

import { FC, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Globe2, Eye } from "lucide-react";

interface Branch {
  id: number;
  name: string;
  query: string;
}

const activeBranches: Branch[] = [
  { id: 1, name: "Kathmandu Office", query: "Kathmandu, Nepal" },
  { id: 2, name: "Butwal Office", query: "Butwal, Nepal" },
  { id: 3, name: "Canberra Office", query: "Canberra, Australia" },
  { id: 4, name: "Perth Office", query: "Perth, Australia" },
];

const futureBranches = [
  { id: 5, name: "USA Office", region: "North America" },
  { id: 6, name: "Japan Office", region: "Asia" },
];

const BranchesMapSection: FC = () => {
  const [loadedMaps, setLoadedMaps] = useState<Record<number, boolean>>({});

  const handleLoadMap = (id: number) => {
    setLoadedMaps((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="our-branches"
      className="relative bg-slate-50 text-gray-900 py-16 lg:py-24 overflow-hidden border-t border-border/50"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] bg-accent/10" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full blur-[120px] bg-blue-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Our Global Presence"
            title="Visit Our Offices"
            titleColor="text-primary"
            className="mb-6"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            With dedicated locations across Nepal and Australia, our expert team is always within reach to guide your education and migration journey.
          </p>
        </div>

        {/* Active Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {activeBranches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="flex items-center gap-3 mb-4 pl-1">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-primary tracking-wide">
                  {branch.name}
                </h3>
              </div>

              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white group-hover:border-accent/40 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center">

                {loadedMaps[branch.id] ? (
                  <iframe
                    title={`Google Map for ${branch.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <button
                    onClick={() => handleLoadMap(branch.id)}
                    className="relative z-20 flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-primary transition-colors p-6 w-full h-full bg-slate-50/50"
                  >
                    <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-all duration-300">
                      <Eye size={24} />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Click to Load Map</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Expansion Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-lg text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-bold text-primary mb-4 flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe2 className="text-accent" size={20} />
              </div>
              Future Expansion
            </h4>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We are constantly growing to better serve our international students. We are excited to announce new EEVS branches opening soon.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full md:w-auto">
            {futureBranches.map((branch) => (
              <div
                key={branch.id}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md hover:border-accent/30 transition-all duration-300 flex-1 md:min-w-[200px]"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Coming Soon</div>
                <h5 className="text-xl font-bold text-primary mb-1">{branch.name}</h5>
                <p className="text-sm text-muted-foreground">{branch.region}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BranchesMapSection;
