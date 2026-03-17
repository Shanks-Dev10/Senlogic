import BannerImg from "@/assets/home-banner.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroBanner() {
  return (
    <section>
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          slidesPerView={1}
          loop={true}
          className="relative h-[70vh] "
        >
          <SwiperSlide className="mr-0">
            {" "}
            {/* BACKGROUND IMAGE */}
            <img
              src={BannerImg}
              className="absolute w-full h-full object-cover"
            />
            {/* DARK OVERLAY */}
            <div className="absolute w-full h-full bg-black/60" />
            {/* CONTENT */}
            <div className="relative z-10 flex items-center justify-center h-full text-white text-5xl">
              Industrial Solutions
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            {/* BACKGROUND IMAGE */}
            <img
              src={BannerImg}
              className="absolute w-full h-full object-cover"
            />
            {/* DARK OVERLAY */}
            <div className="absolute w-full h-full bg-black/60" />
            {/* CONTENT */}
            <div className="relative z-10 flex items-center justify-center h-full text-white text-5xl">
              Industrial Solutions
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
