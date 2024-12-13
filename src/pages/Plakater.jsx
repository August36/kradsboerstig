import { useEffect, useState } from "react";
import { fetchRoomInfo, fetchArtworks } from "../utils/firestoreUtils"; // Importer funktionerne fra firestoreUtils
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";

const Plakater = () => {
  const [artworks, setArtworks] = useState([]);
  const [roomInfo, setRoomInfo] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Brug fetchRoomInfo og fetchArtworks fra firestoreUtils
        const roomData = await fetchRoomInfo("Plakater");
        const artworksData = await fetchArtworks("Plakater");

        // Sorter artworks efter `order` og opdater state
        const sortedArtworks = artworksData.sort((a, b) => a.order - b.order);

        setRoomInfo(roomData || { title: "Plakater", description: "" });
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
    return <p>Der er ingen plakater tilgængelige lige nu.</p>;
  }

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length);
  };

  const handleNextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % artworks.length);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{roomInfo.title}</h1>
      <p className="mb-2">{roomInfo.description || "Køb dine kunstplakater her!"}</p>
      <ImageGrid images={artworks} onImageClick={handleOpenModal} />

      {/* Modal Component */}
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

export default Plakater;
