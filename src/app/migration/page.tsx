import { Metadata } from "next";
import { ServiceDetailClient } from "@/components/layout/ServiceDetailClient";
import { migrationServices } from "@/data/services";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ service?: string }> }): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const serviceId = resolvedParams.service;
  const activeService = migrationServices.find(s => s.id === serviceId);

  if (activeService) {
    return {
      title: `${activeService.title} | Visa & Migration Services Australia | Everest Education`,
      description: activeService.overview || activeService.description,
      keywords: ["Australian student visa", "skilled migration Australia", "PR pathway Australia", "partner visa Australia", "migration agent Australia", "485 visa", "ART appeal"],
      openGraph: {
        title: `${activeService.title} | Visa & Migration Services | Everest Education`,
        description: activeService.overview || activeService.description,
        type: "website",
      },
    };
  }

  return {
    title: "Visa & Migration Services Australia | Student Visa, PR, Partner Visa | Everest Education",
    description: "Professional Australian visa and migration services by Registered Migration Agents. Expert support for Student Visa (500), Skilled Migration (189/190/491), Partner Visas, 485 Graduate Visa, ART Appeals, and Citizenship applications.",
    keywords: ["Australian student visa", "skilled migration Australia", "PR pathway Australia", "partner visa Australia", "migration agent Australia", "485 visa", "ART appeal"],
    openGraph: {
      title: "Visa & Migration Services | Everest Education",
      description: "Professional Australian visa and migration services by Registered Migration Agents.",
      type: "website",
    },
  };
}

// JSON-LD for Service page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Visa & Migration Services — Everest Education",
  "description": "Professional Australian visa and migration services by Registered Migration Agents.",
  "itemListElement": migrationServices.map((service, index) => ({
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

export default function MigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailClient
        title="Visa & Migration Services"
        subtitle="Professional migration support tailored to your individual circumstances by Registered Migration Agents."
        breadcrumbLabel="Visa & Migration"
        services={migrationServices}
        contactId="contact-us"
      />
    </>
  );
}
