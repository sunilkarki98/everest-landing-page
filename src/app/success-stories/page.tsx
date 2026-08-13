import { Metadata } from "next";
import { SuccessStoriesClient } from "./SuccessStoriesClient";

export const metadata: Metadata = {
  title: "Student Success Stories | Everest Education",
  description: "Read the inspiring journeys of our students who successfully reached their education and migration goals with Everest Education.",
  alternates: {
    canonical: "https://eevsgroup.com/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />;
}
