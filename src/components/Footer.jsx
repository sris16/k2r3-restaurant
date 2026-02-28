import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isA2CM = location.pathname === "/a2cm";

  const brandName = isA2CM ? "A²CM" : "K2R3";

  const brandDescription = isA2CM
    ? "Authentic Chettinad cuisine crafted with rich spices, heritage recipes, and bold South Indian flavors."
    : "A refined vegetarian dining experience blending tradition, purity, and premium hospitality.";

  return (
    <footer className="bg-luxuryBlack text-gray-400 pt-20 pb-10 px-6 border-t border-gold/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <h3 className="font-heading text-3xl text-gold mb-6 tracking-wide">
            {brandName}
          </h3>
          <p className="font-body text-gray-500 leading-relaxed">
            {brandDescription}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-xl text-white mb-6">
            Quick Links
          </h4>

          <ul className="space-y-3 font-body text-gray-500">
            <li>
              <Link to="/" className="hover:text-gold transition duration-300">
                K2 Pure Veg
              </Link>
            </li>
            <li>
              <Link to="/#r3" className="hover:text-gold transition duration-300">
                R3 Café
              </Link>
            </li>
            <li>
              <Link to="/a2cm" className="hover:text-gold transition duration-300">
                A²CM
              </Link>
            </li>
            <li>
              <Link
                to={isA2CM ? "/a2cm#contact" : "/#contact"}
                className="hover:text-gold transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-xl text-white mb-6">
            Contact
          </h4>

          <p className="font-body text-gray-500 leading-relaxed">
            V2WQ+2MX, Srinagar - Kanyakumari Hwy,<br />
            Thanakkankulam, Tamil Nadu 625006
          </p>

          <p className="mt-4 text-gray-500">
            Phone: +91 8122421182
            <br />
            Phone: +91 9342846206
            <br />
            Email: k2r3foods@gmail.com
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gold/10 mt-16 pt-8 text-center text-gray-600 font-body text-sm">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;