"use client";

import { ServiceDetailClient } from "@/components/layout/ServiceDetailClient";
import { otherServices } from "@/data/services";

export default function OtherServicesPage() {
  return (
    <ServiceDetailClient 
      title="Additional Support Services"
      subtitle="Comprehensive support beyond education and migration to ensure your life in Australia is smooth and compliant."
      breadcrumbLabel="Other Services"
      services={otherServices}
      contactId="contact-us"
    />
  );
}
