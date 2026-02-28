import chicken from "../assets/images/chettinad-chicken.jpg";
import mutton from "../assets/images/mutton-curry.jpg";
import fish from "../assets/images/fish-fry.jpg";
import meals from "../assets/images/traditional-meals.jpg";

function A2CMDishes() {
  const dishes = [
    {
      image: chicken,
      title: "Chettinad Chicken",
      description:
        "A fiery blend of roasted spices, slow-cooked to perfection in traditional Chettinad style.",
    },
    {
      image: mutton,
      title: "Mutton Curry",
      description:
        "Tender mutton simmered in rich, aromatic masala infused with heritage spices.",
    },
    {
      image: fish,
      title: "Fish Fry",
      description:
        "Fresh catch marinated in bold spices and shallow fried for authentic coastal flavor.",
    },
    {
      image: meals,
      title: "Traditional Meals",
      description:
        "A complete Chettinad feast served with rice, curries, and traditional accompaniments.",
    },
  ];

  return (
    <section
      id="a2cm-menu"
      className="py-28 px-6 bg-[#140f0a] text-gray-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl text-gold mb-6">
            Signature Dishes
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            Crafted with heritage spices and authentic techniques,
            each dish represents the bold spirit of Chettinad cuisine.
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-black rounded-xl overflow-hidden border border-gold/10 hover:-translate-y-3 hover:border-gold transition duration-500 shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="h-56 w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-white mb-4">
                  {dish.title}
                </h3>

                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default A2CMDishes;