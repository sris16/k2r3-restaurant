import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import useFadeIn from "../hooks/useFadeIn";
function Contact() {
    const [ref, isVisible] = useFadeIn();
  return (
    <section
      ref={ref}
      id="contact"
      className={`fade-section ${isVisible ? "visible" : ""} py-32 px-6 bg-black text-gray-300`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gold mb-6">
            Visit Us
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Experience refined vegetarian dining and authentic flavors
            in a welcoming and elegant atmosphere.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Contact Details */}
          <div className="space-y-6 font-body text-gray-400 text-lg">

            <div>
              <h3 className="text-white font-semibold mb-2">
                Address
              </h3>
              <p>
                V2WQ+2MX, Srinagar - Kanyakumari Hwy,<br />
                Thanakkankulam, Tamil Nadu 625006
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Phone
              </h3>
              <p>+91 8122421182</p>
              {/* <br /> */}
              <p>+91 9342846206</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Email
              </h3>
              <p>k2r3foods@gmail.com</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">
                Timings
              </h3>
              <p>8:00 AM – 12:00 PM</p>
            </div>

            {/* Icon Buttons */}
            <div className="flex gap-6 mt-6">

              {/* Call Icon */}
              <a
                href="tel:8122421182"
                className="w-12 h-12 flex items-center justify-center border-2 border-gold rounded-full text-gold transition duration-500 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"              >
                <FaPhoneAlt size={18} />
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/918122421182"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-gold rounded-full text-gold transition duration-500 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
              >
                <FaWhatsapp size={22} />
              </a>

              {/* Mail Icon (Forces Gmail Web) */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=k2r3foods@gmail.com&su=Reservation%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-gold rounded-full text-gold transition duration-500 hover:bg-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
              >
                <FaEnvelope size={18} />
              </a>

            </div>

          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gold/20 shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=V2WQ+2MX,+Srinagar+-+Kanyakumari+Hwy,+Thanakkankulam,+Tamil+Nadu+625006&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;