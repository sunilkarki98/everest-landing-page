"use client";

import { FC, Suspense } from "react";
import dynamic from "next/dynamic";
import { SectionHeading } from "../ui/SectionHeading";

// 🗺️ Branch data
interface Branch {
  id: number;
  name: string;
  position: [number, number];
  country: string;
}

const branches: Branch[] = [
  { id: 1, name: "Everest Education - Kathmandu", position: [27.7172, 85.324], country: "Nepal" },
];

// ⚡ Lazy load the Leaflet map (client-side only — prevents SSR crash)
const DynamicMap = dynamic<{ branches: Branch[] }>(
  () => import("../LeafletMap").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-[500px] bg-gray-100 rounded-2xl shadow-inner">
        <p className="text-gray-500 animate-pulse">Loading map...</p>
      </div>
    ),
  }
);

const BranchesMapSection: FC = () => {
  return (
    <section
      id="our-branches"
      className="relative bg-white py-20 flex flex-col items-center scroll-mt-24"
    >
      {/* Heading */}
      <SectionHeading 
        eyebrow="Our Branches" 
        title="Our Everest Education Branches" 
        eyebrowColor="text-sky-500" 
        titleColor="text-gray-800" 
      />

      {/* Map Container */}
      <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Suspense fallback={<div className="h-full bg-gray-100 animate-pulse" />}>
          <DynamicMap branches={branches} />
        </Suspense>
      </div>
    </section>
  );
};

export default BranchesMapSection;
