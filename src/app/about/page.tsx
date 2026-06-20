import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Everest Education",
  description: "Learn about Everest Education & Visa Services (EEVS) and our mission to empower students globally.",
};

export default function AboutPage() {
  return <AboutContent />;
}
