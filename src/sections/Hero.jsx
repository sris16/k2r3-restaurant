import { useEffect, useState } from "react";
import heroImage from "../assets/images/veg-hero.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.2); // subtle movement
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Parallax Background */}
      <div
        fetchpriority="high"
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offsetY}px)`,
          willChange: "transform",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gold mb-6 leading-tight">
          K2 Pure Veg Restaurant
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-gray-300 mb-10">
          A refined dining experience crafted with tradition,
          purity, and unforgettable flavors.
        </p>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=V2WQ+2MX,+Thanakkankulam,+Tamil+Nadu"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gold text-gold font-semibold tracking-wide rounded-md transition duration-500 hover:bg-gold hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-1"
        >
          <FaMapMarkerAlt className="text-lg" />
          Get Directions
        </a>
      </div>

    </section>
  );
}

export default Hero;