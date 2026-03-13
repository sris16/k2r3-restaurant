import { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function MobileActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-700 ${
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      {/* Call */}
      <a
        href="tel:8122421182"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-gold text-gold shadow-lg transition duration-300 hover:bg-gold hover:text-black hover:scale-110"
      >
        <FaPhoneAlt size={18} />

        <span className="absolute right-14 whitespace-nowrap text-xs bg-black text-gold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
          Call
        </span>
      </a>

      {/* Directions */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=V2WQ+2MX,+Thanakkankulam,+Tamil+Nadu"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-gold text-gold shadow-lg transition duration-300 hover:bg-gold hover:text-black hover:scale-110"
      >
        <FaMapMarkerAlt size={20} />

        <span className="absolute right-14 whitespace-nowrap text-xs bg-black text-gold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
          Directions
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918122421182"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-gold text-gold shadow-lg transition duration-300 hover:bg-gold hover:text-black hover:scale-110"
      >
        <FaWhatsapp size={20} />

        <span className="absolute right-14 whitespace-nowrap text-xs bg-black text-gold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

export default MobileActions;