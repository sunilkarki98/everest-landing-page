import { Metadata } from "next";
import { detailedCourses } from "@/data/courses";
import { CourseDetailClient } from "./CourseDetailClient";

export async function generateStaticParams() {
  return detailedCourses.map((course) => ({
    slug: course.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = detailedCourses.find((c) => c.id === slug);

  if (!course) {
    return { title: "Course Not Found | Everest Education" };
  }

  const programNames = course.programs.map(p => p.title).join(", ");

  return {
    title: `Study ${course.title} Abroad | Programs, Fees & PR Pathways | Everest Education`,
    description: `Explore top ${course.title} programs for international students including ${programNames}. Compare tuition fees, entry requirements, career outcomes, and migration pathways.`,
    keywords: course.seoKeywords,
    alternates: {
      canonical: `https://eevsgroup.com/courses/${course.id}`,
    },
    openGraph: {
      title: `Study ${course.title} Abroad | Everest Education`,
      url: `https://eevsgroup.com/courses/${course.id}`,
      description: course.description,
      images: [{ url: course.image, width: 1200, height: 630 }],
      type: "website",
    },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // JSON-LD Structured Data
  const course = detailedCourses.find((c) => c.id === slug);
  const jsonLd = course ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${course.title} Programs — Everest Education`,
    "description": course.longDescription,
    "itemListElement": course.programs.map((program, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": program.title,
      "description": program.description,
      "provider": {
        "@type": "Organization",
        "name": "Everest Education & Visa Services",
        "url": "https://eevsgroup.com"
      },
      "timeRequired": program.duration,
      "offers": {
        "@type": "Offer",
        "category": "Tuition Fee",
        "description": program.avgFee
      }
    }))
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CourseDetailClient slug={slug} />
    </>
  );
}
