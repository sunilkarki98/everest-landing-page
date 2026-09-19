import Header from "@/components/layout/Header";
import FooterSection from "@/components/sections/FooterSection";
import PreFooterContact from "@/components/sections/PreFooterContact";
import { QuickActionsBar } from "@/components/layout/QuickActionsBar";
import { EligibilityModal } from "@/components/ui/EligibilityModal";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <PreFooterContact />
      <FooterSection />
      <QuickActionsBar />
      <EligibilityModal />
    </>
  );
}
