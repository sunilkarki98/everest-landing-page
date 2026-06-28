import { Metadata } from "next";
import { ServiceDetailClient } from "@/components/layout/ServiceDetailClient";
import { otherServices } from "@/data/services";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ service?: string }> }): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const activeService = otherServices.find(s => s.id === serviceId);

  if (activeService) {
    return {
      title: `${activeService.title} | Support Services | Everest Education`,
      description: activeService.overview || activeService.description,
      keywords: ["OSHC Australia", "international student tax Australia", "skill assessment Australia", "VETASSESS", "business setup Australia", "TFN registration"],
      openGraph: {
        title: `${activeService.title} | Additional Support Services | Everest Education`,
        description: activeService.overview || activeService.description,
        type: "website",
      },
    };
  }

  return {
    title: "Additional Support Services | Health Insurance, Tax, Skill Assessment | Everest Education",
    description: "Comprehensive support services for international students and migrants in Australia. OSHC health insurance, taxation & accounting, professional skill assessments, and business setup advisory.",
    keywords: ["OSHC Australia", "international student tax Australia", "skill assessment Australia", "VETASSESS", "business setup Australia", "TFN registration"],
    openGraph: {
      title: "Additional Support Services | Everest Education",
      description: "Comprehensive support beyond education and migration to ensure your life in Australia is smooth and compliant.",
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Additional Support Services — Everest Education",
  "description": "Comprehensive support beyond education and migration.",
  "itemListElement": otherServices.map((service, index) => ({
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

export default function OtherServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient
        title="Additional Support Services"
        subtitle="Comprehensive support beyond education and migration to ensure your life in Australia is smooth and compliant."
        breadcrumbLabel="Other Services"
        services={otherServices}
        contactId="contact-us"
      />
    </>
  );
}
