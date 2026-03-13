import useFadeIn from "../hooks/useFadeIn";
import r3Background from "../assets/images/cafe.jpg";

function R3Section() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      ref={ref}
      id="r3"
      className={`fade-section ${
        isVisible ? "visible" : ""
      } relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[6000ms] ease-out group-hover:scale-110"
        style={{
          backgroundImage: `url(${r3Background})`,
        }}
      ></div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-cream">

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-6 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
          R3 Café
        </h2>

        {/* Description */}
        <p className="font-body text-sm sm:text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
          A cozy corner within K2 where handcrafted beverages,
          aromatic filter coffee, and delightful snacks create
          a warm café experience.
        </p>

        {/* Premium Quote */}
        <div className="mt-6">
          <p className="font-heading text-lg sm:text-xl md:text-2xl text-gold italic tracking-wide transition duration-500 hover:scale-105 hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.5)]">
            “Step in for coffee. Stay for the experience.”
          </p>
        </div>

      </div>
    </section>
  );
}

export default R3Section;