import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import profile from "../assets/me.png";

function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-16 backdrop-blur-md flex items-center border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between w-full">
          {/* <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md h-16 flex items-center border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between w-full"> */}

          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-xl border border-border object-cover"
              src={profile}
              alt="Logo"
            />

            <div className="hidden md:flex space-x-6 font-medium text-sm text-foreground">
              <a href="#work" className="hover:text-accent transition-colors">
                Work
              </a>
              <a href="#blogs" className="hover:text-accent transition-colors">
                Blogs
              </a>
              <a
                href="#projects"
                className="hover:text-accent transition-colors"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 flex flex-col space-y-2 text-sm text-foreground">
            <a href="#work" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#blogs" className="hover:text-accent transition-colors">
              Blogs
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
