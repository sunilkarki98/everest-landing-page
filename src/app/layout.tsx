import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://eevsgroup.com"),
  title: "Everest Education | Your Pathway to Global Universities",
  description:
    "Join 50,000+ students who secured their future in Australia, Canada, the UK, and New Zealand with our 99% visa success rate. Expert migration and education consultancy.",
  keywords: [
    "Education Consultancy",
    "Study Abroad",
    "Visa Services",
    "Migrate to Australia",
    "Study in Canada",
    "Study in UK",
    "Everest Education",
    "Kathmandu",
    "Student Visa",
  ],
  openGraph: {
    title: "Everest Education & Visa Services",
    description: "Your Pathway to Global Universities. Expert migration and education consultancy.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://eevsgroup.com",
    siteName: "Everest Education",
    images: [
      {
        url: "/logos/everestlogo.png",
        width: 1200,
        height: 630,
        alt: "Everest Education Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everest Education | Your Pathway to Global Universities",
    description: "Expert migration and education consultancy for Australia, Canada, and the UK.",
    images: ["/logos/everestlogo.png"],
  },
  icons: {
    icon: "/logos/everestlogo.png",
    apple: "/logos/everestlogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <SmoothScrollProvider>
          {/* Header on every page */}
          <Header />
          {/* Page Content */}
          <main>{children}</main>
          <FooterSection />
          <WhatsAppWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
