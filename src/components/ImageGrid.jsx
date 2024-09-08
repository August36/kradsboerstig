import PropTypes from 'prop-types';

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
          onClick={() => onImageClick(index)}
        >
          <img
            src={image.src}
            alt={image.title}
            className="object-cover w-full h-48 md:h-56 lg:h-80 rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="p-2 text-gray-300">Click to view</p>
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">{image.title}</p>
            <p className="text-sm text-gray-600">{image.size}</p>
            <p className="text-sm text-gray-800">{image.price} DKK</p>
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
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired
};

export default ImageGrid;
