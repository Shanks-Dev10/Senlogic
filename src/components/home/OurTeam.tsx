import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { teamMembers } from "@/data/teamMembers";

export default function OurTeam() {
  return (
    <section className="bg-[#F7F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================================
            SECTION HEADING
        ================================= */}

        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">

          <h2 className="text-3xl font-bold leading-tight text-[#173156] md:text-4xl lg:text-[42px]">
            Meet our Top Management Team
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#029549]" />

          <p className="mt-5 text-base leading-7 text-gray-600">
            Our Top Management Team brings decades of combined experience,
            strategic insight, and operational excellence. Guided by a shared
            commitment to innovation and customer success, our leaders steer
            the organization toward long-term growth while maintaining the
            highest standards of corporate governance.
          </p>

        </div>


        {/* ================================
            TEAM GRID
        ================================= */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {teamMembers.map((member) => (

            <div
              key={member.id}
              className="group relative overflow-hidden rounded-lg bg-white text-center shadow-sm"
            >

              {/* ================================
                  IMAGE
              ================================= */}

              <img
                src={member.img}
                alt={member.name}
                className="h-64 w-full object-cover"
              />


              {/* ================================
                  DEFAULT CARD
              ================================= */}

              <div className="relative bg-white p-6 transition duration-300 group-hover:opacity-0">

                {/* Triangle */}

                <div className="absolute -top-3 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white" />

                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>

              </div>


              {/* ================================
                  HOVER CARD
              ================================= */}

              <div className="absolute bottom-0 left-0 w-full translate-y-full bg-[#E7232D] p-6 text-white transition-transform duration-500 ease-in-out group-hover:translate-y-0">

                {/* Triangle */}

                <div className="absolute -top-3 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#E7232D]" />


                <h3 className="text-lg font-semibold">
                  {member.name}
                </h3>


                <p className="mt-2 text-sm leading-5 tracking-wide">
                  {member.role}
                </p>


                {/* ================================
                    SOCIAL ICONS
                ================================= */}

                <div className="mt-4 flex justify-center gap-3">

                  <span className="cursor-pointer rounded border border-white p-2 transition hover:bg-white hover:text-[#E7232D]">
                    <Facebook size={14} />
                  </span>

                  <span className="cursor-pointer rounded border border-white p-2 transition hover:bg-white hover:text-[#E7232D]">
                    <Twitter size={14} />
                  </span>

                  <span className="cursor-pointer rounded border border-white p-2 transition hover:bg-white hover:text-[#E7232D]">
                    <Linkedin size={14} />
                  </span>

                </div>


                {/* ================================
                    VIEW PROFILE
                ================================= */}

                <Link
                  to={`/team/${member.id}`}
                  className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 text-xs font-semibold transition hover:bg-white hover:text-[#E7232D]"
                >
                  View Profile

                  <ArrowRight size={14} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}