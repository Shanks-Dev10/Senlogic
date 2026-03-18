import { Link } from "react-router-dom";
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
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4 text-white max-w-7xl mx-auto">
        {/* LOGO */}
        <Link to="/" className="w-[150px]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex font-medium">
          {menuLinks.map((menus, index) => (
            <Link
              key={index}
              to={menus.link}
              className=" py-[23px] px-[15px] border-l border-r border-l-[#ffffff1a] border-r-[#ffffff1a] relative after:content-[''] after:absolute after:left-[-1px] after:bottom-0 after:h-full after:w-0 after:bg-[#D2151E] after:transition-all after:duration-700 after:-z-10 hover:after:w-full hover:after:text-white "
            >
              {menus.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT ICON */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="border rounded-md px-4 py-2">Contact Us</button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`bg-white w-[85%] min-h-screen  pt-12 fixed top-0 left-0 z-20 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
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
                  className="py-2 border-b text-[18px] flex items-center justify-between gap-2 "
                >
                  {menu.name}{" "}
                  <span className="w-7 h-7 flex justify-center items-center bg-[#d2151e] text-[#fff] ">
                    <ChevronRight size={40} />
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-600 text-white p-2 rounded">
                <Facebook size={16} />
              </div>

              <div className="bg-red-500 p-2 text-white rounded">
                <Mail size={16} />
              </div>

              <div className="bg-blue-700 p-2 text-white rounded">
                <Linkedin size={16} />
              </div>

              <div className="bg-pink-500 p-2 text-white rounded">
                <Instagram size={16} />
              </div>

              <div className="bg-sky-500 p-2 text-white rounded">
                <Twitter size={16} />
              </div>
            </div>
            <div
              className="fixed top-5 right-5 mt-0"
              onClick={() => setOpen(!open)}
            >
              <X size={32} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
