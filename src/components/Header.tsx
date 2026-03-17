import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="bg-orange-500 px-2 py-1">🏭</span>
          Industry
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex gap-8  font-medium">
          {menuLinks.map((menus, index) => (
            <Link
              key={index}
              to={menus.link}
              className=" py-[23px] px-[15px] relative after:content-[''] after:absolute after:left-[-1px] after:bottom-0 after:h-full after:w-0 after:bg-orange-500 after:transition-all after:duration-700 after:-z-10 hover:after:w-full hover:after:text-white "
            >
              {menus.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT ICON */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="border rounded-xl px-5 py-3">Contact Us</button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`bg-white w-[85%] min-h-screen fixed top-0 left-0 z-20 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="lg:hidden text-black px-6 py-4 space-y-4 flex flex-col">
            {/* LOGO */}
            <div className="py-[30px] px-[15px]">
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold"
              >
                <span className="bg-orange-500 px-2 py-1">🏭</span>
                Industry
              </Link>
            </div>

            {/* MENU */}
            <div className="flex flex-col">
              <Link className="py-2 border-b text-[18px]" to="/">
                Home
              </Link>
              <Link className="py-2 border-b text-[18px]" to="/features">
                Features
              </Link>
              <Link className="py-2 border-b text-[18px]" to="/pages">
                Pages
              </Link>
              <Link className="py-2 border-b text-[18px]" to="/shop">
                Shop
              </Link>
              <Link className="py-2 border-b text-[18px]" to="/blog">
                Blog
              </Link>
              <Link className="py-2 border-b text-[18px]" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
