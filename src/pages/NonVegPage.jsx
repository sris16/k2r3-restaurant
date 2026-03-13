import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import heroImage from "../assets/images/a2cm-hero.jpg";

const A2CMDishes = lazy(() => import("../sections/A2CMDishes"));
const A2CMWhy = lazy(() => import("../sections/A2CMWhy"));
const Contact = lazy(() => import("../sections/Contact"));

function NonVegPage() {
  const [loading, setLoading] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

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
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${offsetY}px)`
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl text-gray-200">

          {/* Title */}
          <h1
            className={`font-heading text-4xl md:text-6xl lg:text-7xl text-gold mb-6 leading-tight transition-all duration-1000 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Karaikudi Angammal Aachi
          </h1>

          {/* Subtitle */}
          <h2
            className={`font-heading text-2xl md:text-3xl mb-8 tracking-wider text-gold transition-all duration-1000 delay-200 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Chettinad Mess
          </h2>

          {/* Description */}
          <p
            className={`font-body text-lg md:text-xl mb-10 text-gray-200 transition-all duration-1000 delay-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            A bold celebration of authentic Chettinad flavors,
            slow-cooked with traditional spices and heritage recipes.
          </p>

          {/* Button */}
          <a
            href="#a2cm-menu"
            className={`inline-block px-10 py-4 border-2 border-gold text-gold font-semibold tracking-wide rounded-md transition-all duration-1000 delay-500 hover:bg-gold hover:text-black hover:-translate-y-1 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Explore Chettinad Menu
          </a>

        </div>
      </section>

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