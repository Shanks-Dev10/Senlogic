import AfterSalesHero from "@/components/after-sales/AfterSalesHero";
import CoreServices from "@/components/after-sales/CoreServices";
import WhyPartner from "@/components/after-sales/WhyPartner";
import AccuracyCTA from "@/components/after-sales/AccuracyCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AfterSalePage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />
      <AfterSalesHero />
      <CoreServices />
      <WhyPartner />
      <AccuracyCTA />
      <Footer />
    </main>
  );
}
