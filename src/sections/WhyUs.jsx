import useFadeIn from "../hooks/useFadeIn";
import fresh from "../assets/images/fresh-ingredients.jpg";
import hygienic from "../assets/images/hygienic-kitchen.jpg";
import chef from "../assets/images/experienced-chef.jpg";
import customer from "../assets/images/customer-satisfaction.jpg";

function WhyUs() {
  const [ref, isVisible] = useFadeIn();

  const features = [
    {
      image: fresh,
      title: "Fresh Ingredients",
      description:
        "We source premium-quality vegetables daily to ensure freshness and authentic taste.",
    },
    {
      image: hygienic,
      title: "Hygienic Kitchen",
      description:
        "Our kitchen follows strict cleanliness and food safety standards.",
    },
    {
      image: chef,
      title: "Experienced Chefs",
      description:
        "Skilled chefs bringing years of expertise in vegetarian cuisine.",
    },
    {
      image: customer,
      title: "Customer Satisfaction",
      description:
        "We deliver a refined dining experience that keeps guests returning.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`fade-section ${
        isVisible ? "visible" : ""
      } py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxuryBlack text-gray-300`}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-12 sm:mb-16">
          Why Choose Us
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black border border-gold/10 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-gold hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-52 object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl text-white mb-3 sm:mb-4 transition group-hover:text-gold">
                  {feature.title}
                </h3>

                <p className="font-body text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyUs;