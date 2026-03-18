import MapImg from "@/assets/map.webp";
export default function About() {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${MapImg})` }}
        className="py-[50px] bg-[#d2151e] relative px-4 "
      >
        <div className="max-w-[850px] mx-auto">
          <h2 className="text-[40px] font-semibold leading-[50px] text-white text-center mb-6">
            On Board Weighing Solution
          </h2>
          <p className="text-[20px] leading-[30px] text-white text-center">
            Senlogic Automation Private Limited Company a professionally managed
            company, engaged in the weighing Automation Activities Incorporated
            in February 2002
          </p>
        </div>
      </div>
    </section>
  );
}
