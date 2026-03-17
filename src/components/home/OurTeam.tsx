import Team1 from "@/assets/team1.webp";
import Team2 from "@/assets/team2.webp";
import Team3 from "@/assets/team3.webp";
import Team4 from "@/assets/team4.webp";


import { Facebook, Twitter, Linkedin, } from "lucide-react";

export default function OurTeam() {
    const team = [
        {
            img: Team1,
            name: "Nashid Martines",
            role: "DIRECTOR",
        },
        {
            img: Team2,
            name: "Konne Backfield",
            role: "DESIGNER",
        },
        {
            img: Team3,
            name: "Hackson Willingham",
            role: "DEVELOPER",
        },
        {
            img: Team4,
            name: "Konne Backfield",
            role: "MANAGER",
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Meet Our Team
                    </h2>

                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry has been the industry's standard dummy text ever since
                        when an unknown printer.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-sm bg-white text-center"
                        >

                            {/* Image */}
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-64 object-cover"
                            />

                            {/* Default Card */}
                            <div className="relative p-6 bg-white transition duration-300 group-hover:opacity-0">

                                {/* Triangle */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>

                                <h3 className="text-lg font-semibold text-gray-800">
                                    {member.name}
                                </h3>

                                <p className="text-[#E7232D] text-sm tracking-widest mt-2">
                                    {member.role}
                                </p>
                            </div>

                            {/* Hover Card */}
                            <div className="absolute bottom-0 left-0 w-full bg-[#E7232D] text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">

                                {/* Triangle */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#E7232D] opacity-0 group-hover:opacity-100 transition duration-300">
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {member.name}
                                </h3>

                                <p className="text-sm tracking-widest mt-2">
                                    {member.role}
                                </p>

                                {/* Social Icons */}
                                <div className="flex justify-center gap-3 mt-4">

                                    <span className="border border-white p-2 rounded hover:bg-white hover:text-[#E7232D] cursor-pointer transition">
                                        <Facebook size={14} />
                                    </span>

                                    <span className="border border-white p-2 rounded hover:bg-white hover:text-[#E7232D] cursor-pointer transition">
                                        <Twitter size={14} />
                                    </span>

                                    <span className="border border-white p-2 rounded hover:bg-white hover:text-[#E7232D] cursor-pointer transition">
                                        <Linkedin size={14} />
                                    </span>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}