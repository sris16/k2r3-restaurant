import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import VegPage from "./pages/VegPage";
import NonVegPage from "./pages/NonVegPage";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<VegPage />} />
        <Route path="/a2cm" element={<NonVegPage />} />
      </Routes>
    </>
  );
}

export default App;