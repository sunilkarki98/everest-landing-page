import { Metadata } from "next";
import TaxForm from "./TaxForm";
import { Container } from "@/components/layout/Container";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tax Return Form | Everest Education & Visa Services",
  description: "Complete your Tax Return securely online with Everest Education & Visa Services.",
  alternates: {
    canonical: getCanonicalUrl("/tax-return"),
  },
};

export default function TaxReturnPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-8 sm:py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Custom Header Area matching the old HTML form */}
          <div className="mb-8">
            
            {/* Top row: Logo and Contact Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-border pb-6">
              {/* Left: Logo block */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-accent text-accent font-bold text-xl flex items-center justify-center bg-white shadow-sm font-[family-name:var(--font-caveat)] sm:font-sans">
                  E
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary leading-tight">Everest.Tax</h1>
                  <p className="text-sm text-slate-500">Registered Tax Agents</p>
                </div>
              </div>
              
              {/* Right: Contact block */}
              <div className="text-sm text-slate-600 sm:text-right space-y-1">
                <p>7/2–10 Oatley Court, Belconnen, ACT 2617</p>
                <p>Mob: 0466 117 512 / 0406 000 815</p>
                <a href="mailto:tax.everest@yahoo.com" className="hover:text-accent transition-colors underline underline-offset-2">tax.everest@yahoo.com</a>
              </div>
            </div>

            {/* Headline and Instructions */}
            <div className="mt-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-sans)]">
                Tax Return Form
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
                Please complete every section that applies to you. Fields marked with an asterisk (*) are required, including your signature at the end. Fields marked Y/N help us scope your return quickly — tick Y and add details wherever it applies.
              </p>
            </div>

            {/* Alert Box */}
            <div className="mt-6 bg-amber-50 border-l-4 border-accent p-5 rounded-r-xl shadow-sm text-sm text-slate-700 leading-relaxed">
              <strong>What counts as a record?</strong> Anything — paper or electronic — that provides evidence of income or expenses: receipts and invoices, spreadsheets or timesheets, logbooks, diary entries, or employment contracts and pay-related letters from your employer.
            </div>

          </div>

          <TaxForm />
          
        </div>
      </Container>
    </div>
  );
}
