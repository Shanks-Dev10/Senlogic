export default function WhoWeAre() {
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

            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#53677D] sm:text-[10px] sm:tracking-[0.18em]">
              Engineering Capability
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
            Who We Are
          </h2>


          {/* Description */}

          <p
            className="
              mt-4
              max-w-2xl
              text-[14px]
              font-normal
              leading-6
              tracking-[-0.005em]
              text-[#4B5B6B]
              sm:mt-5
              sm:text-[15px]
              sm:leading-7
              lg:text-[16px]
            "
          >
            Senlogic Automation Private Limited designs, develops and
            integrates industrial automation and precision weighing solutions
            for demanding industrial environments.
          </p>

        </div>


        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div className="space-y-7 sm:space-y-8">


          {/* =================================================
              ENGINEERING DESCRIPTION
          ================================================== */}

          <div
            className="
              rounded-2xl
              border
              border-[#214A92]/10
              bg-white
              p-5
              shadow-[0_8px_25px_rgba(23,54,111,0.055)]
              sm:rounded-3xl
              sm:p-7
              lg:p-8
            "
          >

            <div className="mb-5 flex items-start gap-3 sm:mb-6 sm:gap-4">


              {/* Logo / Icon */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#17366F]
                  text-base
                  font-semibold
                  text-white
                  sm:h-11
                  sm:w-11
                  sm:rounded-2xl
                  sm:text-lg
                "
              >
                S
              </div>


              <div>

                <h3
                  className="
                    text-[17px]
                    font-semibold
                    leading-tight
                    tracking-[-0.015em]
                    text-[#102C50]
                    sm:text-[19px]
                  "
                >
                  Engineering with Purpose
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-[#718096] sm:text-xs">
                  Practical solutions. Reliable execution.
                </p>

              </div>

            </div>


            <p
              className="
                max-w-3xl
                text-[14px]
                leading-6
                text-[#4B5B6B]
                sm:text-[15px]
                sm:leading-7
              "
            >
              We combine practical industry knowledge with customized
              engineering to solve demanding measurement and process
              challenges.
            </p>

          </div>


          {/* =================================================
              CAPABILITIES
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            "
          >


            {/* =================================================
                DESIGN
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
                pl-6
                shadow-[0_7px_24px_rgba(23,54,111,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(23,54,111,0.09)]
                sm:p-6
                sm:pl-7
              "
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-6
                  h-10
                  w-[4px]
                  rounded-r-full
                  bg-[#214A92]
                  sm:top-7
                  sm:h-11
                "
              />


              {/* Header */}

              <div className="flex items-center justify-between">

                <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#214A92] sm:text-[10px]">
                  Capability 01
                </span>

                <span className="text-xs font-semibold text-[#214A92]">
                  01
                </span>

              </div>


              <h3
                className="
                  mt-3
                  text-[18px]
                  font-semibold
                  leading-tight
                  tracking-[-0.015em]
                  text-[#102C50]
                  sm:text-[19px]
                "
              >
                Design
              </h3>


              <p
                className="
                  mt-2
                  text-[13px]
                  leading-5
                  text-[#536171]
                  sm:text-[14px]
                  sm:leading-6
                "
              >
                Application-led system design and engineering tailored to
                industrial requirements.
              </p>

            </div>


            {/* =================================================
                INTEGRATION
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
                pl-6
                shadow-[0_7px_24px_rgba(23,54,111,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(23,54,111,0.09)]
                sm:p-6
                sm:pl-7
              "
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-6
                  h-10
                  w-[4px]
                  rounded-r-full
                  bg-[#00AFA9]
                  sm:top-7
                  sm:h-11
                "
              />


              {/* Header */}

              <div className="flex items-center justify-between">

                <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#00AFA9] sm:text-[10px]">
                  Capability 02
                </span>

                <span className="text-xs font-semibold text-[#00AFA9]">
                  02
                </span>

              </div>


              <h3
                className="
                  mt-3
                  text-[18px]
                  font-semibold
                  leading-tight
                  tracking-[-0.015em]
                  text-[#102C50]
                  sm:text-[19px]
                "
              >
                Integration
              </h3>


              <p
                className="
                  mt-2
                  text-[13px]
                  leading-5
                  text-[#536171]
                  sm:text-[14px]
                  sm:leading-6
                "
              >
                Sensors, instrumentation, control systems and software
                integrated into a seamless solution.
              </p>

            </div>


            {/* =================================================
                DELIVERY
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
                pl-6
                shadow-[0_7px_24px_rgba(23,54,111,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(23,54,111,0.09)]
                sm:p-6
                sm:pl-7
              "
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-6
                  h-10
                  w-[4px]
                  rounded-r-full
                  bg-[#F59A23]
                  sm:top-7
                  sm:h-11
                "
              />


              {/* Header */}

              <div className="flex items-center justify-between">

                <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#F59A23] sm:text-[10px]">
                  Capability 03
                </span>

                <span className="text-xs font-semibold text-[#F59A23]">
                  03
                </span>

              </div>


              <h3
                className="
                  mt-3
                  text-[18px]
                  font-semibold
                  leading-tight
                  tracking-[-0.015em]
                  text-[#102C50]
                  sm:text-[19px]
                "
              >
                Delivery
              </h3>


              <p
                className="
                  mt-2
                  text-[13px]
                  leading-5
                  text-[#536171]
                  sm:text-[14px]
                  sm:leading-6
                "
              >
                Installation, commissioning and dependable customer support
                from implementation to operation.
              </p>

            </div>

          </div>

        </div>


        {/* ===================================================
            BOTTOM STATS
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-y-7
            border-t
            border-[#D9E0E5]
            pt-7
            sm:mt-12
            sm:grid-cols-4
            sm:gap-4
            sm:pt-8
          "
        >


          {/* Established */}

          <div className="text-center sm:text-left">

            <p
              className="
                text-[25px]
                font-semibold
                leading-none
                tracking-[-0.02em]
                text-[#214A92]
                sm:text-[28px]
              "
            >
              2002
            </p>

            <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#718096] sm:text-[10px]">
              Established
            </p>

          </div>


          {/* Experience */}

          <div className="text-center sm:text-left">

            <p
              className="
                text-[25px]
                font-semibold
                leading-none
                tracking-[-0.02em]
                text-[#38A946]
                sm:text-[28px]
              "
            >
              20+
            </p>

            <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#718096] sm:text-[10px]">
              Years Experience
            </p>

          </div>


          {/* Capabilities */}

          <div className="text-center sm:text-left">

            <p
              className="
                text-[25px]
                font-semibold
                leading-none
                tracking-[-0.02em]
                text-[#214A92]
                sm:text-[28px]
              "
            >
              3
            </p>

            <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#718096] sm:text-[10px]">
              Core Capabilities
            </p>

          </div>


          {/* Engineering */}

          <div className="text-center sm:text-left">

            <p
              className="
                text-[25px]
                font-semibold
                leading-none
                tracking-[-0.02em]
                text-[#38A946]
                sm:text-[28px]
              "
            >
              100%
            </p>

            <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#718096] sm:text-[10px]">
              Engineering Focus
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}