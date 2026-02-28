import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import Contact from "../sections/Contact";
import A2CMDishes from "../sections/A2CMDishes";
import A2CMWhy from "../sections/A2CMWhy";
import heroImage from "../assets/images/a2cm-hero.jpg";

function NonVegPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen text="A²CM" />;

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        ></div>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl text-gray-200">

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-gold mb-6 leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.85)]">
            Karaikudi Angammal Aachi
          </h1>

          <h2 className="font-heading text-2xl md:text-3xl mb-8 tracking-wider text-gold drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            Chettinad Mess
          </h2>

          <p className="font-body text-lg md:text-xl mb-10 text-gray-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            A bold celebration of authentic Chettinad flavors,
            slow-cooked with traditional spices and heritage recipes.
          </p>

          <a
            href="#a2cm-menu"
            className="inline-block px-10 py-4 border-2 border-gold text-gold font-semibold tracking-wide hover:bg-gold hover:text-black transition duration-500 rounded-md"
          >
            Explore Chettinad Menu
          </a>

        </div>
      </section>

      <A2CMDishes />
      <A2CMWhy />
      <Contact />
      <Footer />
    </>
  );
}

export default NonVegPage;