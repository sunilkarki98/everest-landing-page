import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

// Load Plus Jakarta Sans font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://eevsgroup.com"),
  title: "Everest Education & Visa Services | Study, Work & Migrate to Australia",
  description:
    "Trusted education & visa services in Australia. Family-owned, student-first. Study, work & migrate with confidence.",
  keywords: [
    "Education Consultancy",
    "Study in Australia",
    "Visa Services",
    "Student Visa Australia",
    "Skilled Migration",
    "Partner Visa",
    "Graduate Visa",
    "Everest Education",
    "PTE IELTS",
  ],
  openGraph: {
    title: "Everest Education & Visa Services",
    description: "Trusted education & visa services in Australia. Family-owned, student-first. Study, work & migrate with confidence.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://everesteducation.com.au",
    siteName: "Everest Education & Visa Services",
    images: [
      {
        url: "/logos/everestlogo.png",
        width: 1200,
        height: 630,
        alt: "Everest Education & Visa Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everest Education & Visa Services | Study, Work & Migrate to Australia",
    description: "Trusted education & visa services in Australia. Family-owned, student-first.",
    images: ["/logos/everestlogo.png"],
  },
  icons: {
    icon: "/logos/everestlogo.png",
    apple: "/logos/everestlogo.png",
  },
};

/*
🌸 BLESSING FOR THIS WEBSITE 🌸
By the grace of Ahilya (born on Ram Navami) and Amulya (priceless),
this website carries the energy of Number 2 (trust), Number 4 (stability), and Number 6 (care).
May every visitor feel peace. May every student find their path.
Colors: White (#FFFFFF), Navy (#1A2A5E), Light Blue (#89CFF0), Silver (#C0C0C0).
For Ahilya & Amulya — and for all who seek a better future.
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${caveat.variable} font-sans antialiased`}
        style={{ backgroundColor: "#FFFFFF", color: "#1E293B" }}
      >
        <SmoothScrollProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-primary">
            Skip to main content
          </a>
          {/* Header on every page */}
          <Header />
          {/* Page Content */}
          <main id="main-content">{children}</main>
          <FooterSection />
          <WhatsAppWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
