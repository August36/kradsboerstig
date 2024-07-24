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
        className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
        onClick={handlePrevImage}
      >
        &lt;
      </button>
      <button
        className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
        onClick={handleNextImage}
      >
        &gt;
      </button>
    </>
  );
};

export default NavigationArrows;
