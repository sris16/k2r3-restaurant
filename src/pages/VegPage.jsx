import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import Hero from "../sections/Hero";
import Footer from "../components/Footer";

/* Lazy Loaded Sections */
const About = lazy(() => import("../sections/About"));
const Menu = lazy(() => import("../sections/Menu"));
const WhyUs = lazy(() => import("../sections/WhyUs"));
const R3Section = lazy(() => import("../sections/R3Section"));
const Contact = lazy(() => import("../sections/Contact"));

function VegPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen text="K2R3" />;

  return (
    <>
      <Navbar />

      <Hero />

      {/* Lazy Loaded Sections */}
      <Suspense fallback={null}>
        <About />
        <Menu />
        <WhyUs />
        <R3Section />
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}

export default VegPage;