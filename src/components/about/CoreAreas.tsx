import {
  Factory,
  Scale,
  Wrench,
  Network,
  Gauge,
  ClipboardCheck,
} from "lucide-react";

export default function CoreAreas() {
  const expertise = [
    {
      title: "Industrial Automation",
      description:
        "PLC-based controls, process monitoring and equipment automation.",
      color: "#214A92",
      icon: Factory,
    },
    {
      title: "Precision Weighing",
      description:
        "Static, dynamic, onboard and specialized weighing systems.",
      color: "#00AFA9",
      icon: Scale,
    },
    {
      title: "Customized Engineering",
      description:
        "Application-specific solutions for site and process conditions.",
      color: "#F59A23",
      icon: Wrench,
    },
    {
      title: "System Integration",
      description:
        "Sensors, load cells, instrumentation, controls and software.",
      color: "#3C9474",
      icon: Network,
    },
    {
      title: "Process Optimization",
      description:
        "Improved material accountability and operational efficiency.",
      color: "#214A92",
      icon: Gauge,
    },
    {
      title: "Project Execution",
      description:
        "Engineering coordination, installation and commissioning support.",
      color: "#00AFA9",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F8F2] py-12 sm:py-14 lg:py-20">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#38A946]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#214A92]/10 blur-3xl sm:h-96 sm:w-96" />


      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">


        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-9 max-w-3xl sm:mb-11 lg:mb-12">

          {/* Section Label */}

          <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">

            <span className="h-[3px] w-10 rounded-full bg-[#00AFA9] sm:w-14" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#53677D]
                sm:text-[10px]
                sm:tracking-[0.18em]
              "
            >
              What We Do
            </span>

          </div>


          {/* Main Heading */}

          <h2
            className="
              text-[30px]
              font-semibold
              leading-[1.12]
              tracking-[-0.025em]
              text-[#102C50]
              sm:text-[36px]
              md:text-[40px]
              lg:text-[44px]
            "
          >
            Core Areas of Expertise
          </h2>

        </div>


        {/* ===================================================
            EXPERTISE GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-5
          "
        >

          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  min-h-[175px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#DDE4E9]
                  bg-white
                  p-5
                  pl-6
                  shadow-[0_7px_24px_rgba(23,54,111,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(23,54,111,0.09)]
                  sm:min-h-[185px]
                  sm:p-6
                  sm:pl-7
                "
              >

                {/* =================================================
                    LEFT ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[4px]
                    sm:w-[5px]
                  "
                  style={{
                    backgroundColor: item.color,
                  }}
                />


                {/* =================================================
                    TOP ROW
                ================================================== */}

                <div className="flex items-start justify-between">

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      sm:h-11
                      sm:w-11
                    "
                    style={{
                      backgroundColor: `${item.color}12`,
                      color: item.color,
                    }}
                  >

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />

                  </div>


                  {/* Number */}

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wide
                    "
                    style={{
                      color: item.color,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    mt-5
                    text-[17px]
                    font-semibold
                    leading-tight
                    tracking-[-0.01em]
                    text-[#102C50]
                    sm:text-[18px]
                    lg:text-[19px]
                  "
                >
                  {item.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mt-2
                    max-w-md
                    text-[13px]
                    leading-6
                    text-[#536171]
                    sm:text-[14px]
                  "
                >
                  {item.description}
                </p>


                {/* =================================================
                    HOVER LINE
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                  style={{
                    backgroundColor: item.color,
                  }}
                />

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}