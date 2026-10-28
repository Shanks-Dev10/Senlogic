import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Youtube,
} from "lucide-react";
import whatsapp from "@/assets/whatsapp.webp";

import { siX } from "simple-icons/icons";
export default function Footer() {
  const copyrights = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">QUICK LINKS</h3>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <a href="#" className="hover:text-white">
              ★ About Us
            </a>
            <a href="#" className="hover:text-white">
              ★ Blog
            </a>

            <a href="#" className="hover:text-white">
              ★ Services
            </a>
            <a href="#" className="hover:text-white">
              ★ Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              ★ Projects
            </a>
            <a href="#" className="hover:text-white">
              ★ Help Desk
            </a>

            <a href="#" className="hover:text-white">
              ★ Shop
            </a>
            <a href="#" className="hover:text-white">
              ★ Contact
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-6">NEWSLETTER</h3>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Id"
              className="bg-transparent border border-gray-500 px-4 py-2 text-sm outline-none w-full"
            />

            <button className="bg-red-600 px-5 text-white text-sm font-medium">
              SEND
            </button>
          </div>

          <h4 className="text-white mt-6 mb-3 text-sm">CONNECT WITH US</h4>

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

        {/* Right Info Box */}
        <div className="bg-[#313131] border border-[#313131] rounded-md p-6">
          <h3 className="text-white mb-3">
            Serving in 70+ countries for web, software and mobile app
            development
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            United States (USA), United Kingdom (UK), Singapore, Kenya, South
            Africa, Germany, Canada, Australia, Netherlands, Norway, United Arab
            Emirates (UAE), Finland etc.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>Copyright © {copyrights} Senlogic. all rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">
              Help Desk
            </a>
            <span>/</span>
            <a href="#" className="hover:text-white">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
      {/* <div>
        <a href="+911234567890" target="_blank" className="w-16 h-16 fixed bottom-10 right-5 z-50 animate-bounce hover:animate-none">
          <img src={whatsapp} alt="whatsapp" className="w-full h-full" />
        </a>
      </div> */}
    </footer>
  );
}
