import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import HeroBanner from "@/components/home/HeroBanner";
import OurProject from "@/components/home/OurProject";
import OurStory from "@/components/home/OurStory";
import OurTeam from "@/components/home/OurTeam";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroBanner/>
      <About/>
      <Products/>
      <OurStory/>
      <OurProject/>
      <OurTeam/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </div>
  );
}
