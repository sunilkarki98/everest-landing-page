"use client";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import { Container } from "@/components/layout/Container";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo & About */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-4">
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/logos/everestlogo.jpeg"
              alt="Everest Education Logo"
              width={150}
              height={50}
              className="object-contain rounded-lg opacity-80 hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-sm opacity-70">Since {siteConfig.foundedYear}</p>
            <p className="text-sm opacity-60">{siteConfig.description}</p>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-white mb-3 text-sm tracking-wider uppercase">Follow Us On</h3>
            <div className="flex gap-5 items-center">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors text-white hover:text-secondary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors text-white hover:text-secondary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors text-white hover:text-secondary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors text-white hover:text-secondary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/61406000815" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-colors text-white hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2 opacity-70">
            <li><Link href="/" className="transition-colors hover:text-secondary">Home</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-secondary">About Us</Link></li>
            <li><Link href="/courses" className="transition-colors hover:text-secondary">Courses</Link></li>
            <li><Link href="/visa-services" className="transition-colors hover:text-secondary">Visa Services</Link></li>
            <li><Link href="/migration" className="transition-colors hover:text-secondary">Visa & Migration</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Explore
          </h3>
          <ul className="mt-2 space-y-2 opacity-70">
            <li><Link href="/abroad-study" className="transition-colors hover:text-secondary">Abroad Study</Link></li>
            <li><Link href="/other-services" className="transition-colors hover:text-secondary">Other Services</Link></li>
            <li><Link href="/success-stories" className="transition-colors hover:text-secondary">Student Success Stories</Link></li>
            <li><Link href="/blogs" className="transition-colors hover:text-secondary">Blogs</Link></li>
            <li><Link href="/careers" className="transition-colors hover:text-secondary">Careers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Support
          </h3>
          <ul className="mt-2 space-y-2 opacity-70">
            <li><Link href="/book-consultation" className="transition-colors hover:text-secondary">Book Consultation</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-secondary">Contact Us</Link></li>
            <li><Link href="/faq" className="transition-colors hover:text-secondary">FAQ</Link></li>
            <li><Link href="/privacy-policy" className="transition-colors hover:text-secondary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="transition-colors hover:text-secondary">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-white mb-3 pb-1 border-b-2 border-accent inline-block">
            Contact
          </h3>
          <ul className="mt-4 space-y-4 opacity-80">
            <li>
              <a href={`tel:${siteConfig.contact.phones.main.replace(/[^\d+]/g, "")}`} className="flex items-start gap-3 transition-colors hover:text-secondary">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col">
                  <span>{siteConfig.contact.phones.main}</span>
                  <span>{siteConfig.contact.phones.secondary}</span>
                </div>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.emails.main}`} className="flex items-start gap-3 transition-colors hover:text-secondary">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col">
                  <span>{siteConfig.contact.emails.main}</span>
                  <span>{siteConfig.contact.emails.secondary}</span>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
              <span className="leading-snug">{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="mt-10">
        {/* Tagline */}
        <div className="text-center py-4">
          <p className="opacity-80 text-sm font-medium">
            Trusted Education & Visa Services Worldwide
          </p>
        </div>

        {/* Gold Divider */}
        <Container>
          <div className="h-px bg-accent" />
        </Container>

        {/* Copyright */}
        <div className="py-4 text-center opacity-60 text-sm">
          © Everest Education & Visa Services (EEVS). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
