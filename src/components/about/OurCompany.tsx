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
                        className="rounded-lg shadow-lg"
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">

                        {/* Outer Ring */}
                        <div className="absolute w-28 h-28 bg-[#E7232D] rounded-full animate-pulse"></div>

                        {/* Inner Button */}
                        <button className="relative w-20 h-20 bg-[#E7232D] rounded-full flex items-center justify-center shadow-lg hover:scale-50 transition">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-10 h-10 ml-1"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>

                        </button>

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

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley.
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