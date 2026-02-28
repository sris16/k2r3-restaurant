import heroImage from "../assets/images/veg-hero.jpg"; 

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-luxuryBlack overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
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
          href="#menu"
          className="inline-block px-6 sm:px-10 py-3 sm:py-4 border-2 border-gold text-gold font-semibold tracking-wide rounded-md hover:bg-gold hover:text-black transition duration-500"
        >
          Explore Menu
        </a>
      </div>

    </section>
  );
}

export default Hero;