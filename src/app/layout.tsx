import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import FooterSection from "@/components/sections/FooterSection";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Everest Education & Visa Services",
  description:
    "Everest Education & Visa Services - Study, Work & Migrate Abroad with trusted guidance.",
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
        {/* Header on every page */}
        <Header />
        {/* Page Content */}
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
