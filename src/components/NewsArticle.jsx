import PropTypes from 'prop-types';

const NewsArticle = ({ image, title, content }) => {
  return (
    <div className="border-b-4 pb-5 mt-5 flex justify-center">
      <div className="flex flex-col md:flex-row items-start w-full max-w-5xl p-4 space-y-4 md:space-y-0 md:space-x-5">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-left">
            {title}
          </h2>
          <p className="text-base md:text-lg text-left text-gray-700">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

NewsArticle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewsArticle;
