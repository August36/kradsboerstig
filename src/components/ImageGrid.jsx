import PropTypes from 'prop-types';

const ImageGrid = ({ images, onImageClick }) => {
  // Sorter billeder baseret på `order`-feltet
  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-12">
      {sortedImages.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-gray-100 pb-2 shadow-lg cursor-pointer transform transition-all duration-300 group sm:hover:scale-105 sm:hover:shadow-xl"
          onClick={() => onImageClick(index)}
        >
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
            <img
              src={image.imageURL} // Opdateret til imageURL
              alt={image.title}
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-2 text-gray-300">Klik for at se</p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold transition-colors duration-200 sm:group-hover:text-black">{image.title}</p>
            <p className="text-md text-gray-600">{image.size}</p>
            <p className="text-md text-gray-800">{image.price} DKK</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Define PropTypes for the component
ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageURL: PropTypes.string.isRequired, // Opdateret til imageURL
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired, // Order-feltet
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired
};

export default ImageGrid;
