import PropTypes from 'prop-types';

const NavigationArrows = ({ currentIndex, totalImages, setModalImageIndex }) => {
  const handleNextImage = (e) => {
    e.stopPropagation();
    setModalImageIndex((currentIndex + 1) % totalImages);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setModalImageIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  return (
    <>
      <button
        className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full z-20"
        onClick={handlePrevImage}
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <button
        className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full z-20"
        onClick={handleNextImage}
        aria-label="Next Image"
      >
        &gt;
      </button>
    </>
  );
};

NavigationArrows.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
  setModalImageIndex: PropTypes.func.isRequired,
};

export default NavigationArrows;
