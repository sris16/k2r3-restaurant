import dosai from "../assets/images/dosai.jpg";
import idly from "../assets/images/idly.jpg";
import sambar from "../assets/images/sambar.jpg";
import logo from "../assets/images/logo.jpg";

function About() {
  return (
    <section className="py-28 px-6 bg-luxuryBlack text-gray-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="font-heading text-4xl md:text-5xl text-gold mb-8">
            Our Culinary Philosophy
          </h2>

          <p className="font-body text-lg leading-relaxed mb-6 text-gray-400">
            At K2 Pure Veg, every dish reflects tradition, purity, and
            dedication. We believe vegetarian cuisine deserves the same
            refinement, elegance, and depth as any fine dining experience.
          </p>

          <p className="font-body text-lg leading-relaxed text-gray-400">
            From freshly prepared dosai to rich, aromatic sambar,
            our recipes are crafted with authenticity and served
            with warmth and hospitality.
          </p>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-6">

          <div className="overflow-hidden rounded-xl border border-gold/20">
            <img
              src={dosai}
              alt="Dosai"
              className="h-56 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gold/20">
            <img
              src={idly}
              alt="Idly"
              className="h-56 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gold/20">
            <img
              src={sambar}
              alt="Sambar"
              className="h-56 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="flex items-center justify-center bg-black rounded-xl border border-gold/20">
            <img
              src={logo}
              alt="Logo"
              className="h-56 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;