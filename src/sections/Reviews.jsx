import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";

function Reviews() {
  const [ref, isVisible] = useFadeIn();
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Ravina Suresh",
      rating: 5,
      text: "Good service good food nice restaurant Nambi vaanga santhosama ponga🙏.",
      time: "2 months ago",
    },
    {
      name: "Nivetha 22",
      rating: 5,
      text: "The food was delicious and appearance was very clean and good..... 😎",
      time: "3 months ago",
    },
    {
      name: "Archana S",
      rating: 4,
      text: "Super ambience good food nice experience.",
      time: "3 weeks ago",
    },
  ];

  const totalReviews = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalReviews);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalReviews]);

  return (
    <section
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : ""} py-24 px-6 bg-black`}
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="font-heading text-4xl md:text-5xl text-gold mb-4">
          What Our Customers Say
        </h2>

        {/* ⭐ UPDATED RATING SUMMARY */}
        <div className="flex items-center justify-center gap-2 text-gold mb-12">
          <Star className="fill-gold text-gold" size={20} />
          <span className="text-lg font-medium">
            4.3 • 43 Reviews on Google
          </span>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-luxuryBlack border border-gold/10 rounded-2xl p-8 text-left transition hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]">

                  {/* Top */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-white font-semibold">
                        {review.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {review.time}
                      </p>
                    </div>
                  </div>

                  {/* (UNCHANGED) Stars */}
                  <div className="text-gold text-lg mb-3">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {review.text}
                  </p>

                  {/* Label */}
                  <p className="text-xs text-gray-500">
                    Reviewed on Google
                  </p>

                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-gold" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

        </div>

        {/* ⭐ UPDATED CTA BUTTON */}
        <div className="mt-12">
          <a
            href="https://www.google.com/maps/place/K2R3+pure+veg+restaurant/@9.8924034,78.036221,17z/data=!4m8!3m7!1s0x3b00cf0070651f95:0xcdccc38d36a2f8e1!8m2!3d9.8924034!4d78.036221!9m1!1b1!16s%2Fg%2F11yqdp5msz?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold border border-gold px-6 py-2 rounded-full hover:bg-gold hover:text-black transition"
          >
            <Star size={18} className="fill-gold" />
            View More Reviews on Google →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Reviews;