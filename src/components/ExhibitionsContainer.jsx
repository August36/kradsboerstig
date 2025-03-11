import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchExhibitions } from "../utils/firestoreUtils";
import ExhibitionList from "./ExhibitionList";

const ExhibitionsContainer = ({ limit = null, heading = "Udstillinger" }) => {
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchExhibitions();
        console.log("Hentede udstillinger:", data);

        const sorted = [...data].sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );

        const finalData = limit ? sorted.slice(0, limit) : sorted;

        setExhibitions(finalData);
      } catch (error) {
        console.error("Fejl ved hentning af udstillinger:", error);
        setExhibitions([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [limit]);

  if (loading) {
    return (
      <p></p>
    );
  }

  if (exhibitions.length === 0) {
    return <p></p>;
  }

  return (
    <ExhibitionList exhibitions={exhibitions} heading={heading} />
  );
};

ExhibitionsContainer.propTypes = {
  limit: PropTypes.number,
  heading: PropTypes.string,
};

export default ExhibitionsContainer;
