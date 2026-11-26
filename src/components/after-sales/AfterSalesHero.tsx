import {
  ArrowRight,
  Phone,
} from "lucide-react";
import Aftersalesheroimg from "@/assets/after-sales-hero.png";
import { Link } from "react-router-dom";

export default function AfterSalesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FC]">
      <div className="mx-auto grid  max-w-7xl lg:grid-cols-2 px-[20px] py-[50px] gap-5">
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex items-center ">
          <div className="w-full ">
            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#00AFA9]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00AFA9] sm:text-sm">
                Senlogic After-Sales Operations
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#173A63] ">
              Precision Beyond
              <br />
              <span className="text-[#00AFA9]">Purchase</span>
              : Comprehensive
              <br />
              <span className="text-[#00AFA9]">After-Sales Operations</span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-sm leading-7 text-slate-600 lg:text-[16px]">
              In the weighing systems industry, accuracy is not a one-time
              achievement—it is a continuous requirement. Whether you operate
              high-capacity weighbridges or automated checkweighers, even minor
              calibration drift or component wear can lead to costly material
              losses, production bottlenecks, and regulatory penalties. Our
              dedicated After-Sales Operations division is built to protect your
              investment, maximize uptime, and ensure your weighing
              infrastructure performs at peak precision throughout its entire
              lifecycle.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={"/products"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#173A63] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#00AFA9] sm:w-auto"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+918939821705"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#173A63] px-6 py-3.5 text-sm font-semibold text-[#173A63] transition-colors duration-300 hover:bg-[#173A63] hover:text-white sm:w-auto"
              >
                <Phone size={17} />
                Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative min-h-[400px] overflow-hidden ">
          <img
            src={Aftersalesheroimg}
            alt="Senlogic After Sales Service"
            className="absolute inset-0 h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
