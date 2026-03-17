import Project1 from "@/assets/our-story.webp";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Blog() {
  const blogs = [
    {
      title: "Why You Should Not Go To Industry",
      img: Project1,
      link: "/",
    },
    {
      title: "Seven Doubts You Should Clarify About",
      img: Project1,
      link: "/",
    },
    {
      title: "Seven Outrageous Ideas Industry",
      img: Project1,
      link: "/",
    },
    {
      title: "Why You Should Not Go To Industry",
      img: Project1,
      link: "/",
    },
    {
      title: "Seven Doubts You Should Clarify About",
      img: Project1,
      link: "/",
    },
    {
      title: "Seven Outrageous Ideas Industry",
      img: Project1,
      link: "/",
    },
  ];

  return (
    <section className="bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-10 lg:px-12">
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <h2 className="mb-[5px] text-[35px] leading-[45px] font-semibold text-[#232323]">
            Industry News
          </h2>
          <p className="max-w-[700px] text-center mx-auto pt-[10px] text-[15px] text-[#494949] leading-[28px] mb-[24px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {blogs.map((item, index) => (
            <SwiperSlide>
              <Link
                to={"/"}
                key={index}
                className="bg-white rounded-md shadow-sm overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  {/* DATE */}
                  <p className="text-[12px] text-red-600 font-semibold mb-3 uppercase tracking-wide">
                    10 AUG 2025 <span className="text-gray-400">|</span> BY JACK
                  </p>

                  {/* LINE */}
                  <div className="w-10 h-[2px] bg-red-600 mb-4"></div>

                  {/* TITLE */}
                  <h3 className="text-[20px] font-semibold text-[#232323] mb-3 leading-[28px]">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-[14px] text-gray-500 leading-[26px] mb-6">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary.
                  </p>
                  <Link
                    to={item.link}
                    className="bg-[#d2151e] py-[12px] px-[30px] text-[13px] font-semibold rounded-sm text-white"
                  >
                    Read More
                  </Link>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
