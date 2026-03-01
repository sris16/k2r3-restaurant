import useFadeIn from "../hooks/useFadeIn";
import dosai from "../assets/images/dosai.jpg";
import idly from "../assets/images/idly.jpg";
import sambar from "../assets/images/sambar.jpg";
import logo from "../assets/images/logo.jpg";

function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      ref={ref}
      className={`fade-section ${
        isVisible ? "visible" : ""
      } py-24 px-6 bg-black`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2
            className={`stagger-item delay-1 ${
              isVisible ? "visible" : ""
            } font-heading text-4xl md:text-5xl text-gold mb-8`}
          >
            Our Culinary Philosophy
          </h2>

          <p
            className={`stagger-item delay-2 ${
              isVisible ? "visible" : ""
            } font-body text-lg leading-relaxed mb-6 text-gray-400`}
          >
            At K2 Pure Veg, every dish reflects tradition, purity, and
            dedication. We believe vegetarian cuisine deserves the same
            refinement, elegance, and depth as any fine dining experience.
          </p>

          <p
            className={`stagger-item delay-3 ${
              isVisible ? "visible" : ""
            } font-body text-lg leading-relaxed text-gray-400`}
          >
            From freshly prepared dosai to rich, aromatic sambar,
            our recipes are crafted with authenticity and served
            with warmth and hospitality.
          </p>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-6">

          <div
            className={`stagger-item delay-2 ${
              isVisible ? "visible" : ""
            } overflow-hidden rounded-xl border border-gold/20 transition duration-500 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]`}
          >
            <img
              src={dosai}
              alt="Dosai"
              loading= "lazy"
              decoding = "async"
              className="h-56 w-full object-cover transform transition duration-700 ease-out hover:scale-105 hover:brightness-110"
            />
          </div>

          <div
            className={`stagger-item delay-3 ${
              isVisible ? "visible" : ""
            } overflow-hidden rounded-xl border border-gold/20 transition duration-500 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]`}
          >
            <img
              src={idly}
              alt="Idly"
              loading= "lazy"
              decoding = "async"
              className="h-56 w-full object-cover transform transition duration-700 ease-out hover:scale-105 hover:brightness-110"
            />
          </div>

          <div
            className={`stagger-item delay-3 ${
              isVisible ? "visible" : ""
            } overflow-hidden rounded-xl border border-gold/20 transition duration-500 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]`}
          >
            <img
              src={sambar}
              alt="Sambar"
              loading= "lazy"
              decoding = "async"
              className="h-56 w-full object-cover transform transition duration-700 ease-out hover:scale-105 hover:brightness-110"
            />
          </div>

          <div
            className={`stagger-item delay-4 ${
              isVisible ? "visible" : ""
            } flex items-center justify-center bg-black rounded-xl border border-gold/20 transition duration-500 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]`}
          >
            <img
              src={logo}
              alt="Logo"
              loading= "lazy"
              decoding = "async"
              className="h-56 w-full object-cover transform transition duration-700 ease-out hover:scale-105 hover:brightness-110"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;