import useFadeIn from "../hooks/useFadeIn";

function Menu() {
  const [ref, isVisible] = useFadeIn();

  const categories = [
    {
      title: "Breakfast",
      items: ["Idly", "Dosai", "Pongal", "Poori"],
    },
    {
      title: "Lunch",
      items: ["South Indian Meals", "Curd Rice", "Lemon Rice", "Veg Biryani"],
    },
    {
      title: "Dinner",
      items: ["Chapati", "Paneer Butter Masala", "Ghee Dosai", "Tomato Rice"],
    },
    {
      title: "Special Dishes",
      items: ["Mini Tiffin", "Rava Dosai", "Special Meals", "North Indian Combo"],
    },
    {
      title: "Beverages",
      items: ["Filter Coffee", "Badam Milk", "Fresh Juice", "Lassi"],
    },
    {
      title: "Desserts",
      items: ["Gulab Jamun", "Kesari", "Ice Cream", "Payasam"],
    },
  ];

  return (
    <section
      ref={ref}
      className={`fade-section ${
        isVisible ? "visible" : ""
      } py-24 px-6 bg-black`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-6">
            Signature Menu
          </h2>

          <p className="font-body text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Carefully curated vegetarian delicacies prepared with precision and tradition.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-luxuryBlack border border-gold/10 rounded-xl p-6 sm:p-8 transition duration-500 transform hover:-translate-y-2 hover:border-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]"
            >
              <h3 className="font-heading text-xl sm:text-2xl text-gold mb-6">
                {category.title}
              </h3>

              <ul className="space-y-3 font-body text-sm sm:text-base text-gray-400">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-gray-800 pb-2 transition duration-300 hover:text-white hover:translate-x-1"
                  >
                    {item}
                    <span className="text-gold">•</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Menu;