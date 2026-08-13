import { Metadata } from "next";
import { UniversitiesClient } from "./UniversitiesClient";

export const metadata: Metadata = {
  title: "Global Partner Universities | Everest Education",
  description: "Explore our extensive network of top-ranked global institutions. We provide end-to-end admission guidance for your dream university in Australia, Canada, UK, and more.",
  alternates: {
    canonical: "https://eevsgroup.com/universities",
  },
};

export default function UniversitiesPage() {
  return <UniversitiesClient />;
}
