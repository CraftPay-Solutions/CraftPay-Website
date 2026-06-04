import Hero from '@/components/Hero';
import PaymentsSection from '@/components/PaymentsSection';
import StepsSection from '@/components/StepsSection';
import PricingSection from '@/components/PricingSection';
import TemplatesSection from '@/components/TemplatesSection';
import BenefitsSection from '@/components/BenefitsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PaymentsSection />
      <StepsSection />
      <PricingSection />
      <TemplatesSection />
      <BenefitsSection />
      <FaqSection />
      <Footer />
    </>
  );
}
