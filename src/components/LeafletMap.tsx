"use client";

import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // ✅ Import here at top — only in client component

interface Branch {
  id: number;
  name: string;
  position: [number, number];
  country: string;
}

// 🧭 SVG marker (clean & transparent)
const svgHtml = (color = "#1d4ed8") => `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="52" viewBox="0 0 24 32" fill="none">
    <path d="M12 0C7.03 0 3 4.03 3 9c0 6.75 8.07 17.58 8.54 18.13a1 1 0 0 0 1.52 0C12.93 26.58 21 15.75 21 9c0-4.97-4.03-9-9-9z" fill="${color}"/>
    <circle cx="12" cy="9" r="3.5" fill="#fff"/>
  </svg>
`;

const customIcon = L.divIcon({
  className: "grace-div-icon",
  html: svgHtml("#1d4ed8"),
  iconSize: [40, 52],
  iconAnchor: [20, 52],
  popupAnchor: [0, -45],
});

interface Props {
  branches: Branch[];
}

const LeafletMap: FC<Props> = ({ branches }) => {
  const center: [number, number] =
    branches.length > 0 ? branches[0].position : [20, 0];

  return (
    <MapContainer
      center={center}
      zoom={2}
      scrollWheelZoom={false}
      className="h-full w-full z-0"
      style={{ background: "transparent" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {branches.map((b) => (
        <>
          {/* Marker Pin */}
          <Marker key={b.id} position={b.position} icon={customIcon}>
            <Popup>
              <strong>{b.name}</strong>
              <br />
              {b.country}
            </Popup>
          </Marker>

          {/* Always-visible branch name label */}
          <Marker
            key={`${b.id}-label`}
            position={[b.position[0] + 1, b.position[1]]} // offset label slightly
            icon={L.divIcon({
              className: "branch-label",
              html: `<div style="
                  background: rgba(255,255,255,0.85);
                  color: #1e293b;
                  font-weight: 600;
                  font-size: 13px;
                  padding: 2px 6px;
                  border-radius: 6px;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                  white-space: nowrap;
                ">
              </div>`,
            })}
            interactive={false}
          />
        </>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
