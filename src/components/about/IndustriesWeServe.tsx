export default function IndustriesWeServe() {
  const industries = [
    {
      title: "STEEL & METALS",
      description: "Ladle cars, billets and process weighing",
      color: "#00AFA9",
    },
    {
      title: "CEMENT",
      description: "Plant, material handling and vehicle weighing",
      color: "#F59A23",
    },
    {
      title: "MINING & COAL",
      description: "Dumper, road and rail weighing",
      color: "#3C9474",
    },
    {
      title: "POWER",
      description: "Industrial and material-flow applications",
      color: "#214A92",
    },
    {
      title: "INFRASTRUCTURE",
      description: "Highway WIM and traffic classification",
      color: "#00AFA9",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F8F2] py-14 sm:py-16 lg:py-20 xl:py-24">

      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-72 w-72 rounded-full bg-[#38A946]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-[#214A92]/10 blur-3xl sm:h-96 sm:w-96" />


      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">


        {/* ================= HEADER ================= */}

        <div className="mb-8 sm:mb-10 lg:mb-12">

          {/* Small Label */}

          <div className="mb-4 flex items-center gap-3 sm:gap-4">

            <span className="h-[3px] w-9 rounded-full bg-[#00AFA9] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#214A92] sm:text-[10px] sm:tracking-[0.2em]">
              Cross-Sector Experience
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
            Industries We Serve
          </h2>

        </div>


        {/* ================= INDUSTRIES GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-6
          "
        >

          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="
                group
                relative
                min-h-[155px]
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
                sm:min-h-[170px]
                sm:p-6
                sm:pl-7
                lg:min-h-[175px]
              "
            >

              {/* ================= LEFT COLOR BAR ================= */}

              <div
                className="absolute left-0 top-0 h-full w-1 sm:w-[4px]"
                style={{
                  backgroundColor: industry.color,
                }}
              />


              {/* ================= TOP ROW ================= */}

              <div className="flex items-center justify-between">

                {/* Category Number */}

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    sm:text-[10px]
                  "
                  style={{
                    color: industry.color,
                  }}
                >
                  Industry
                </span>


                {/* Number */}

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    text-[10px]
                    font-bold
                  "
                  style={{
                    backgroundColor: `${industry.color}12`,
                    color: industry.color,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* ================= TITLE ================= */}

              <h3
                className="
                  mt-4
                  text-[17px]
                  font-semibold
                  leading-snug
                  tracking-[-0.015em]
                  text-[#102C50]
                  sm:text-[19px]
                "
              >
                {industry.title}
              </h3>


              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mt-2
                  max-w-md
                  text-[13px]
                  leading-6
                  text-[#536171]
                  sm:text-sm
                "
              >
                {industry.description}
              </p>


              {/* ================= HOVER LINE ================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  transition-all
                  duration-500
                  group-hover:w-full
                "
                style={{
                  backgroundColor: industry.color,
                }}
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}