import Features from '@/components/Features/Features';
import Hero from '@/components/Hero';
import Navbar from "@/components/Navbar";
import Payments from '@/components/Payments/Payments';
import Pricing from '@/components/Pricing/Pricing';
import Steps from '@/components/Steps/Steps';
import Templates from '@/components/Templates/Templates';
import FAQ from '@/components/Faq/FAQ';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Payments />
      <Pricing />
      <Features />
      <Templates />
      <FAQ />
      <Footer />
    </>
  );
}

