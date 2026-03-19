import { NavLink, useParams } from "react-router-dom";
import { productLists } from "@/data/products";
import BannerImg from "@/assets/home-banner.webp";
import { ChevronRight, CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetails() {
  const { slug } = useParams();

  const allProducts = productLists.flatMap((cat) => cat.details);

  const product = allProducts.find((p) => p.slug === slug);

  if (!product) return <div>Product not found</div>;
  const currentCategory = productLists.find((cat) =>
    cat.details.some((p) => p.slug === slug),
  );
  const categoryProducts = currentCategory?.details || [];

  return (
    <div>
      <Header />

      {/* hero banner */}
      <section className="relative h-[30vh]">
        {/* BACKGROUND IMAGE */}
        <img
          src={BannerImg}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div
          className="relative z-10 flex items-center h-full w-full max-w-7xl mx-auto
         px-4 md:px-6"
        >
          <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between w-full gap-4">
            {/* Title */}
            <h1 className="text-white text-xl text-center md:text-start sm:text-2xl md:text-3xl font-bold leading-tight  break-words">
              {product.title}
            </h1>

            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center justify-center gap-1 text-xs sm:text-sm text-white">
              <Link to="/" className="hover:text-[#d2151e]">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link to="/product" className="hover:text-[#d2151e]">
                Products
              </Link>
              <ChevronRight size={14} />
              <span className="">{product.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* details */}
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto py-20 px-4">
        {/* LEFT SIDE */}

        <div className="w-full md:w-[300px]  self-start">
          <div className="sticky top-24 space-y-6 ">
            {/* Products List */}
            <div className="bg-[#F3F4F6] rounded-lg shadow-sm h-[430px] overflow-y-auto ">
              <h4 className="block px-4 py-3 border mb-2 rounded text-xl bg-gray-50 text-[#d2151e]">
                Our Products
              </h4>
              {categoryProducts.map((item) => (
                <NavLink
                  key={item.id}
                  to={`/product/${item.slug}`}
                  className={({ isActive }) =>
                    `block px-4 py-3 border mb-2 rounded text-sm transition-all duration-300
      ${isActive
                      ? "bg-[#d2151e] text-white"
                      : "bg-gray-50 text-gray-700 hover:bg-[#d2151e] hover:text-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>

            {/* Brochure Box */}
            <div className="bg-[#d2151e] text-white p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Get your brochures</h3>

              <button className="w-full bg-black py-2 text-sm mb-3">
                COMPANY BROCHURES ⬇
              </button>

              <button className="w-full bg-black py-2 text-sm">
                COMPANY INFO ⬇
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-6">
          {/* Main Image */}
          <img
            src={product.image}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {product.content?.title}
          </h2>

          {/* Paragraphs */}
          {product.content?.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.content?.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-[180px] object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Extra Section */}
          <div className="pt-6 space-y-4">

            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">

              {product.extraSection?.paragraphs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">

                  {/* Tick Icon */}
                  <CheckCheck
                    size={18}
                    className="text-[#E7232D] mt-1 flex-shrink-0"
                  />

                  {/* Text */}
                  {item}

                </li>
              ))}

            </ul>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
