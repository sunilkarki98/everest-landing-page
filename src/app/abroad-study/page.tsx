import { Metadata } from "next";
import { ServiceDetailClient } from "@/components/layout/ServiceDetailClient";
import { studyServices } from "@/data/services";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ service?: string }> }): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const activeService = studyServices.find(s => s.id === serviceId);

  if (activeService) {
    return {
      title: `${activeService.title} | Abroad Study Services Australia | Everest Education`,
      description: activeService.overview || activeService.description,
      keywords: ["study abroad Australia", "university admissions Australia", "scholarship Australia international students", "PTE preparation", "IELTS coaching", "professional year program Australia"],
      openGraph: {
        title: `${activeService.title} | Abroad Study Services | Everest Education`,
        description: activeService.overview || activeService.description,
        type: "website",
      },
    };
  }

  return {
    title: "Abroad Study Services Australia | University Admissions, Scholarships & PTE/IELTS | Everest Education",
    description: "Comprehensive study abroad services for international students. Free university admissions, scholarship assistance, career counselling, PTE & IELTS preparation, and Professional Year programs in Australia.",
    keywords: ["study abroad Australia", "university admissions Australia", "scholarship Australia international students", "PTE preparation", "IELTS coaching", "professional year program Australia"],
    openGraph: {
      title: "Abroad Study Services | Everest Education",
      description: "Comprehensive education counseling and university admission services for international students.",
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Abroad Study Services — Everest Education",
  "description": "Comprehensive education counseling and university admission services for international students.",
  "itemListElement": studyServices.map((service, index) => ({
    "@type": "Service",
    "position": index + 1,
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Everest Education & Visa Services",
      "url": "https://www.everestnepal.com"
    },
    "areaServed": "Australia"
  }))
};

export default function AbroadStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient
        title="Abroad Study Services"
        subtitle="Comprehensive education counseling and university admission services for international students."
        breadcrumbLabel="Abroad Study"
        services={studyServices}
        contactId="contact-us"
      />
    </>
  );
}
