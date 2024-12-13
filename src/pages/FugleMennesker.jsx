import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import Breadcrumbs from "../components/Breadcrumbs";
import { useEffect, useState } from "react";
import { fetchRoomInfo, fetchArtworks } from "../utils/firestoreUtils";

const Fuglemennesker = () => {
  const [artworks, setArtworks] = useState([]);
  const [roomInfo, setRoomInfo] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomData = await fetchRoomInfo("Fuglemennesker");
        const artworksData = await fetchArtworks("Fuglemennesker");
        
        // Sorter artworks efter order
        const sortedArtworks = artworksData.sort((a, b) => a.order - b.order);

        setRoomInfo(roomData || { title: "Fuglemennesker", description: "" });
        setArtworks(sortedArtworks);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Indlæser...</p>;
  }

  if (artworks.length === 0) {
    return <p>Der er ingen værker tilgængelige i dette rum.</p>;
  }

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    console.log("Navigating to previous image");
    setModalImageIndex((prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length);
  };

  const handleNextImage = () => {
    console.log("Navigating to next image");
    setModalImageIndex((prevIndex) => (prevIndex + 1) % artworks.length);
  };

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold mb-4">{roomInfo.title}</h1>
      <p className="mb-8">{roomInfo.description}</p>
      <ImageGrid images={artworks} onImageClick={handleOpenModal} />

      <Modal
        isOpen={modalImageIndex !== null}
        images={artworks}
        modalImageIndex={modalImageIndex}
        onClose={handleCloseModal}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </div>
  );
};

export default Fuglemennesker;
