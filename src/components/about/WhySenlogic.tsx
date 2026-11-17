import {
  ArrowUpRight,
  Factory,
  Settings2,
  Award,
  Workflow,
  Handshake,
} from "lucide-react";
import whysenlogic from "@/assets/why-choose-us.png";

const reasons = [
  {
    number: "01",
    title: "Broad product portfolio",
    description:
      "From rail and road weighing to mobile and process applications.",
    icon: Factory,
    color: "#00AFA9",
    light: "#E8FAF8",
  },
  {
    number: "02",
    title: "Customized solutions",
    description:
      "Engineering tailored to operating conditions and requirements.",
    icon: Settings2,
    color: "#214A92",
    light: "#EAF0FB",
  },
  {
    number: "03",
    title: "Industry experience",
    description: "More than two decades serving demanding industrial sectors.",
    icon: Award,
    color: "#F59A23",
    light: "#FFF4E5",
  },
  {
    number: "04",
    title: "Integrated delivery",
    description: "Design, components, controls, commissioning, and support.",
    icon: Workflow,
    color: "#3C9474",
    light: "#EAF7F1",
  },
  {
    number: "05",
    title: "Customer partnership",
    description: "Focused on reliability, responsiveness and long-term value.",
    icon: Handshake,
    color: "#7B61D1",
    light: "#F1EEFF",
  },
];

export default function WhySenlogic() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8F2] py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#00AFA9]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#214A92]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#00AFA9]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#53677D]">
              A Practical Engineering Partner
            </span>
          </div>

          <h2 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#102C50] sm:text-[52px] lg:text-[64px]">
            Why{" "}
            <span className="relative text-[#214A92]">
              Senlogic
              <span className="absolute -bottom-2 left-0 h-[4px] w-[55%] rounded-full bg-[#00AFA9]" />
            </span>
            ?
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#536171] sm:text-[16px]">
            Engineering solutions designed around real industrial challenges —
            combining product expertise, application knowledge and dependable
            execution.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16 items-center">
          {/* Left Visual */}
          <div className="sticky top-24">
            <img src={whysenlogic} alt="why-senlogic" className="rounded-lg" />
          </div>

          {/* Right Cards */}
          <div className="relative">
            {/* Timeline */}
            <div className="absolute bottom-8 left-[28px] top-8 hidden w-px bg-gradient-to-b from-[#00AFA9] via-[#DDE4E9] to-transparent sm:block" />

            <div className="space-y-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div key={reason.number} className="group relative">
                    <div className="relative overflow-hidden rounded-[26px] border border-[#DDE4E9] bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_rgba(16,44,80,0.12)] sm:p-6">
                      {/* Hover glow */}
                      <div
                        className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100"
                        style={{
                          backgroundColor: `${reason.color}18`,
                        }}
                      />

                      <div className="relative flex gap-4 sm:gap-6">
                        {/* Number */}
                        <div className="relative shrink-0">
                          <div
                            className="flex h-14 w-14 items-center justify-center rounded-2xl text-[11px] font-bold transition-all duration-500 group-hover:scale-105"
                            style={{
                              backgroundColor: reason.light,
                              color: reason.color,
                            }}
                          >
                            {reason.number}
                          </div>

                          <div
                            className="absolute -right-[7px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#F5F8F2] sm:block"
                            style={{
                              backgroundColor: reason.color,
                            }}
                          />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                                style={{
                                  backgroundColor: reason.light,
                                  color: reason.color,
                                }}
                              >
                                <Icon size={20} strokeWidth={1.7} />
                              </div>

                              <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#102C50] sm:text-[18px]">
                                {reason.title}
                              </h3>
                            </div>

                            <div
                              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DDE4E9] transition-all duration-500 group-hover:translate-x-1 sm:flex"
                              style={{
                                color: reason.color,
                              }}
                            >
                              <ArrowUpRight size={17} />
                            </div>
                          </div>

                          <p className="mt-3 text-[13px] leading-6 text-[#5D6976] sm:text-[14px]">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
