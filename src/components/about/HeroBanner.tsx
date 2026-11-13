import BannerImg from "@/assets/senlogic-building.png";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-[#4d6427]">
      {/* Background decorative bands */}
      <div className="absolute inset-y-0 right-0 w-[38%] bg-[#7c963e]">
        <div className="absolute right-[35%] top-0 h-full w-[28%] bg-[#a9c276]" />
        <div className="absolute right-[10%] top-0 h-full w-[28%] bg-[#d5e3b8]" />
      </div>

      {/* Decorative diagonal shape */}
      <div className="absolute right-[30%] top-[-10%] h-[120%] w-[18%] rotate-[10deg] bg-[#698532]/70" />

      {/* Decorative circles */}
      <div className="absolute right-[32%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-2 border-[#b7d56e]/70">
          <div className="flex h-[130px] w-[130px] items-center justify-center rounded-full border-2 border-[#b7d56e]/70">
            <div className="h-[60px] w-[60px] rounded-full border-2 border-[#b7d56e]/80" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-12 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_400px]">

          {/* LEFT CONTENT */}
          <div className="max-w-4xl text-white">

            {/* Page title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl ">
              About Us
            </h1>

            {/* Underline */}
            <div className="mt-5 h-[7px] w-36 bg-[#c7df88]" />

            {/* Main heading */}
            <h2 className="mt-9 max-w-4xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Advanced Industrial Automation
              <br />
              &amp; Precision Weighing Solutions
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#e0e8d3] sm:text-lg">
              Constant Innovation. Precision Engineering. Reliable Solutions.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Image glow/background */}
            <div className="absolute -inset-4 rounded-[35px] bg-[#dce8c4]/20 blur-xl" />

            <div className="relative h-[260px] w-[230px] overflow-hidden rounded-[30px] border-4 border-white shadow-2xl sm:h-[310px] sm:w-[270px] lg:h-[330px] lg:w-[300px]">
              <img
                src={BannerImg}
                alt="Senlogic Automation Private Limited"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}