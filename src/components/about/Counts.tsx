import FactoryBg from "@/assets/Aboutpageimg3.webp";

export default function StatsSection() {
  const stats = [
    { number: "6810", label: "Passionate Employee" },
    { number: "4060", label: "Modern Factory" },
    { number: "3164", label: "Factory in Worldwide" },
    { number: "1852", label: "International Awards" },
  ];

  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${FactoryBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="group relative border border-white/30 rounded-xl p-10 text-center overflow-hidden"
          >
            {/* Hover background */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#E7232D] transition-all duration-500 group-hover:h-full"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white">
                {item.number}
              </h2>

              <p className="mt-2 text-white text-sm">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}