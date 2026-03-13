import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import heroImage from "../assets/images/veg-hero.jpg";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-luxuryBlack overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Title */}
        <h1
          className={`font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gold mb-6 leading-tight transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          K2 Pure Veg Restaurant
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-base sm:text-lg md:text-xl text-gray-300 mb-10 transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          A refined dining experience crafted with tradition,
          purity, and unforgettable flavors.
        </p>

        {/* Button */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=V2WQ+2MX,+Thanakkankulam,+Tamil+Nadu"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 border-2 border-gold text-gold font-semibold tracking-wide rounded-md transition-all duration-1000 delay-500 hover:bg-gold hover:text-black hover:-translate-y-1 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <FaMapMarkerAlt />
          Get Directions
        </a>

      </div>
    </section>
  );
}

export default Hero;