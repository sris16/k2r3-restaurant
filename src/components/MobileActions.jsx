import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

function MobileActions() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/80 backdrop-blur-md border border-gold/20 rounded-full px-4 py-3 shadow-xl">

      {/* Call */}
      <a
        href="tel:8122421182"
        className="w-11 h-11 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition"
      >
        <FaPhoneAlt size={16} />
      </a>

      {/* Directions */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=V2WQ+2MX,+Thanakkankulam,+Tamil+Nadu"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition"
      >
        <FaMapMarkerAlt size={18} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918122421182"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition"
      >
        <FaWhatsapp size={18} />
      </a>

    </div>
  );
}

export default MobileActions;