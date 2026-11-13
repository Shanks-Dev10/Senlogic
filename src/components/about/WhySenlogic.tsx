import React from "react";
import { ArrowUpRight, Factory, Pickaxe, Zap, Building2, Route } from "lucide-react";

const industries = [
  {
    number: "01",
    title: "STEEL & METALS",
    description: "Ladle cars, billets and process weighing",
    icon: Factory,
    color: "#00AFA9",
    light: "#E9FAF8",
    gradient: "from-[#00AFA9] to-[#087F89]",
  },
  {
    number: "02",
    title: "CEMENT",
    description: "Plant, material handling and vehicle weighing",
    icon: Building2,
    color: "#F59A23",
    light: "#FFF5E8",
    gradient: "from-[#F59A23] to-[#D86C0B]",
  },
  {
    number: "03",
    title: "MINING & COAL",
    description: "Dumper, road and rail weighing",
    icon: Pickaxe,
    color: "#3C9474",
    light: "#EAF7F1",
    gradient: "from-[#3C9474] to-[#21715B]",
  },
  {
    number: "04",
    title: "POWER",
    description: "Industrial and material-flow applications",
    icon: Zap,
    color: "#214A92",
    light: "#EAF0FB",
    gradient: "from-[#214A92] to-[#102C50]",
  },
  {
    number: "05",
    title: "INFRASTRUCTURE",
    description: "Highway WIM and traffic classification",
    icon: Route,
    color: "#7B61D1",
    light: "#F1EEFF",
    gradient: "from-[#7B61D1] to-[#4B3A9E]",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F8F2] py-20 sm:py-24 lg:py-28">
      
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#00AFA9]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#214A92]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-14 max-w-3xl">
          
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#00AFA9]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#53677D]">
              Cross-Sector Experience
            </span>
          </div>

          <h2 className="max-w-2xl text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#102C50] sm:text-[40px] lg:text-[46px]">
            Industries We{" "}
            <span className="text-[#214A92]">Serve</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#536171] sm:text-[15px]">
            Engineering solutions built for demanding industrial environments,
            where precision, reliability and operational efficiency matter.
          </p>
        </div>

        {/* =====================================================
            INDUSTRY GRID
        ===================================================== */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            /*
              Layout:
              01 → 2 columns
              02 → 2 columns
              03 → 2 columns
              04 → 2 columns
              05 → centered wide card
            */

            const gridClass =
              index === 4
                ? "sm:col-span-2 lg:col-span-2 lg:col-start-3"
                : "lg:col-span-2";

            return (
              <div
                key={industry.number}
                className={`group relative ${gridClass}`}
              >

                {/* Card */}
                <div
                  className="
                    relative
                    h-full
                    min-h-[245px]
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-[#DDE4E9]
                    bg-white
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_45px_rgba(16,44,80,0.12)]
                  "
                >

                  {/* Top Gradient Strip */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${industry.gradient}`}
                  />

                  {/* Decorative Circle */}
                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-36
                      w-36
                      rounded-full
                      opacity-70
                      transition-transform
                      duration-700
                      group-hover:scale-125
                    "
                    style={{
                      background: industry.light,
                    }}
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      text-[10px]
                      font-bold
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:scale-110
                    "
                    style={{
                      backgroundColor: industry.light,
                      color: industry.color,
                    }}
                  >
                    {industry.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      relative
                      mb-10
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-[-4deg]
                    "
                    style={{
                      backgroundColor: industry.light,
                      color: industry.color,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <p
                      className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: industry.color }}
                    >
                      Industry
                    </p>

                    <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#102C50] transition-colors duration-300 group-hover:text-[#214A92]">
                      {industry.title}
                    </h3>

                    <p className="mt-2 max-w-[270px] text-[13px] leading-6 text-[#536171]">
                      {industry.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-9
                      w-9
                      translate-y-2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#DDE4E9]
                      bg-white
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                    style={{
                      color: industry.color,
                    }}
                  >
                    <ArrowUpRight size={17} />
                  </div>

                  {/* Bottom Hover Line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-6
                      right-6
                      h-[2px]
                      origin-left
                      scale-x-0
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                    style={{
                      backgroundColor: industry.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>


      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}
      <style>{`
        @keyframes industryReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: industryReveal 0.7s ease both;
        }

        .group:nth-child(1) {
          animation-delay: 0.05s;
        }

        .group:nth-child(2) {
          animation-delay: 0.12s;
        }

        .group:nth-child(3) {
          animation-delay: 0.19s;
        }

        .group:nth-child(4) {
          animation-delay: 0.26s;
        }

        .group:nth-child(5) {
          animation-delay: 0.33s;
        }

        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesWeServe;