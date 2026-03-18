import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import User1 from "@/assets/user1.webp";
import User2 from "@/assets/user2.webp";
import User3 from "@/assets/user3.webp";

export default function Testimonial() {
  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      name: "Alexer Valvin",
      role: "Student",
      img: User1,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      name: "Alexer Valvin",
      role: "Student",
      img: User2,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      name: "Alexer Valvin",
      role: "Student",
      img: User3,
    },
  ];

  const testimonialLoop = [...testimonials, ...testimonials];

  return (
    <section className=" py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
            Happy Customers Said
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
          }}
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {testimonialLoop.map((item, index) => (
            <SwiperSlide key={index} className="cursor-pointer ">
              <div className="bg-white px-2 py-8 md:p-8 rounded-md shadow relative">
                {/* Quote */}
                <p className="text-gray-500 leading-relaxed">{item.text}</p>

                {/* Quote Icon */}
                <span className="absolute -bottom-5 right-6 text-gray-200 text-7xl">
                  ”
                </span>
              </div>

              {/* User */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
