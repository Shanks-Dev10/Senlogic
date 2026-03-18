import BannerImg from "@/assets/home-banner.webp";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative h-[30vh]">
      {/* BACKGROUND IMAGE */}
      <img
        src={BannerImg}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center h-full w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between w-full  gap-4">
          {/* Title */}
          <h1 className="text-white text-xl text-center md:text-start sm:text-2xl md:text-3xl font-bold leading-tight  break-words">
            Product
          </h1>

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-center gap-1 text-xs sm:text-sm text-white">
            <Link to="/" className="hover:text-[#d2151e]">
              Home
            </Link>
            <ChevronRight size={14} />
            <span>Products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
