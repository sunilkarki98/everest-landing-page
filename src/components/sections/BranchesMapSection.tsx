"use client";

import { FC } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

// 🧭 Transparent custom marker icon (clean logo)
const customIcon = new L.Icon({
  iconUrl: "/logos/marker.png", // must have transparent background
  iconSize: [45, 45],           // adjust to your logo size
  iconAnchor: [22.5, 45],       // center bottom anchor
  popupAnchor: [0, -40],
  className: "grace-marker-icon", // optional for extra control
});

const BranchesMapSection: FC = () => {
  return (
    <section
      id="our-branches"
      className="relative bg-gray-50 py-20 flex flex-col items-center scroll-mt-24"
    >
      <div className="max-w-3xl text-center mb-10">
        <p className="text-sky-500 font-semibold text-xl">Our Branches</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
          Our Grace International Branches
        </h2>
      </div>

      <div className="w-[90%] md:w-[80%] lg:w-[70%] h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={[10, 80]}
          zoom={3}
          scrollWheelZoom={false}
          zoomControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topleft" />

          {branches.map((branch) => (
            <Marker
              key={branch.id}
              position={branch.position}
              icon={customIcon}
            >
              <Popup>
                <div className="text-sm">
                  <strong>{branch.name}</strong>
                  <br />
                  {branch.country}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default BranchesMapSection;
