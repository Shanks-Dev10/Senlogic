import Header from "@/components/Header";
import HeroBanner from "@/components/about/HeroBanner";
import OurCompany from "@/components/about/OurCompany";
import Counts from "@/components/about/Counts";
import TeamsPage from "@/components/about/TeamsPage";
import Testimonial from "@/components/about/Testimonial";
import Information from "@/components/about/Information";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="">
      <Header />
      <HeroBanner/>
      <OurCompany />
      <Counts />
      <TeamsPage />
      <Testimonial />
      <Information />
      <Footer />
    </div>
  );
}