import PropTypes from "prop-types";

const Hero = ({ image }) => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full flex-col text-center p-6">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
          Kell Jarner
        </h1>
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl mt-4 drop-shadow-lg">
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
