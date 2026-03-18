import { useState } from "react";
import ImgMain from "@/assets/serivesimg1.webp";
import Img1 from "@/assets/servicesimg2.webp";
import { CheckCheck } from 'lucide-react';

export default function ServiceDetails() {
    const services = [
        "All Products",
        "Onboard Weighing Solution",
        "WHEEL LOADER",
        "EXCAVATOR",
        "DUMPER",
        "TRUCK",
        "GRAPPLE",
        "Articulated Dump Truck",
        "Fork Lift",
        "Off Road Concrete Mixer",
        "Reach Stacker",
        "Industrial Weighing Solution",
        "Metro Rail Wheel Balancing & Weighing System",
        "RAIL IN MOTION",
        "RAIL STATIC",
        "ROAD WEIGH BRIDGE",
        "ROAD WEIGH IN MOTION",
        "RFID UNMANNED WEIGH BRIDGE",
        "Bucket Continuous Weighing System for Clinker",
        "Clinker Wagon Loading System",
        "Compleate Weighing Solution for Steel Plant",
        "Hot metal ladle transfer car weighing system",
        "Hot metal SMS crane weighing system",
        "Hot metal Tarpido ladle car weighing system",
        "Hot Billet weighing system",
        "Wagon Tippler Weighing System",
        "Pusher car weighing system",
        "Quenching car weighing system",
        "Tundish car weighing system",
        "Ladle Turret weighing system"
    ];

    // Active state
    const [active, setActive] = useState("Agricultural Processing");

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6  grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* LEFT CONTENT */}
                <div className="md:col-span-3 space-y-3 order-1 md:order-1">

                    {/* Top Image */}
                    <img
                        src={ImgMain}
                        alt="Agriculture"
                        className="w-full h-[202] md:h-[440px] object-cover rounded-lg"
                    />

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800">
                        SENLOGIC Commitment to Customer Support
                    </h2>
                    {/* Sub-Title */}
                    <h4 className="text-md font-semibold text-gray-800">
                        Remote and On-Site Support
                    </h4>

                    {/* Paragraphs */}
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Senlogic Group All type of weighing & related automations , provides remote and on-site support for our customers throughout the India. Our field technicians are experienced in electronics and software systems and are specially trained to support the complete range of weighing. Our service department aims to be on your site and complete the job within 48 hours of the initial phone call. Whenever possible the team will endeavour to get to you sooner than this.
                    </p>

                    <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Highly experienced service staff
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Dedicated telephone support
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Specialised technical field engineers
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            National network of engineers
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Health and safety compliant
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Training on-site
                        </li>
                    </ul>

                    {/* Gallery */}
                    <div className="grid md:grid-cols-3 gap-6 items-center justify-center">
                        <img src={Img1} className="rounded-lg h-40 object-cover" />
                        <img src={Img1} className="rounded-lg h-40 object-cover" />
                        <img src={Img1} className="rounded-lg h-40 object-cover" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800">
                        Service Contracts and Extended Warranties
                    </h2>
                    {/* Paragraphs */}
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Senlogic Group offers service contracts and extended warranties to help reduce your maintenance costs. Our field technicians are well trained in Weighing systems latest cutting edge technologies and in a wide range of related systems. we can install, service, and repair your systems wherever it is most convenient for you.
                    </p>

                    <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Onsite calibration, servicing and maintenance
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Diagnostics
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Onsite wire ups
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Free over the phone technical support
                        </li>

                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Load cell installation and swap outs
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Onsite training
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Extensive spare parts stock- rapid response
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Extended warranty
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Service contracts
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCheck size={20} className="text-red-500" />
                            Repair and production of replacement parts for most types of on-board weighing systems
                        </li>
                    </ul>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6 order-2 md:order-2">

                    {/* Services List */}
                    <div className="bg-[#F3F4F6] rounded-lg shadow-sm h-[440px] overflow-y-scroll overflow-x-hidden">

                        {services.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActive(item)}
                                className={`px-4 py-3 border mb-2 rounded cursor-pointer text-sm transition-all duration-300 ${active === item
                                        ? "bg-[#d2151e] text-white"
                                        : "bg-gray-50 text-gray-700 hover:bg-gray-200 hover:translate-x-1"
                                    }`}
                            >
                                {item}
                            </div>
                        ))}

                    </div>

                    {/* Brochure Box */}
                    <div className="bg-[#d2151e] text-white p-6 rounded-lg">
                        <h3 className="font-semibold mb-4">
                            Get your brochures
                        </h3>

                        <button className="w-full bg-black py-2 text-sm mb-3 transition">
                            COMPANY BROCHURES ⬇
                        </button>

                        <button className="w-full bg-black py-2 text-sm transition">
                            COMPANY INFO ⬇
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}