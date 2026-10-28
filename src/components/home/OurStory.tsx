import Ourstoryimg from "@/assets/our-story.webp";
import { Link } from "react-router-dom";

export default function OurStory() {
  return (
    <section className="bg-white">
      {/* About Senlogic */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <span className="inline-block text-[#029549] text-sm font-semibold uppercase tracking-[3px] mb-4">
              About Senlogic
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[50px] font-bold text-[#232323] mb-6">
              Excellence in
              <span className="text-[#173156] ">Weighing & Automation</span>
            </h2>

            <p className="text-[15px] md:text-base leading-7 md:leading-8 text-gray-600 mb-8">
              Since 2002, Senlogic has been engineering precision weighing and
              automation solutions for steel, cement, power, railways, and other
              major industries. ISO 9001:2015 certified, with RDSO and Legal
              Metrology approvals for applicable products, we combine proven
              engineering, customized solutions, and global technology
              collaborations with VEI (Italy) and Kimax (Denmark) to deliver
              accuracy, reliability, and operational excellence.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-[#d2151e] hover:bg-[#ad1018] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition-colors duration-300"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
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

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[540px] overflow-hidden rounded-2xl">
              <img
                src={Ourstoryimg}
                alt="Senlogic weighing and automation solutions"
                loading="lazy"
                className="w-full h-full object-cover object-center "
              />
            </div>

            {/* Decorative Brand Accent */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-l-4 border-b-4 border-[#d2151e] rounded-bl-xl -z-10 hidden md:block" />
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#d2151e]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 py-10 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Amazing Things Happen to Your Business
            </h2>

            <p className="text-white/85 text-sm md:text-base mt-3">
              Let's discuss your weighing and automation requirements.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#d2151e] hover:bg-gray-100 px-7 py-3.5 rounded-md text-sm font-semibold whitespace-nowrap transition-colors duration-300"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
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
      </div>
    </section>
  );
}
