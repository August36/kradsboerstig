import { useEffect, useState } from "react";
import { fetchRoomInfo, fetchArtworks } from "../utils/firestoreUtils"; // Importer funktionerne
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import Breadcrumbs from "../components/Breadcrumbs";

const NarrativRaakunst = () => {
  const [artworks, setArtworks] = useState([]);
  const [roomInfo, setRoomInfo] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Brug fetchRoomInfo og fetchArtworks fra firestoreUtils
        const roomData = await fetchRoomInfo("NarrativRaakunst");
        const artworksData = await fetchArtworks("NarrativRaakunst");

        // Sorter artworks efter `order` og opdater state
        const sortedArtworks = artworksData.sort((a, b) => a.order - b.order);

        setRoomInfo(roomData || { title: "Narrativ råkunst", description: "" });
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
    setModalImageIndex((prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length);
  };

  const handleNextImage = () => {
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

export default NarrativRaakunst;
