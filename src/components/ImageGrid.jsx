import PropTypes from "prop-types";

const ImageGrid = ({ images, onImageClick }) => {
  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-12">
      {sortedImages.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden bg-gray-100 pb-2 shadow-lg cursor-pointer transform transition-all duration-300 group sm:hover:scale-105 sm:hover:shadow-xl"
          onClick={() => onImageClick(sortedImages.findIndex((img) => img.id === image.id))}
        >
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
            <img
              src={image.imageURL || "fallback-image-url.png"}
              alt={image.title || "Billede"}
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-2 text-gray-300">Klik for at se</p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold transition-colors duration-200 sm:group-hover:text-black">
              {image.title || "Ingen titel"}
            </p>
            <p className="text-md text-gray-600">{image.size || "Ukendt størrelse"}</p>
            <p className="text-md text-gray-800">{image.price || "Pris ikke angivet"} DKK</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Definer PropTypes for komponenten
ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Sikrer unik nøgle
      imageURL: PropTypes.string.isRequired, // URL til billede
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired, // Krævet for korrekt sortering
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired, // Funktion til håndtering af klik
};

export default ImageGrid;
