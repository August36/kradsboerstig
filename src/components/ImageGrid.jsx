
const ImageGrid = ({ images, onImageClick }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => onImageClick(index)}
          >
            <img
              src={src}
              alt={`Portrait ${index + 1}`}
              className="object-cover w-full h-48 md:h-56 lg:h-80 rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="p-2">Click to view</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageGrid;