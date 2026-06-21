"use client";

import { ServiceDetailClient } from "@/components/layout/ServiceDetailClient";
import { studyServices } from "@/data/services";

export default function AbroadStudyPage() {
  return (
    <ServiceDetailClient 
      title="Abroad Study Services"
      subtitle="Comprehensive education counseling and university admission services for international students."
      breadcrumbLabel="Abroad Study"
      services={studyServices}
      contactId="contact-us"
    />
  );
}
