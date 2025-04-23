import PropTypes from "prop-types";

const ExhibitionCard = ({ exhibition }) => {
  const {
    title,
    description,
    imageURL,
    startDate,
    endDate,
    artistName,
  } = exhibition;

  // Helper to format ISO date strings to Danish locale (dd-MM-yyyy)
  const formatDate = (iso) => {
    if (!iso) return null;
    const date = new Date(iso);
    return new Intl.DateTimeFormat("da-DK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  const formattedStart = formatDate(startDate);
  const formattedEnd = formatDate(endDate);

  return (
    <div className="w-full p-4 bg-white shadow rounded">
      {imageURL && (
        <img
          src={imageURL}
          alt={title || "Udstillingsbillede"}
          className="mb-4 object-cover w-full h-auto rounded"
        />
      )}

      <h2 className="text-xl font-bold mb-2">{title}</h2>


      {description && <p className="text-gray-700 mb-2">{description}</p>}

      {(formattedStart || formattedEnd) && (
        <p className="text-sm text-gray-500">
          {formattedStart || ""} - {formattedEnd || ""}
        </p>
      )}
      
      {artistName && <p className="text-gray-600 mb-1">Kunstner: {artistName}</p>}
    </div>
  );
};

ExhibitionCard.propTypes = {
  exhibition: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    artistName: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
  }).isRequired,
};

export default ExhibitionCard;
