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
      line1: "No:52,Pudupedu village, Nandambakkam",
      line2: "Post, kunrathur( Via) Chennai - 600 069.",
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

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
          {/* LEFT - FORM */}
          <div className="bg-white md:p-8 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Send Message Us</h2>

            <form className="space-y-4">
              {/* FIRST NAME / LAST NAME */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1">
                    First Name *
                  </label>

                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full h-10  border border-[#666] px-3 text-[12px] text-white placeholder:text-[#888] outline-none focus:border-[#D2151E] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold mb-1">
                    Last Name *
                  </label>

                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full h-10  border border-[#666] px-3 text-[12px] text-white placeholder:text-[#888] outline-none focus:border-[#D2151E] transition"
                  />
                </div>
              </div>

              {/* EMAIL / PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1">
                    Email *
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full h-10  border border-[#666] px-3 text-[12px] text-white placeholder:text-[#888] outline-none focus:border-[#D2151E] transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold mb-1">
                    Phone No *
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone No"
                    required
                    className="w-full h-10  border border-[#666] px-3 text-[12px] text-white placeholder:text-[#888] outline-none focus:border-[#D2151E] transition"
                  />
                </div>
              </div>

              {/* COMPANY NAME */}
              <div>
                <label className="block text-[11px] font-semibold mb-1">
                  Company Name *
                </label>

                <input
                  name="companyName"
                  type="text"
                  placeholder="Company Name"
                  required
                  className="w-full h-10  border border-[#666] px-3 text-[12px] text-white placeholder:text-[#888] outline-none focus:border-[#D2151E] transition"
                />
              </div>

              {/* PRODUCT TITLE */}
              <div className="pt-2">
                <p className="text-[12px] font-semibold mb-4">
                  I need information on the following products:
                </p>

                {/* ================= RAILWAY ================= */}
                <div className="mb-5">
                  <h3 className="text-[12px] font-bold  mb-3">
                    Railway Weighing Systems
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Rail Static Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Rail Static Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Wagon Tippler Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Wagon Tippler Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Portable Rail in Motion Cum Rail Static Weighing System – S Pass Weighing"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>
                        Portable Rail in Motion Cum Rail Static Weighing System
                        – S Pass Weighing
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Rail In-Motion Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Rail In-Motion Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Wheel & Axle Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Wheel & Axle Weighing System</span>
                    </label>
                  </div>
                </div>

                {/* ================= ON BOARD ================= */}
                <div className="mb-5">
                  <h3 className="text-[12px] font-bold  mb-3">
                    On-Board Weighing Systems
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Wheel Loader Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Wheel Loader Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Excavator Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Excavator Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Truck On-Board / Dumper Load Monitoring System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>
                        Truck On-Board / Dumper Load Monitoring System
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Forklift Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Forklift Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Grubble Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Grubble Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Road Weigh Bridges"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Road Weigh Bridges</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Unmanned Weigh Bridge System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Unmanned Weigh Bridge System</span>
                    </label>
                  </div>
                </div>

                {/* ================= INDUSTRIAL ================= */}
                <div className="mb-5">
                  <h3 className="text-[12px] font-bold  mb-3">
                    Industrial Applications
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Online Hot Billet Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Online Hot Billet Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Ladle Car Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Ladle Car Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Hot Metal SMS Crane Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Hot Metal SMS Crane Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Ladle Turret Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Ladle Turret Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Torpedo Ladle Car Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Torpedo Ladle Car Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Pusher Car Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Pusher Car Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Quenching Car Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Quenching Car Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="Tundish Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>Tundish Weighing System</span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                      <input
                        type="checkbox"
                        name="products"
                        value="EOT Crane Weighing System"
                        className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                      />
                      <span>EOT Crane Weighing System</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-[11px] font-semibold mb-1">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter your message here"
                  className="w-full  border border-[#666] px-3 py-3 text-[12px] text-white placeholder:text-[#888] outline-none resize-y focus:border-[#D2151E] transition"
                />
              </div>

              {/* PRIVACY */}
              <label className="flex items-start gap-2 cursor-pointer text-[10px] leading-relaxed">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-[2px] h-3 w-3 shrink-0 accent-[#D2151E]"
                />

                <span>
                  I have read and accepted the privacy policy of Senlogic
                  Automation Private Limited. *
                </span>
              </label>

              {/* SUBMIT */}
              <button
                type="submit"
                className="bg-[#D2151E] hover:bg-[#b91018] px-7 py-3 text-[12px] font-bold text-white uppercase transition-all duration-300"
              >
                Send Request
              </button>
            </form>
          </div>

          {/* RIGHT - GOOGLE MAP */}
          <div className="rounded-lg  shadow-sm flex flex-col gap-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14961.623583430777!2d80.20002790961729!3d13.023714553345368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672aca3b1a91%3A0x2532a78faa274768!2sSenlogic%20Automation%20Private%20Limited%2C%20Chennai!5e1!3m2!1sen!2sin!4v1773144886758!5m2!1sen!2sin"
              className="border-0 w-full xl:h-[600px]  lg:h-[450px] md:h-[340px] h-[400px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="  grid grid-cols-1  md:grid-cols-2 gap-8">
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
                    <p className="text-gray-500 text-sm">{item.line1}</p>
                    <p className="text-gray-500 text-sm">{item.line2}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
