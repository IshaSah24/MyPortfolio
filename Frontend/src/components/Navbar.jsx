import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import profile from "../assets/me.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Blogs", href: "#blog" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[5rem]  backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src={profile}
              alt="Isha Sah"
              className="h-11 w-11 rounded-[5px] border border-white/10 object-cover group-hover:border-blue-500/50 transition-all duration-300"
            />

            <div className="absolute inset-0 rounded-[5px] bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
            Isha Sah
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-md font-medium text-gray-300 hover:text-white transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute bottom-1.5 left-4 w-0 h-[3px] bg-blue-500 rounded-[5px] transition-all duration-300 group-hover/link:w-[calc(100%-32px)]"></span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white transition-all"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full md:hidden transition-all duration-500 ease-in-out origin-top ${
          mobileOpen
            ? "opacity-100 scale-y-100 bg-[#020816]/95 backdrop-blur-2xl border-b border-white/10"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
