import { Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import whatsapp from "@/assets/whatsapp.webp";

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
            <div className="bg-blue-600 p-2 rounded">
              <Facebook size={16} />
            </div>

            <div className="bg-red-500 p-2 rounded">
              <Mail size={16} />
            </div>

            <div className="bg-blue-700 p-2 rounded">
              <Linkedin size={16} />
            </div>

            <div className="bg-pink-500 p-2 rounded">
              <Instagram size={16} />
            </div>

            <div className="bg-sky-500 p-2 rounded">
              <Twitter size={16} />
            </div>
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
      <div>
        <a href="+911234567890" target="_blank" className="w-16 h-16 fixed bottom-10 right-5 z-50 animate-bounce hover:animate-none">
          <img src={whatsapp} alt="whatsapp" className="w-full h-full" />
        </a>
      </div>
    </footer>
  );
}
