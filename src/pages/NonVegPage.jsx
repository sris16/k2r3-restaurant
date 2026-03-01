import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import heroImage from "../assets/images/a2cm-hero.jpg";

/* Lazy Loaded Sections */
const A2CMDishes = lazy(() => import("../sections/A2CMDishes"));
const A2CMWhy = lazy(() => import("../sections/A2CMWhy"));
const Contact = lazy(() => import("../sections/Contact"));

function NonVegPage() {
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);

  /* Loading Screen */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  /* Optimized Parallax */
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.15);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <LoadingScreen text="A²CM" />;

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${offsetY}px)`,
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
            className="inline-block px-10 py-4 border-2 border-gold text-gold font-semibold tracking-wide rounded-md transition duration-500 hover:bg-gold hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-1"
          >
            Explore Chettinad Menu
          </a>

        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={null}>
        <A2CMDishes />
        <A2CMWhy />
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}

export default NonVegPage;