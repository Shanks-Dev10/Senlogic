import BannerImg from "@/assets/home-banner.webp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Hourglass, ChevronRight } from "lucide-react";

export default function Contact() {
    const contactData = [
        {
            icon: MapPin,
            title: "ADDRESS",
            line1: "123 West Street, Melbourne",
            line2: "Victoria 3000 Australia",
        },
        {
            icon: Mail,
            title: "EMAIL",
            line1: "marketing@senlogicgroup.com",
            line2: "www.senlogicgroup.com",
        },
        {
            icon: Phone,
            title: "PHONE",
            line1: "+91 93800 18943",
        },
        {
            icon: Hourglass,
            title: "Office Hours",
            line1: "Mon To Sat – 09.00–6.00",
            line2: "Sunday – Close",
        },
    ];

    return (
        <>
            <Header />
            <section className="relative h-[30vh]">
                {/* BACKGROUND IMAGE */}
                <img
                    src={BannerImg}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60" />

                {/* CONTENT */}
                <div className="relative z-10 flex items-center h-full w-full max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between w-full gap-4">
                        {/* Title */}
                        <h1 className="text-white text-xl text-center md:text-start sm:text-2xl md:text-3xl font-bold leading-tight  break-words">
                            Contact Us
                        </h1>

                        {/* Breadcrumb */}
                        <div className="flex flex-wrap items-center justify-center gap-1 text-xs sm:text-sm text-white">
                            <Link to="/" className="hover:text-[#d2151e]">
                                Home
                            </Link>
                            <ChevronRight size={14} />
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* Inforamtion */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {contactData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white border rounded-lg p-8 text-center hover:shadow-md transition"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <Icon size={40} className="text-[#E7232D]" />
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>

                                {/* Text */}
                                <p className="text-gray-500 text-sm">
                                    {item.line1}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {item.line2}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 grid-cols-1 gap-10">

                    {/* LEFT - FORM */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6">
                            Send Message Us
                        </h2>

                        <form className="space-y-4">

                            {/* Row 1 */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border rounded px-4 py-3 text-sm outline-none focus:border-[#E7232D]"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email Id"
                                    className="border rounded px-4 py-3 text-sm outline-none focus:border-[#E7232D]"
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="border rounded px-4 py-3 text-sm outline-none focus:border-[#E7232D]"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="border rounded px-4 py-3 text-sm outline-none focus:border-[#E7232D]"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                rows={5}
                                placeholder="Your Message..."
                                className="w-full border rounded px-4 py-3 text-sm outline-none focus:border-[#E7232D]"
                            ></textarea>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#D2151E] text-white py-3 rounded font-medium hover:bg-[#f20c13] transition"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                    {/* RIGHT - GOOGLE MAP */}
                    <div className="rounded-lg overflow-hidden shadow-sm h-[450px]">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14961.623583430777!2d80.20002790961729!3d13.023714553345368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672aca3b1a91%3A0x2532a78faa274768!2sSenlogic%20Automation%20Private%20Limited%2C%20Chennai!5e1!3m2!1sen!2sin!4v1773144886758!5m2!1sen!2sin"
                            className="border-0 w-full xl:h-[600px] lg:h-[450px] md:h-[340px] h-[400px]"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}