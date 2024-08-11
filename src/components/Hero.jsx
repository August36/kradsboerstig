import PropTypes from "prop-types";

const Hero = ({ image }) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full flex-col">
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          Krasbørstig kunst
        </h1>
        <h2 className="text-white text-2xl md:text-3xl mt-4">
          Malerier af Kell Jarner
        </h2>
      </div>
    </div>
  );
};

// Define PropTypes for the component
Hero.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Hero;
