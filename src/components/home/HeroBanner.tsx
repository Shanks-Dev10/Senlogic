import Slider1 from "@/assets/slide8.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sliderImg from "@/assets/home.webp";

export default function HeroBanner() {
  return (
    <section>
      <div>
        <div className="relative ">
          {/* BACKGROUND IMAGE */}
          <img src={Slider1} className="absolute w-full h-full bg-cover"/>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center  pt-[50px] px-4 gap-2 max-w-[1200px] mx-auto relative z-10">
            <div className="md:px-4 px-0">
              <h1 className="text-white md:text-start text-center text-2xl md:text-[48px] md:leading-[60px] mb-[20px]">
                We are industry factory solution
              </h1>
              <p className="text-white leading-[30px] mb-[20px] md:text-start text-center">
                lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
            <div>
              <img
                src={sliderImg}
                alt="sliderImg"
                className="md:w-[700px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
