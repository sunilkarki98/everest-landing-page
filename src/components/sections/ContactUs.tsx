"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return "Name must be at least 2 characters.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please provide a valid email address.";
    }
    if (!formData.phone.trim() || !/^[+\d\s()-]{7,20}$/.test(formData.phone)) {
      return "Please provide a valid phone number (7-20 digits).";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return "Message must be at least 10 characters.";
    }
    if (formData.message.length > 2000) {
      return "Message must be under 2000 characters.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.result === "success") {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(result.error || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="py-12 lg:py-20 bg-background">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Ready To Start Your Journey?"
            title="Book Your Free Consultation"
            className="mb-4"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Speak with our experienced consultants and receive personalized guidance for your education and migration goals.
          </p>
        </div>

        {/* Grid Layout Container */}
        <Card className="overflow-hidden shadow-xl border-border/50 max-w-[1080px] mx-auto">
          <div className="grid lg:grid-cols-[460px_minmax(0,1fr)]">

            {/* Left Column — Contact Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 flex flex-col justify-between bg-primary text-primary-foreground h-full relative"
            >
              <div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight">
                  {siteConfig.shortName}
                </h3>
                <p className="opacity-80 text-base mb-8 leading-relaxed">
                  {siteConfig.description}
                </p>

                {/* Divider */}
                <div className="w-12 h-1 mb-8 bg-accent rounded-full" />

                <h4 className="text-xl font-semibold mb-6 tracking-wide">Global Headquarters</h4>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/10 border border-secondary/20">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs opacity-60 uppercase tracking-widest font-semibold mb-1">Phone</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href={`tel:${siteConfig.contact.phones.main.replace(/[^\d+]/g, "")}`}
                          className="font-medium hover:text-accent transition-colors text-base"
                        >
                          {siteConfig.contact.phones.main}
                        </a>
                        <a
                          href={`tel:${siteConfig.contact.phones.secondary.replace(/[^\d+]/g, "")}`}
                          className="font-medium hover:text-accent transition-colors text-base"
                        >
                          {siteConfig.contact.phones.secondary}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/10 border border-secondary/20">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs opacity-60 uppercase tracking-widest font-semibold mb-1">Email</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href={`mailto:${siteConfig.contact.emails.main}`}
                          className="font-medium hover:text-accent transition-colors text-base"
                        >
                          {siteConfig.contact.emails.main}
                        </a>
                        <a
                          href={`mailto:${siteConfig.contact.emails.secondary}`}
                          className="font-medium hover:text-accent transition-colors text-base"
                        >
                          {siteConfig.contact.emails.secondary}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/10 border border-secondary/20">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs opacity-60 uppercase tracking-widest font-semibold mb-1">Address</p>
                      <p className="font-medium text-base leading-snug">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-5 group hover:bg-white/10 transition-colors">
                <div className="w-24 h-24 bg-white rounded-xl overflow-hidden flex items-center justify-center shrink-0 shadow-inner relative">
                  <Image src="/contacusQR.jpeg" alt="Contact QR Code for WhatsApp" fill sizes="96px" className="object-contain" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1.5 text-white">Scan to Connect</h5>
                  <p className="text-sm opacity-80 leading-relaxed text-white/90">Quickly reach our team via WhatsApp or save our details to your phone.</p>
                </div>
              </div>

            </motion.div>

            {/* Right Column — Fluid Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-card text-card-foreground bg-[url('/noise.png')] bg-blend-soft-light"
            >
              <div className="w-full max-w-[540px]">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary tracking-tight">
                  Send Us an Inquiry
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full" noValidate>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold ml-1 text-slate-700">Full Name</label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="h-12 text-base bg-slate-50 border-slate-200 focus-visible:ring-primary/20"
                      aria-invalid={error && error.includes("Name") ? "true" : "false"}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold ml-1 text-slate-700">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      className="h-12 text-base bg-slate-50 border-slate-200 focus-visible:ring-primary/20"
                      aria-invalid={error && error.includes("email") ? "true" : "false"}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold ml-1 text-slate-700">Phone Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+61 xxx xxx xxx"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                      pattern="[+\d\s()-]{7,20}"
                      className="h-12 text-base bg-slate-50 border-slate-200 focus-visible:ring-primary/20"
                      aria-invalid={error && error.includes("phone") ? "true" : "false"}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold ml-1 text-slate-700">How can we help you?</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="I am looking to study abroad..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={2000}
                      className="flex w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none shadow-sm"
                      aria-invalid={error && error.includes("Message") ? "true" : "false"}
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 h-12 text-base font-bold tracking-wide gap-2 shadow-md hover:shadow-lg transition-all"
                      aria-live="polite"
                    >
                      {loading ? "Sending..." : (<><Send className="w-5 h-5" /> Send Message</>)}
                    </Button>
                  </div>

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 mt-2 font-medium flex items-center gap-2"
                      role="alert"
                    >
                      <span className="text-lg">✅</span> Your message has been sent successfully!
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 mt-2 font-medium"
                      role="alert"
                    >
                      {error}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default ContactUs;
