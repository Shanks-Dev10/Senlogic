import Slider1 from "@/assets/senlogic home page banner.png";

export default function HeroBanner() {
  return (
    <section className="w-full">
      <div className="relative isolate min-h-[450px] md:min-h-[550px] lg:min-h-[600px] overflow-hidden flex items-center">
        {/* Background Image */}
        <img
          src={Slider1}
          alt="Senlogic industrial weighing and automation solutions"
          className="absolute inset-0 w-full h-full object-cover object-center -z-20"
        />

        {/* Dark Image Overlay */}
        <div className="absolute inset-0 bg-black/70 -z-10"></div>

        {/* Hero Content */}
        <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1  xl:grid-cols-2 items-center gap-8">
            {/* Text Content */}
            <div>
              <h1 className="text-white text-3xl sm:text-4xl md:text-[42px] lg:text-[50px] lg:leading-[60px] font-bold  mb-6 text-center md:text-left">
                Precision Weighing.
                <span className="block">Intelligent Automation.</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg  mb-8 text-center md:text-left">
                Senlogic delivers advanced weighing and automation solutions for
                railways, onboard equipment, and industries, ensuring accurate
                measurement and efficient operations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href="#core-sectors"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Explore Our Solutions
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
