"use client";

import { FC, Suspense } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🧭 Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "/logos/marker.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

// 🗺️ Branch data
interface Branch {
  id: number;
  name: string;
  position: [number, number];
  country: string;
}

const branches: Branch[] = [
  { id: 1, name: "Grace Nepal - Kathmandu", position: [27.7172, 85.324], country: "Nepal" },
  { id: 2, name: "Grace India - Delhi", position: [28.6139, 77.209], country: "India" },
  { id: 3, name: "Grace Australia - Sydney", position: [-33.8688, 151.2093], country: "Australia" },
  { id: 4, name: "Grace Philippines - Manila", position: [14.5995, 120.9842], country: "Philippines" },
  { id: 5, name: "Grace Kenya - Nairobi", position: [-1.2864, 36.8172], country: "Kenya" },
];

// ⚡ Lazy load the Leaflet map (client-side only)
const DynamicMap = dynamic<{ branches: Branch[]; customIcon: L.Icon }>(
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
      <div className="max-w-3xl text-center mb-10">
        <p className="text-sky-500 font-semibold text-xl">Our Branches</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
          Our Grace International Branches
        </h2>
      </div>

      {/* Map Container */}
      <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Suspense fallback={<div className="h-full bg-gray-100 animate-pulse" />}>
          <DynamicMap branches={branches} customIcon={customIcon} />
        </Suspense>
      </div>
    </section>
  );
};

export default BranchesMapSection;
