import Product1 from "@/assets/product1.webp";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
    {
      title: "Machine Welding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: Product1,
      link: "/",
    },
  ];

  return (
    <section className="bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {products.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="bg-white p-[10px] group block product-card"
              style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" }}
            >
              {/* IMAGE WRAPPER */}
              <div className="relative overflow-hidden rounded-md">
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt="product1"
                  className="w-full h-full  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:-rotate-6"
                />
              </div>

              {/* CONTENT */}
              <div className="p-[20px]">
                <h4 className="font-medium text-[22px] mb-[10px]">
                  {item.title}
                </h4>

                <p className="mb-[20px] text-[#999] leading-[28px] text-[15px]">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="bg-[#d2151e] py-[12px] px-[30px] text-[13px] font-semibold rounded-sm text-white"
                >
                  Learn More
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
