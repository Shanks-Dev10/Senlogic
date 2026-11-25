import {
  Wrench,
  Scale,
  Headphones,
  Settings,
  Cpu,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Preventive Maintenance & Annual Maintenance Contracts (AMC)",
    description:
      "Proactive care is the key to avoiding unexpected downtime. Our customized AMC packages include scheduled inspections, load cell diagnostics, structural checks, and thorough cleaning to detect and resolve minor wear before it escalates into operational failure.",
    icon: Wrench,
  },

  {
    number: "02",
    title: "Calibration & Legal Metrology Compliance",
    description:
      "We provide traceable calibration services using certified standard test weights to ensure your equipment meets both internal quality standards and strict statutory regulations. Our team handles all necessary documentation and coordination for Legal Metrology stamping and verification.",
    icon: Scale,
  },

  {
    number: "03",
    title: "Rapid Breakdown Support & Field Service",
    description:
      "When an unexpected issue arises, every minute of downtime impacts your bottom line. Backed by a widespread network of factory-trained service engineers, we offer rapid on-site diagnostics, troubleshooting, and repairs to get your operations back online swiftly.",
    icon: Headphones,
  },

  {
    number: "04",
    title: "Genuine Spare Parts Management",
    description:
      "Using substandard components compromises weighing accuracy and voids warranties. We maintain a comprehensive inventory of OEM-certified spare parts—including load cells, junction boxes, digital indicators, and mounting hardware—ensuring fast dispatch and guaranteed compatibility.",
    icon: Settings,
  },

  {
    number: "05",
    title: "System Retrofits & Modernization",
    description:
      "Extend the lifespan of your existing mechanical or aging electronic scales without the cost of a full replacement. We offer seamless upgrades, including digital load cell conversions, automated weighbridge software integration, and IoT-enabled remote monitoring solutions.",
    icon: Cpu,
  },

  {
    number: "06",
    title: "Operator Training & Technical Consultation",
    description:
      "Proper daily handling significantly reduces equipment wear and human error. We conduct hands-on training sessions for your operators and maintenance staff covering daily zero-checks, safe loading practices, and basic troubleshooting.",
    icon: Users,
  },
];

export default function CoreServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 xl:px-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-5">

            <span className="h-[2px] w-8 bg-[#00AFA9] sm:w-16" />

            <span className="text-[10px] font-bold tracking-[0.16em] text-[#00AFA9] sm:text-xs sm:tracking-[0.2em]">
              OUR CORE AFTER-SALES SERVICES
            </span>

            <span className="h-[2px] w-8 bg-[#00AFA9] sm:w-16" />

          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#173A63] sm:text-4xl lg:text-5xl">
            Our Core After-Sales Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Comprehensive support designed to maintain accuracy, reduce
            downtime and extend the operational life of your weighing systems.
          </p>

        </div>

        {/* ================= SERVICE GRID ================= */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00AFA9] hover:shadow-xl sm:p-7"
              >

                {/* Background Number */}
                <span className="pointer-events-none absolute right-4 top-2 text-6xl font-black text-slate-50 transition-colors duration-300 group-hover:text-[#E8F8F7]">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#DDF8F6] text-[#00AFA9] transition-colors duration-300 group-hover:bg-[#00AFA9] group-hover:text-white">
                  <Icon size={26} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-lg font-bold leading-7 text-[#173A63] sm:text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                  <span className="text-xs font-bold uppercase tracking-wider text-[#00AFA9]">
                    Senlogic Service
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-[#173A63] transition-colors duration-300 group-hover:bg-[#F59A23] group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}