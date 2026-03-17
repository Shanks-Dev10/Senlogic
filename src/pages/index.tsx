import Header from "@/components/Header";
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import HeroBanner from "@/components/home/HeroBanner";
import OurProject from "@/components/home/OurProject";
import OurStory from "@/components/home/OurStory";
import OurTeam from "@/components/home/OurTeam";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroBanner/>
      <Products/>
      <About/>
      <OurStory/>
      <OurProject/>
      <OurTeam/>
      <Blog/>
    </div>
  );
}
