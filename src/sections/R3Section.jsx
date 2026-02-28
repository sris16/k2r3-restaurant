function R3Section() {
  return (
    <section
      id="r3"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Mild Warm Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-cream">

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-6">
          R3 Café
        </h2>

        {/* Description */}
        <p className="font-body text-sm sm:text-base md:text-lg text-gray-200 mb-10 leading-relaxed">
          A cozy corner within K2 where handcrafted beverages,
          aromatic filter coffee, and delightful snacks create
          a warm café experience.
        </p>

        {/* Stylish Quote Instead of Button */}
        <div className="mt-6">
          <p className="font-heading text-lg sm:text-xl md:text-2xl text-gold italic tracking-wide drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            “Step in for coffee. Stay for the experience.”
          </p>
        </div>

      </div>
    </section>
  );
}

export default R3Section;