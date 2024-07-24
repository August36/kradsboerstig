const Hero = ({ image }) => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl md:text-6xl font-bold">Krasbørstig kunst</h1>
      </div>
    </div>
  );
};

export default Hero;