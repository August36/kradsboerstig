import PropTypes from "prop-types";

const Hero = ({ image }) => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover mb-20" // Full-height hero
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-0" />
      
      
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-80 text-white p-6 rounded-md flex flex-col items-center justify-center mb-60 max-w-4xl mx-auto">
          <h1 className="text-gray-500 text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
            Krasbørstig kunst
          </h1>
          <h2 className="text-gray-500 text-xl sm:text-2xl md:text-3xl mt-4 drop-shadow-lg">
            Malerier af Kell Jarner
          </h2>
        </div>
      </div> */}
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Hero;
