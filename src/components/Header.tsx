import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { siX } from "simple-icons/icons";
import {
  ChevronRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import logo from "@/assets/Senlogic Logo.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Services", link: "/" },
    { name: "Product", link: "/" },
    { name: "Completed Projected", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  return (
    <header className="relative z-50">
      {/* TOP BAR — DESKTOP */}
      <div className="hidden bg-[#173156] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 md:px-12">
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Senlogic/61563415796926/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full   bg-[#2980c2] transition-all duration-300 hover:-translate-y-1"
            >
              <Facebook size={16} className="text-[#fff] " />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@senlogicautomationpvtltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full   bg-[#D2151E] transition-all duration-300 hover:-translate-y-1"
            >
              <Youtube size={16} className="text-[#FFf]" />
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/Senlogic1839021"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-8 w-8 items-center justify-center rounded-full   bg-black transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[16px] w-[16px] fill-current text-[#fff]"
                aria-hidden="true"
              >
                <path d={siX.path} />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/senlogic_automation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full !bg-[radial-gradient(circle_at_30%_107%,rgb(254,218,117)_0%,rgb(254,218,117)_5%,rgb(250,126,30)_25%,rgb(214,41,118)_45%,rgb(150,47,191)_65%,rgb(79,91,213)_90%)]   transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram size={16} className="text-[#fff]" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex items-center gap-7">
            <a
              href="mailto:marketing@senlogicgroup.com"
              className="group flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-80"
            >
              <Mail size={15} />
              <span>marketing@senlogicgroup.com</span>
            </a>

            <span className="h-5 w-px bg-white/30" />

            <a
              href="tel:+919380018943"
              className="group flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-80"
            >
              <Phone size={15} />
              <span>+91 93800 18943</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? "fixed left-0 top-0 z-50 animate-slideDown border-b border-gray-100 bg-white/95 shadow-md backdrop-blur-md"
            : "relative border-b border-gray-100 bg-white"
        }`}
      >
        <div className="mx-auto h-[82px] flex max-w-7xl items-center justify-between px-6 py-3 md:px-12 lg:py-0">
          {/* LOGO */}
          <Link
            to="/"
            aria-label="Senlogic Home"
            className="relative z-10 block w-[140px] shrink-0 transition-transform duration-300 hover:scale-[1.02] lg:w-[155px]"
          >
            <img
              src={logo}
              alt="Senlogic Automation Private Limited"
              className="block h-auto w-full object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center lg:flex">
            {menuLinks.map((menu) => (
              <NavLink
                key={menu.link}
                to={menu.link}
                end={menu.link === "/"}
                className={
                  "group relative flex  items-center px-5 text-[14px] font-medium tracking-wide transition-colors duration-300  text-[#30343B] hover:text-[#D2151E]"
                }
              >
                <>
                  <span>{menu.name}</span>

                  {/* Animated Bottom Border */}
                  {/* <span
                      className={`absolute -bottom-3 left-5 right-5 h-[3px] origin-center rounded-t-full bg-[#D2151E] transition-transform duration-300 xl:left-6 xl:right-6 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    /> */}
                </>
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP CONTACT BUTTON */}
          <div className="hidden items-center lg:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[#D2151E] px-5 py-3 text-[13px] font-semibold tracking-wide text-white shadow-sm transition-all duration-300   hover:shadow-lg"
            >
              Contact Us
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON — UNCHANGED DESIGN */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY — UNCHANGED */}
        <div
          className={`fixed inset-0 z-10 bg-black/40 transition-opacity duration-300 lg:hidden ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* MOBILE MENU DRAWER — DESIGN UNCHANGED */}
        <div
          className={`fixed left-0 top-0 z-20 min-h-screen w-[85%] bg-white pt-12 transition-transform duration-300 ease-in-out lg:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col justify-between gap-5 px-6 py-4 text-black">
            {/* LOGO */}
            <Link to="/" className="w-[200px]" onClick={() => setOpen(false)}>
              <img src={logo} alt="logo" className="h-full w-full" />
            </Link>

            {/* MENU */}
            <div className="flex flex-col">
              {menuLinks.map((menu, index) => (
                <Link
                  to={menu.link}
                  key={index}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-2 border-b py-2 text-[18px] transition-colors duration-200 hover:text-[#D2151E]"
                >
                  {menu.name}

                  <span className="flex h-7 w-7 items-center justify-center bg-[#D2151E] text-white">
                    <ChevronRight size={24} />
                  </span>
                </Link>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Senlogic/61563415796926/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full   bg-[#2980c2] transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook size={16} className="text-[#fff] " />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@senlogicautomationpvtltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full   bg-[#D2151E] transition-all duration-300 hover:-translate-y-1"
              >
                <Youtube size={16} className="text-[#FFf]" />
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/Senlogic1839021"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full   bg-black transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[16px] w-[16px] fill-current text-[#fff]"
                  aria-hidden="true"
                >
                  <path d={siX.path} />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/senlogic_automation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full !bg-[radial-gradient(circle_at_30%_107%,rgb(254,218,117)_0%,rgb(254,218,117)_5%,rgb(250,126,30)_25%,rgb(214,41,118)_45%,rgb(150,47,191)_65%,rgb(79,91,213)_90%)]   transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={16} className="text-[#fff]" />
              </a>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            className="fixed right-5 top-5 cursor-pointer transition-transform duration-300 hover:rotate-90"
            onClick={() => setOpen(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setOpen(false);
              }
            }}
          >
            <X size={32} />
          </div>
        </div>
      </div>
    </header>
  );
}
