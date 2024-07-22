const NewsArticle = ({ image, title, content }) => {
  return (
    <div className="flex flex-col md:flex-row mb-8">
      <img src={image} alt={title} className="w-full md:w-1/2 h-48 md:h-auto object-cover" />
      <div className="p-4 md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
