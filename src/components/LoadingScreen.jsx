function LoadingScreen({ text }) {
  const isNonVeg = text === "A²CM";

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isNonVeg ? "bg-[#0f0a06]" : "bg-luxuryBlack"
      }`}
    >
      <h1
        className={`
          font-heading
          text-5xl md:text-7xl
          tracking-widest
          animate-fadeScale
          ${
            isNonVeg
              ? "text-[#b8860b] drop-shadow-[0_0_25px_rgba(184,134,11,0.6)]"
              : "text-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]"
          }
        `}
      >
        {text}
      </h1>
    </div>
  );
}

export default LoadingScreen;