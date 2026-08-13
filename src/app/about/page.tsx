import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Everest Education & Visa Services",
  description: "Learn about our journey, our team of expert counselors, and our mission to provide the best education and migration services.",
  alternates: {
    canonical: "https://eevsgroup.com/about",
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
