import PropTypes from "prop-types";

const Hero = ({ image }) => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover mb-20"  // Adjust mt-16 based on your navbar height
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full flex-col text-center p-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
          Kell Jarner
        </h1>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl mt-4 drop-shadow-lg">
          Malerier af Kell Jarner
        </h2>
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Hero;
