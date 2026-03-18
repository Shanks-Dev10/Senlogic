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
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <h2 className="mb-[5px] text-[35px] leading-[45px] font-semibold text-[#232323]">
            Application Area
          </h2>
          <p className="max-w-[700px] text-center mx-auto pt-[10px] text-[15px] text-[#494949] leading-[28px] mb-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            atque porro quidem necessitatibus, quisquam iusto fuga ratione amet
            ipsam hic minima.
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
              <Link
                key={index}
                to={projects.link}
                className="relative flex justify-center items-center"
              >
                <img
                  src={projects.img}
                  alt="project1 "
                  className="w-full h-full rounded-sm"
                />
                <div className="p-[15px] bg-[#fff] rounded-sm absolute bottom-4 z-[1px] w-[242px]">
                  <h5 className="text-[16px] font-semibold leading-[24px] text-[#232323] text-center">
                    {projects.title}
                  </h5>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
