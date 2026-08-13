import { Metadata } from "next";
import { CoursesClient } from "./CoursesClient";

export const metadata: Metadata = {
  title: "Premium Study Pathways | Everest Education",
  description: "Detailed insights into popular courses, top teaching institutions, career outcomes, and migration pathways.",
  alternates: {
    canonical: "https://eevsgroup.com/courses",
  },
};

export default function CoursesPage() {
  return <CoursesClient />;
}
