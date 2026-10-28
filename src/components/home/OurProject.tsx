import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Project1 from "@/assets/mining.webp";
import Project2 from "@/assets/cement.webp";
import Project3 from "@/assets/power.webp";
import Project4 from "@/assets/steel.webp";
import Project5 from "@/assets/road.webp";
import Project6 from "@/assets/port.webp";
import Project7 from "@/assets/earth.webp";
import { Link } from "react-router-dom";

export default function OurProject() {
  const project = [
    {
      title: "Mining",
      img: Project1,
      link: "/",
    },
    {
      title: "Cement Plant ",
      img: Project2,
      link: "/",
    },
    {
      title: "Power Plant",
      img: Project3,
      link: "/",
    },
    {
      title: "Steel Plant ",
      img: Project4,
      link: "/",
    },
    {
      title: "Road Infrastructure",
      img: Project5,
      link: "/",
    },
    {
      title: "Port Logistics",
      img: Project6,
      link: "/",
    },
    {
      title: "Earth Moving Equipments",
      img: Project7,
      link: "/",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-10 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#173156] leading-tight">
            Industries We Serve
          </h2>

          <div className="w-16 h-1 bg-[#029549] mx-auto mt-5 rounded-full" />

          <p className="mt-5 text-gray-600 text-base ">
            Our solutions support railway logistics and industrial operations.
            Designed to meet diverse application needs.
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={4}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {project.map((projects, index) => (
            <SwiperSlide>
              <div
                key={index}
                className=" flex flex-col justify-center items-center gap-3"
              >
                <img
                  src={projects.img}
                  alt="project1 "
                  className="w-full h-full rounded-sm"
                />

                <h5 className="text-[16px] font-semibold leading-[24px] text-[#232323] text-center">
                  {projects.title}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
