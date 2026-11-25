import { ArrowRight, Award, CheckCircle2 } from "lucide-react";

import type { TeamMember } from "@/data/teamMembers";

interface TeamInnerPageProps {
  member: TeamMember;
}

export default function TeamInnerPage({ member }: TeamInnerPageProps) {
  const responsibilities = [
    {
      heading: "Strategic Foresight",
      para: "Anticipating market shifts to keep our organization and clients ahead of the curve.",
    },
    {
      heading: "Accountability",
      para: "Taking ownership of our commitments to shareholders, employees, and customers.",
    },
    {
      heading: "Empowerment",
      para: "Cultivating a culture where middle management and teams are supported to perform at their best.",
    },
    {
      heading: "Integrity",
      para: "Operating with transparency and ethical standards in every business decision.",
    },
  ];
  return (
    <main className="w-full  bg-white">
      <section className="  bg-[#F3F9FC] max-w-7xl mx-auto px-4 py-12">
        <div className="mx-auto grid lg:grid-cols-2 gap-7 items-center">
          {/* IMAGE */}

          <div className=" order-2 lg:order-1 ">
            <img
              src={member.img}
              alt={member.name}
              className=" inset-0 h-full w-full object-cover object-top rounded-md"
            />
          </div>

          {/* CONTENT */}

          <div className="order-1 flex items-center lg:order-2 l">
            <div className="w-full max-w-2xl">
              {/* Label */}

              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#029549]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#029549]">
                  Our Leadership
                </span>
              </div>

              {/* Name */}

              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#173156] sm:text-5xl lg:text-6xl">
                {member.name}
              </h1>

              {/* Role */}

              <h2 className="mt-4 text-xl font-bold leading-tight text-[#029549] sm:text-2xl md:text-3xl">
                {member.role}
              </h2>

              {/* Intro */}

              <p className="mt-6 mb-2 max-w-xl text-[14px] leading-[25px]  text-gray-600 ">
                {member.intro}
              </p>
              <p className=" max-w-xl text-[14px] leading-[25px]  text-gray-600 ">
                {member.intro2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESPONSIBILITIES
      ===================================================== */}

      <section className="bg-[#F7F9FB] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E7232D]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#029549]">
                Core Values
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-[#173156] sm:text-4xl">
              Our Leadership Philosophy
            </h2>
          </div>

          {/* Cards */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#029549] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#173156] text-white transition-colors duration-300 group-hover:bg-[#029549]">
                  <CheckCircle2 size={21} />
                </div>

                <h3 className="mt-5 font-bold text-[#173156]">
                  {item.heading}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          QUOTE / BRAND SECTION
      ===================================================== */}

      <section className="bg-white px-5 py-14 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-[#173156] px-6 py-10 text-center sm:px-10 sm:py-14">
            <Award size={36} className="mx-auto text-[#029549]" />

            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Leadership That Drives Progress
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Building reliable solutions, strengthening customer relationships
              and creating sustainable growth through innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#071B3A]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#029549]">
              Senlogic Automation
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Building the Future of{" "}
              <span className="text-[#029549]">Industrial Automation</span>
            </h2>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#E7232D] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-[#173156] sm:w-fit"
          >
            Contact Our Team
            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
