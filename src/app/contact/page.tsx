"use client";
import Offices from "@/components/Offices";
import ContactUs from "@/components/sections/ContactUs";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section>
        <ContactUs />
        <Offices />
      </section>
    </main>
  );
}
