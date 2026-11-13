export default function PurposeDirection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8F2] py-12 sm:py-14 lg:py-20">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#38A946]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#214A92]/10 blur-3xl sm:h-96 sm:w-96" />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* ================= HEADER ================= */}

        <div className="mb-9 max-w-3xl sm:mb-11 lg:mb-12">
          {/* Label */}

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
              Mission • Vision • Values
            </span>
          </div>

          {/* Heading */}

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
            Purpose &amp; Direction
          </h2>
        </div>

        {/* ================= MISSION + VISION ================= */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {/* =================================================
              MISSION
          ================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#DDE4E9]
              bg-white
              p-5
              shadow-[0_7px_24px_rgba(23,54,111,0.045)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(23,54,111,0.09)]
              sm:rounded-3xl
              sm:p-7
              lg:p-8
            "
          >
            {/* Left Accent */}

            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[4px]
                bg-[#00AFA9]
                sm:w-[5px]
              "
            />

            {/* Content */}

            <div className="pl-2 sm:pl-3">
              {/* Small Number */}

              <div className="mb-4 flex items-center justify-between">
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#00AFA9]
                    sm:text-[10px]
                  "
                >
                  01
                </span>

                <span className="h-2 w-2 rounded-full bg-[#00AFA9]" />
              </div>

              {/* Title */}

              <h3
                className="
                  text-[19px]
                  font-semibold
                  leading-tight
                  tracking-[-0.015em]
                  text-[#102C50]
                  sm:text-[21px]
                "
              >
                Our Mission
              </h3>

              {/* Description */}

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-[14px]
                  leading-6
                  text-[#536171]
                  sm:mt-4
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                “A Company Designing and Manufacturing Quality Industrial
                Weighing Systems which are Precise, Reliable and Robust for
                Optimizing Customer Operations”
              </p>
            </div>
          </div>

          {/* =================================================
              VISION
          ================================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#DDE4E9]
              bg-white
              p-5
              shadow-[0_7px_24px_rgba(23,54,111,0.045)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(23,54,111,0.09)]
              sm:rounded-3xl
              sm:p-7
              lg:p-8
            "
          >
            {/* Left Accent */}

            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[4px]
                bg-[#214A92]
                sm:w-[5px]
              "
            />

            {/* Content */}

            <div className="pl-2 sm:pl-3">
              {/* Small Number */}

              <div className="mb-4 flex items-center justify-between">
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#214A92]
                    sm:text-[10px]
                  "
                >
                  02
                </span>

                <span className="h-2 w-2 rounded-full bg-[#214A92]" />
              </div>

              {/* Title */}

              <h3
                className="
                  text-[19px]
                  font-semibold
                  leading-tight
                  tracking-[-0.015em]
                  text-[#102C50]
                  sm:text-[21px]
                "
              >
                Our Vision
              </h3>

              {/* Description */}

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-[14px]
                  leading-6
                  text-[#536171]
                  sm:mt-4
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                “To be the Leading Global Supplier of Precision Automated
                Industrial Weighing Systems that are Reliable, Guarantee
                Compliance and Optimize Efficiency through Innovation and
                Cutting Edge Technology”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
