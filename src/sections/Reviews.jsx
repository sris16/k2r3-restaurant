import useFadeIn from "../hooks/useFadeIn";

function Reviews() {
  const [ref, isVisible] = useFadeIn();

  const reviews = [
    {
      name: "Arun Kumar",
      rating: 5,
      text: "Amazing vegetarian food! The taste and ambiance are top-notch.",
    },
    {
      name: "Divya S",
      rating: 5,
      text: "Authentic Chettinad flavors. Loved the mutton curry!",
    },
    {
      name: "Rahul M",
      rating: 4,
      text: "Great service and cozy atmosphere. Highly recommended.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : ""} py-24 px-6 bg-black`}
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="font-heading text-4xl md:text-5xl text-gold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-luxuryBlack border border-gold/10 rounded-xl p-6 transition hover:-translate-y-3 hover:border-gold hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
            >
              <h3 className="text-white font-semibold mb-2">
                {review.name}
              </h3>

              <div className="text-gold mb-3">
                {"★".repeat(review.rating)}
              </div>

              <p className="text-gray-400 text-sm">
                {review.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;