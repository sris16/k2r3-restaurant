import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navRef = useRef(null);

  const isA2CM = location.pathname === "/a2cm";

  /* Detect scroll for navbar background */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu when user scrolls */
  useEffect(() => {
    const handleScrollClose = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScrollClose);

    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [menuOpen]);

  /* Close mobile menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Scroll navigation handler */
  const handleScrollNavigation = (sectionId, targetPath) => {
    if (location.pathname === targetPath) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`${targetPath}#${sectionId}`);
    }

    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to={isA2CM ? "/a2cm" : "/"}
          className="font-heading text-xl sm:text-2xl text-gold"
        >
          {isA2CM ? "A²CM" : "K2R3"}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-body text-sm tracking-wide text-white">

          <Link to="/" className="hover:text-gold transition">
            K2 Pure Veg
          </Link>

          <button
            onClick={() => handleScrollNavigation("r3", "/")}
            className="hover:text-gold transition"
          >
            R3 Café
          </button>

          <Link to="/a2cm" className="hover:text-gold transition">
            A²CM
          </Link>

          <button
            onClick={() =>
              handleScrollNavigation(
                "contact",
                isA2CM ? "/a2cm" : "/"
              )
            }
            className="hover:text-gold transition"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gold transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gold transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gold transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          bg-black
          border-t border-gold/10
          px-4
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
      >
        <div className="space-y-4 text-center font-body text-white">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gold transition"
          >
            K2 Pure Veg
          </Link>

          <button
            onClick={() => handleScrollNavigation("r3", "/")}
            className="block w-full hover:text-gold transition"
          >
            R3 Café
          </button>

          <Link
            to="/a2cm"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gold transition"
          >
            A²CM
          </Link>

          <button
            onClick={() =>
              handleScrollNavigation(
                "contact",
                isA2CM ? "/a2cm" : "/"
              )
            }
            className="block w-full hover:text-gold transition"
          >
            Contact
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;