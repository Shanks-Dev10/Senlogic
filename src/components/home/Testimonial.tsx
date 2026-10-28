import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type TestimonialItem = {
  text: string;
  name: string;
};

export default function Testimonial() {
  const [expandedReviews, setExpandedReviews] = useState<
    Record<number, boolean>
  >({});

  const testimonials: TestimonialItem[] = [
    {
      text: "Visited Senlogic and had a good overall experience. I got to see their Railway Wagon Tippler setup and found it interesting to understand how it fits into railway material-handling operations. The visit was informative and well organized.",
      name: "Pooja M",
    },
    {
      text: "Great experience with Senlogic Automation! We installed their Rail In-Motion Weighing System, and the system has delivered accurate and reliable wagon weight measurements. The team was professional, technically knowledgeable, and supportive throughout the installation. Highly recommended for industrial weighing automation solutions.",
      name: "PADMA PRATIBHA M",
    },
    {
      text: "Had a good experience visiting Senlogic. I got to see their Rail In Motion weighing system and understand its application in railway operations. The overall setup was well organized, and the visit was informative.",
      name: "Megana",
    },
    {
      text: "Great team to work with. They understood our requirements clearly and delivered the project on time. Very satisfied with their service.",
      name: "Varsha Manickam",
    },
  ];

  const testimonialLoop = [...testimonials, ...testimonials];

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-[#F7F9FB] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-3xl font-bold leading-tight text-[#173156] md:text-4xl lg:text-[42px]">
            What Our Customers Say
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#029549]" />

          <p className="mt-5 text-base leading-7 text-gray-600">
            Discover what our customers say about Senlogic’s weighing and
            automation solutions, trusted for precision, reliability, and
            performance across diverse industrial applications.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop
          speed={700}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonialLoop.map((item, index) => {
            const isExpanded = !!expandedReviews[index];
            const needsReadMore = item.text.split(/\s+/).length > 15;

            return (
              <SwiperSlide key={`${item.name}-${index}`} className="!h-auto">
                <div className="flex h-full flex-col">
                  {/* Review Card */}
                  <div className="relative flex flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
                    {/* Quote Icon */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-6 top-4 font-serif text-7xl leading-none text-[#029549]/15"
                    >
                      ”
                    </span>

                    {/* Review Text */}
                    <p
                      className={`relative z-10 text-base leading-7 text-gray-600 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {item.text}
                    </p>

                    {/* Read More / Read Less */}
                    {needsReadMore && (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() => toggleReview(index)}
                        className="relative z-10 mt-3 self-start text-sm font-semibold text-[#029549] transition-colors duration-200 hover:text-[#173156]"
                      >
                        {isExpanded ? "Read Less −" : "Read More +"}
                      </button>
                    )}
                  </div>

                  {/* Customer Details */}
                  <div className="mt-6 flex min-h-[56px] items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#173156] text-lg font-semibold text-white">
                      {item.name.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <h4 className="break-words font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Customer Review
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}