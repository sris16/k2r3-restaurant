import { FaMapMarkerAlt } from "react-icons/fa";
import heroImage from "../assets/images/veg-hero.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-luxuryBlack overflow-hidden">

      {/* Background */}
      <img
        src={heroImage}
        alt="K2 Pure Veg Restaurant"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-gold mb-6 leading-tight animate-fadeUp">
          K2 Pure Veg Restaurant
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg md:text-xl text-gray-300 mb-10 animate-fadeUp delay-200">
          A refined dining experience crafted with tradition,
          purity, and unforgettable flavors.
        </p>

        {/* Button */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=V2WQ+2MX,+Thanakkankulam,+Tamil+Nadu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 border-2 border-gold text-gold font-semibold tracking-wide rounded-md transition hover:bg-gold hover:text-black hover:-translate-y-1 animate-fadeUp delay-500"
        >
          <FaMapMarkerAlt />
          Get Directions
        </a>

      </div>
    </section>
  );
}

export default Hero;