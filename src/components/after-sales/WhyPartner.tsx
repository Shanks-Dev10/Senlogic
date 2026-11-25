import {
  HardHat,
  FileCheck,
  Activity,
  TrendingDown,
} from "lucide-react";

const benefits = [
  {
    title: "Factory-Trained Engineers",
    description:
      "Our technicians possess deep domain expertise across industrial and commercial weighing technologies.",
    icon: HardHat,
  },

  {
    title: "Audit-Ready Documentation",
    description:
      "Receive comprehensive calibration certificates, service logs, and compliance reports tailored for ISO, GMP, and statutory audits.",
    icon: FileCheck,
  },

  {
    title: "Data-Driven Diagnostics",
    description:
      "We utilize advanced diagnostic tools to evaluate load cell health, signal stability, and environmental interference with pinpoint accuracy.",
    icon: Activity,
  },

  {
    title: "Lifecycle Cost Reduction",
    description:
      "Through timely preventive care and genuine spares, we help lower your total cost of ownership while extending equipment longevity.",
    icon: TrendingDown,
  },
];

export default function WhyPartner() {
  return (
    <section className="relative overflow-hidden bg-[#173A63] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 xl:px-24">

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[40px] border-[#214A92]/50" />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-5">

            <span className="h-[2px] w-8 bg-[#00AFA9] sm:w-16" />

            <span className="text-[10px] font-bold tracking-[0.16em] text-[#5DE0D8] sm:text-xs sm:tracking-[0.2em]">
              WHY PARTNER WITH OUR SERVICE TEAM?
            </span>

            <span className="h-[2px] w-8 bg-[#00AFA9] sm:w-16" />

          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Partner with Our Service Team?
          </h2>

        </div>

        {/* ================= BENEFITS ================= */}
        <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`group px-4 text-center sm:px-6 lg:px-8 ${
                  index !== benefits.length - 1
                    ? "lg:border-r lg:border-white/20"
                    : ""
                }`}
              >

                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#00AFA9] text-[#5DE0D8] transition-all duration-300 group-hover:bg-[#00AFA9] group-hover:text-white">
                  <Icon size={29} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mx-auto mt-5 max-w-[220px] text-lg font-bold leading-6 text-white sm:text-xl">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-[280px] text-sm leading-6 text-slate-300">
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}