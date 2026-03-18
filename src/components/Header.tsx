import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Menu,
  X,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo.webp";

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
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Product", link: "/product" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <header>
      {/* Top Menu */}
      <div className="bg-[#d2151e] hidden lg:block">
        <div className="px-6 md:px-12 py-4 lg:py-2  max-w-7xl mx-auto text-[#fff]">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <Twitter size={18} />
              <Linkedin size={18} />
              <Facebook size={18} />
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2  text-[14px]">
                <span>
                  <Mail size={16} />
                </span>
                marketing@senlogicgroup.com
              </a>
              <a href="#" className="flex items-center gap-2  text-[14px]">
                <span>
                  <Phone size={16} />
                </span>
                +91 93800 18943
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div
        className={`w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "fixed top-0 left-0 bg-white shadow-lg animate-slideDown"
            : "relative bg-white border"
        }`}
      >
        {/* NAVBAR */}
        <div className="flex items-center justify-between px-6 md:px-12 py-4 lg:py-2 max-w-7xl mx-auto">
          {/* LOGO */}
          <Link to="/" className="w-[150px]">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex font-medium">
            {menuLinks.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.link}
                className={({ isActive }) =>
                  `py-[23px] px-[17px] border-l-[#5757571a] border-l last:border-r  relative
       after:content-[''] after:absolute after:left-[-1px] after:bottom-0
       after:h-1 after:w-0 after:bg-[#D2151E]
       after:transition-all after:duration-700 after:-z-10
       hover:after:w-full
       ${isActive ? "after:w-full text-[#D2151E] font-semibold" : ""}`
                }
              >
                {menu.name}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ICON */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="border rounded-md px-4 py-2 hover:bg-[#D2151E] hover:text-white hover:border-[#D2151E] transition-colors duration-300">
              Contact Us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/40 z-10 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}
        />

        {/* MOBILE MENU DRAWER */}
        <div
          className={`bg-white w-[85%] min-h-screen pt-12 fixed top-0 left-0 z-20
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="lg:hidden text-black px-6 py-4 gap-5 flex flex-col justify-between h-full">
            {/* LOGO */}
            <Link to="/" className="w-[200px]">
              <img src={logo} alt="logo" className="w-full h-full" />
            </Link>

            {/* MENU */}
            <div className="flex flex-col">
              {menuLinks.map((menu, index) => (
                <Link
                  to={menu.link}
                  key={index}
                  onClick={() => setOpen(false)}
                  className="py-2 border-b text-[18px] flex items-center justify-between gap-2
                  hover:text-[#D2151E] transition-colors duration-200"
                >
                  {menu.name}
                  <span className="w-7 h-7 flex justify-center items-center bg-[#d2151e] text-[#fff]">
                    <ChevronRight size={40} />
                  </span>
                </Link>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3">
              <div className="bg-blue-600 text-white p-2 rounded hover:scale-110 transition-transform">
                <Facebook size={16} />
              </div>
              <div className="bg-red-500 p-2 text-white rounded hover:scale-110 transition-transform">
                <Mail size={16} />
              </div>
              <div className="bg-blue-700 p-2 text-white rounded hover:scale-110 transition-transform">
                <Linkedin size={16} />
              </div>
              <div className="bg-pink-500 p-2 text-white rounded hover:scale-110 transition-transform">
                <Instagram size={16} />
              </div>
              <div className="bg-sky-500 p-2 text-white rounded hover:scale-110 transition-transform">
                <Twitter size={16} />
              </div>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <div
            className="fixed top-5 right-5 cursor-pointer hover:rotate-90 transition-transform duration-300"
            onClick={() => setOpen(false)}
          >
            <X size={32} />
          </div>
        </div>
      </div>
    </header>
  );
}
