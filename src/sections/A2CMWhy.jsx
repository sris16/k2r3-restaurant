import useFadeIn from "../hooks/useFadeIn";
import recipes from "../assets/images/authentic-recipes.jpg";
import heritage from "../assets/images/cultural-heritage.jpg";
import cooking from "../assets/images/traditional-cooking.jpg";
import flavors from "../assets/images/rich-flavors.jpg";

function A2CMWhy() {
    const [ref, isVisible] = useFadeIn();
  const features = [
    {
      image: recipes,
      title: "Authentic Recipes",
      description:
        "Time-honored Chettinad recipes passed down through generations, preserving original flavors.",
    },
    {
      image: heritage,
      title: "Cultural Heritage",
      description:
        "Inspired by the rich culinary traditions of Karaikudi and Chettinad households.",
    },
    {
      image: cooking,
      title: "Traditional Cooking",
      description:
        "Slow-cooked in traditional methods using clay pots and hand-ground spice blends.",
    },
    {
      image: flavors,
      title: "Rich Flavors",
      description:
        "Bold spices, deep masalas, and layered aromas that define true Chettinad cuisine.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : ""} py-28 px-6 bg-[#0f0a06] text-gray-300`}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Heading */}
        <h2 className="font-heading text-4xl md:text-5xl text-gold mb-16">
          Why Choose A²CM
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a120c] border border-[#3b2a1a] rounded-xl overflow-hidden transition duration-500 transform hover:-translate-y-3 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-52 w-full object-cover transform transition duration-700 ease-out hover:scale-105 hover:brightness-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-gold mb-4">
                  {feature.title}
                </h3>

                <p className="font-body text-gray-400 text-sm leading-relaxed">
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

export default A2CMWhy;