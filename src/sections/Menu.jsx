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
      className={`fade-section ${isVisible ? "visible" : ""} py-24 px-6 bg-black`}
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
              className="group bg-luxuryBlack border border-gold/10 rounded-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 hover:border-gold hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)]"
            >
              <h3 className="font-heading text-xl sm:text-2xl text-gold mb-6">
                {category.title}
              </h3>

              <ul className="space-y-3 font-body text-sm sm:text-base text-gray-400">

                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-gray-800 pb-2 transition duration-300 group-hover:text-gray-200 hover:text-white"
                  >
                    {item}

                    <span className="text-gold transition-transform duration-300 group-hover:scale-110">
                      •
                    </span>
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