import Header from "@/components/layout/Header";
import FooterSection from "@/components/sections/FooterSection";
import PreFooterContact from "@/components/sections/PreFooterContact";
import { QuickActionsBar } from "@/components/layout/QuickActionsBar";
import { EligibilityModal } from "@/components/ui/EligibilityModal";
import { GlobalFaqRenderer } from "@/components/sections/GlobalFaqRenderer";

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
      <GlobalFaqRenderer />
      <FooterSection />
      <QuickActionsBar />
      <EligibilityModal />
    </>
  );
}
