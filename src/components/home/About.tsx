import MapImg from "@/assets/map.webp";
export default function About() {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${MapImg})` }}
        className="py-[50px] bg-[#173156] relative px-4 "
      >
        <div className="max-w-[850px] mx-auto">
          <h2 className="text-[40px] font-semibold leading-[50px] text-white text-center mb-6">
            Your Trusted Partner in Weighing Automation 
          </h2>
          <p className="text-[20px] leading-[30px] text-white text-center">
            Senlogic Automation Private Limited is a professionally managed company specializing in weighing and automation solutions since February 2002
          </p>
        </div>
      </div>
    </section>
  );
}
