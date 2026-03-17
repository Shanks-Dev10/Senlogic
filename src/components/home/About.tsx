import MapImg from "@/assets/map.webp";
export default function About() {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${MapImg})` }}
        className="py-[100px] bg-[#d2151e] relative px-4"
      >
        <div className="max-w-[780px] mx-auto">
          <h2 className="text-[32px] font-semibold leading-[50px] text-white text-center mb-6">
            Amazing things happen to your business when we connect those dots of
            utility and value.
          </h2>
          <p className="text-[16px] leading-[30px] text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sequi inventore tenetur, explicabo recusandae, voluptate beatae
            voluptatum vel ex minus quas ipsum officiis quos. Incidunt deleniti
            harum reiciendis recusandae rerum.
          </p>
        </div>
      </div>
    </section>
  );
}
