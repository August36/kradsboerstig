import PropTypes from "prop-types";
import ExhibitionCard from "./ExhibitionCard";

const ExhibitionList = ({ exhibitions, heading = "Udstillinger" }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 mb-10 px-4 sm:px-6 w-full overflow-hidden">
      <header className="text-left mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">{heading}</h1>
      </header>

      <div className="flex flex-col items-center space-y-4 w-full">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
      </div>
    </div>
  );
};

ExhibitionList.propTypes = {
  exhibitions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
      imageURL: PropTypes.string,
    })
  ).isRequired,
  heading: PropTypes.string,
};

export default ExhibitionList;
