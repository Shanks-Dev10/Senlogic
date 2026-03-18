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

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full w-full px-6">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            About US
          </h1>

          <div className="flex items-center gap-1 text-sm text-white font-normal">
            <Link to="/" className="hover:text-[#d2151e] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}