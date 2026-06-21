"use client";

import { ServiceDetailClient } from "@/components/layout/ServiceDetailClient";
import { migrationServices } from "@/data/services";

export default function MigrationPage() {
  return (
    <ServiceDetailClient 
      title="Visa & Migration Services"
      subtitle="Professional migration support tailored to your individual circumstances by Registered Migration Agents."
      breadcrumbLabel="Visa & Migration"
      services={migrationServices}
      contactId="contact-us"
    />
  );
}
