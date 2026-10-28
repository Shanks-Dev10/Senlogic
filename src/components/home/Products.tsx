import Product1 from "@/assets/product1.webp";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      title: "Railway Applications",
      description:
        "Reliable railway weighing solutions for accurate wagon measurement, load monitoring, and efficient rail operations.",
      img: Product1,
      link: "/",
    },
    {
      title: "On-Board Weighing Systems",
      description:
        "Advanced onboard weighing systems for real-time load measurement, accurate payload monitoring, and efficient equipment operations.",
      img: Product1,
      link: "/",
    },
    {
      title: "Industrial Applications",
      description:
        "Reliable industrial weighing and automation solutions for precise measurement, process control, and improved operational efficiency.",
      img: Product1,
      link: "/",
    },
  ];

  return (
    <section className="bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold tracking-[2px] uppercase text-[#029549] mb-3">
            Our Expertise
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#173156] leading-tight">
            Core Sectors
          </h2>

          <div className="w-16 h-1 bg-[#029549] mx-auto mt-5 rounded-full" />

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-7">
            Explore Senlogic’s advanced weighing and automation solutions,
            engineered for precision, reliability, and efficiency across
            railway, onboard, and industrial applications.
          </p>
        </div>

        {/* Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((item, index) => (
            <Link
              to={"#"}
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200/80 box-shadow:rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;  transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-[length:100%_100%] group-hover:bg-[length:110%_110%] transition-[background-size] duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#173156] mb-3 group-hover:text-[#029549] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-black text-[15px] leading-7 mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Learn More */}
                <Link
                  to={item.link}
                  aria-label={`Learn more about ${item.title}`}
                  className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#029549] group/link"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-7-7 7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
