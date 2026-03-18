import Aboutpageimg1 from "@/assets/Aboutpageimg1.webp";
import FactoryBg from "@/assets/Aboutpageimg2.webp";

export default function OurCompany() {
    return (
        <section
            className="relative py-24 bg-no-repeat bg-right bg-contain"
            style={{ backgroundImage: `url(${FactoryBg})` }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

                {/* Left Image */}
                <div className="relative">
                    <img
                        src={Aboutpageimg1}
                        alt="Company"
                        className="rounded-md shadow-lg"
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">

                        {/* Outer Ring */}
                        <div className="absolute w-14 h-14 md:w-20 md:h-20 bg-[#E7232D] rounded-full animate-pulse"></div>

                        {/* Inner Button */}
                        <a
                            href="https://youtu.be/U4RtS8-EjBw?si=GIzsB8kEpcLOhThl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <button className="relative w-7 h-7 md:w-14 md:h-14 bg-[#E7232D] rounded-full flex items-center justify-center shadow-lg transition">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-5 h-5 md:w-7 md:h-7 ml-1"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>

                        </button>
                        </a>

                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-2xl font-semibold leading-snug text-gray-800">
                        A company involved in{" "}
                        <span className="text-[#E7232D]">
                            service, maintenance
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed text-justify">
                        Senlogic Automation Private Limited a professionally managed company, engaged in the weighing Automation Activities Incorporated in February 2002. A trusted name engaged in the weighing Automation Activities. The company offers a complete range of products for core sectors such as Rail In-motion Weighing Systems, Rail Static Weighing System and On Board Weighing Solution for Earth moving equipments also providing complete weighing solution for steel plants, Cement plants, Power plants etc and other weighing automation from design through implementation to operation and customized product development.
                    </p>

                    {/* Signature */}
                    <div className="mt-8">
                        <p className="text-[#E7232D] italic text-2xl font-semibold">
                            Richard Nixon
                        </p>

                        <h4 className="mt-2 text-lg font-bold text-gray-800">
                            Jone Doe
                        </h4>

                        <p className="text-gray-500">Company Director</p>
                    </div>
                </div>
            </div>
        </section>
    );
}