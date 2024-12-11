import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config"; // Firestore-konfiguration
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import Breadcrumbs from "../components/Breadcrumbs";

const Macabre = () => {
  const [artworks, setArtworks] = useState([]);
  const [roomInfo, setRoomInfo] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        // Hent artworks fra Firestore
        const artworksCollection = collection(db, "rooms", "Macabre", "artworks");
        const artworksSnapshot = await getDocs(artworksCollection);
        const artworksData = artworksSnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => a.order - b.order); // Sorter efter 'order'
        setArtworks(artworksData);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRoomInfo = async () => {
      try {
        // Hent ruminformation (titel og beskrivelse) fra Firestore
        const roomDoc = doc(db, "rooms", "Macabre");
        const roomSnapshot = await getDoc(roomDoc);
        if (roomSnapshot.exists()) {
          setRoomInfo(roomSnapshot.data());
        }
      } catch (error) {
        console.error("Error fetching room info:", error);
      }
    };

    fetchArtworks();
    fetchRoomInfo();
  }, []);

  if (loading) {
    // Returnér en blank side under loading
    return null;
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
      <h1 className="text-3xl font-bold mb-4">{roomInfo.title || "Macabre"}</h1>
      <p className="mb-8">{roomInfo.description || "Dette er en serie makabre malerier..."}</p>
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

export default Macabre;
