import Header from "@/components/Header";
import HeroBanner from "@/components/about/HeroBanner";
import WhoWeAre from "@/components/about/WhoWeAre";
import PurposeDirection from "@/components/about/PurposeDirection";
import WhySenlogic from "@/components/about/WhySenlogic";
import CoreAreas from "@/components/about/CoreAreas";
import WeighingSolutions from "@/components/about/WeighingSolutions";
import Footer from "@/components/Footer";
import IndustriesWeServe from "@/components/about/IndustriesWeServe";

export default function About() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <WhoWeAre />
      <PurposeDirection />
      <WhySenlogic />
      <CoreAreas />
      <WeighingSolutions />
      <IndustriesWeServe />
      <Footer />
    </div>
  );
}
