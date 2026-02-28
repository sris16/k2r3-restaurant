import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LoadingScreen from "../components/LoadingScreen";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Menu from "../sections/Menu";
import WhyUs from "../sections/WhyUs";
import R3Section from "../sections/R3Section";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

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

      <Hero
        title="K2 Pure Veg Restaurant"
        subtitle="Experience authentic vegetarian cuisine crafted with fresh ingredients and traditional flavors."
        buttonText="Explore Menu"
      />

      <About />
      <Menu />
      <WhyUs />
      <R3Section />
      <Contact />
      <Footer />
    </>
  );
}

export default VegPage;