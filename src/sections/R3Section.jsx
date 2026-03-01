import useFadeIn from "../hooks/useFadeIn";
import r3Background from "../assets/images/cafe.jpg";

function R3Section() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      ref={ref}
      id="r3"
      className={`fade-section ${isVisible ? "visible" : ""} relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${r3Background})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-cream">

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
          R3 Café
        </h2>

        <p className="font-body text-sm sm:text-base md:text-lg text-gray-200 mb-10 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          A cozy corner within K2 where handcrafted beverages,
          aromatic filter coffee, and delightful snacks create
          a warm café experience.
        </p>

        <p className="font-heading text-lg sm:text-xl md:text-2xl text-gold italic tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          “Step in for coffee. Stay for the experience.”
        </p>

      </div>
    </section>
  );
}

export default R3Section;