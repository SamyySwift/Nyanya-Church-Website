const GrainyBackground = ({ bgImg, content }) => {
  return (
    <div className="relative h-auto bg-gradient-to-br from-[#3b4b63] via-[#666564] to-[#2b2a29]">
      {/* Grainy Overlay - Ensure it doesn't block interactions */}
      <div
        className="absolute inset-0 opacity-60 mix-blend-overlay bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Content - Make sure it is interactive */}
      <div className="relative h-full">{content}</div>
    </div>
  );
};

export default GrainyBackground;
