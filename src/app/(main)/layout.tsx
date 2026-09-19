import Header from "@/components/layout/Header";
import FooterSection from "@/components/sections/FooterSection";
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
      <FooterSection />
      <QuickActionsBar />
      <EligibilityModal />
    </>
  );
}
