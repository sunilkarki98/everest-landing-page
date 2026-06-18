"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../../config/site";
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
    <section id="contact-us" className="py-10 lg:py-14 bg-background">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <SectionHeading 
            eyebrow="Ready To Start Your Journey?" 
            title="Book Your Free Consultation" 
            className="mb-4"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Speak with our experienced consultants and receive personalized guidance for your education and migration goals.
          </p>
        </div>

        {/* Split Layout */}
        <Card className="overflow-hidden flex flex-col lg:flex-row shadow-xl">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-2/5 p-8 sm:p-10 flex flex-col justify-center bg-primary text-primary-foreground"
          >
            <h3 className="text-2xl font-bold mb-2">
              {siteConfig.shortName}
            </h3>
            <p className="opacity-80 text-sm mb-8">
              {siteConfig.description}
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 mb-8 bg-accent" />

            <h4 className="text-lg font-semibold mb-6">Global Headquarters</h4>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/20">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs opacity-60 uppercase tracking-wider">Phone</p>
                  <div className="flex flex-col">
                    <a
                      href={`tel:${siteConfig.contact.phones.main.replace(/[^\d+]/g, "")}`}
                      className="font-medium hover:underline text-sm"
                    >
                      {siteConfig.contact.phones.main}
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phones.secondary.replace(/[^\d+]/g, "")}`}
                      className="font-medium hover:underline text-sm"
                    >
                      {siteConfig.contact.phones.secondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/20">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs opacity-60 uppercase tracking-wider">Email</p>
                  <div className="flex flex-col">
                    <a
                      href={`mailto:${siteConfig.contact.emails.main}`}
                      className="font-medium hover:underline text-sm"
                    >
                      {siteConfig.contact.emails.main}
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.emails.secondary}`}
                      className="font-medium hover:underline text-sm"
                    >
                      {siteConfig.contact.emails.secondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-secondary/20">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs opacity-60 uppercase tracking-wider">Address</p>
                  <p className="font-medium">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="mt-10 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-5">
              <div className="w-24 h-24 bg-white rounded-xl p-0 overflow-hidden flex items-center justify-center shrink-0 shadow-inner">
                {/* Actual QR Code image */}
                <img src="/contacusQR.jpeg" alt="Contact QR Code" className="w-full h-full object-contain" />
              </div>
              <div>
                <h5 className="font-bold text-lg mb-1 text-white">Scan to Connect</h5>
                <p className="text-sm opacity-90 leading-snug text-white/90">Quickly reach our team via WhatsApp or save our contact details directly to your phone.</p>
              </div>
            </div>

          </motion.div>

          {/* Right — Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5 p-8 sm:p-10 flex flex-col justify-center bg-card text-card-foreground"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">
              Send Us an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold ml-1">Full Name</label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold ml-1">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold ml-1">Phone Number</label>
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
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold ml-1">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="I am looking to study abroad..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={loading}
                className="mt-2 w-full sm:w-auto self-start gap-2"
              >
                {loading ? "Sending..." : (<><Send className="w-4 h-4" /> Send Message</>)}
              </Button>

              {success && (
                <p className="text-success text-center sm:text-left mt-3 font-medium">
                  ✅ Your message has been sent successfully!
                </p>
              )}
              {error && <p className="text-destructive text-center sm:text-left mt-3">{error}</p>}
            </form>
          </motion.div>
        </Card>
      </Container>
    </section>
  );
};

export default ContactUs;
