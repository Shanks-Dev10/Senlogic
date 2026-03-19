import Aboutpageimg1 from "@/assets/Aboutpageimg1.webp";
import FactoryBg from "@/assets/Aboutpageimg2.webp";
import { CheckCheck } from 'lucide-react';

export default function OurCompany() {
    return (
        <section
            className="relative py-24 bg-no-repeat bg-right bg-contain"
            style={{ backgroundImage: `url(${FactoryBg})` }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start px-3">

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
                <div className="items-start">
                    <h2 className="text-2xl font-semibold leading-snug text-gray-800">
                        A company involved in{" "}
                        <span className="text-[#E7232D]">
                            service, maintenance
                        </span>
                    </h2>

                    <p className="mt-6 text-sm text-gray-600 leading-relaxed text-justify">
                        Incorporated in 2002, Senlogic India Private Limited is a professionally managed company engaged in the Design, Development and Manufacture of Weighing Automation Systems for the entire gamut of Industrial applications viz. Steel, Cement, Coal, Power, Earthmovers, Railways, Roadways etc.  The weighing systems that we offer are both Generic and Custom Designed. The company is ISO Certified-9001-2015 and the products are approved by RDSO and other Government Legal Metrology Departments.
                    </p>

                </div>
            </div>

            {/* Vision Mission Values */}
            <div className="max-w-7xl mx-auto px-3 mt-16 grid md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition duration-300 border-t-4 border-[#E7232D]">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Our Vision
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        To be the Leading Global Supplier of Precision Automated Industrial Weighing Systems that are Reliable, Guarantee Compliance and Optimize Efficiency through Innovation and Cutting Edge Technology
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition duration-300 border-t-4 border-[#E7232D]">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Our Mission
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        A Company Designing and Manufacturing Quality Industrial Weighing Systems which are Precise, Reliable and Robust for Optimizing Customer Operations
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition duration-300 border-t-4 border-[#E7232D]">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        Our Values
                    </h3>
                    <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Excellence
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Integrity
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Innovation / Creativity
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Sustainable Development
                        </li>
                    </ul>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Senlogic offers a complete range of products which are Static Weighing Systems and In-Motion Weighing Systems.
                    </p>
                </div>

            </div>
        </section>
    );
}