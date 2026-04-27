import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BRAND_NAME } from "../constants/brand";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-14 h-14 object-contain rounded-xl shadow-sm"
          />

          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              {BRAND_NAME}
            </h1>

            <p className="text-xs text-gray-500">
              Trusted Waterproofing Experts
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md"
        >
          Get Inspection
        </a>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-6 mt-4 space-y-5">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="block text-center bg-blue-600 text-white py-3 rounded-xl"
          >
            Get Inspection
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;