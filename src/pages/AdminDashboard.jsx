import { useState, useEffect } from "react";
import { uploadImage } from "../firebase-config"; // Importer billedupload-funktionen
import {
  addImageMetadata,
  fetchArtworks,
  deleteArtwork,
  updateImageMetadata,
  fetchExhibitions,
  addExhibition,
  deleteExhibition,
} from "../utils/firestoreUtils"; // Importer funktionerne

const AdminDashboard = () => {
  const [artworks, setArtworks] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("HuleMalerier"); // Standardrum
  const [editingArtwork, setEditingArtwork] = useState(null); // Artwork der redigeres
  const [updatedFields, setUpdatedFields] = useState({}); // Felter til opdatering
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null); // Til billedupload
  const [exhibitions, setExhibitions] = useState([]);
  const [newExhibition, setNewExhibition] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    artistName: "",
    extraInfo: "",
  });
  const [exhibitionImage, setExhibitionImage] = useState(null);

  useEffect(() => {
    const loadExhibitions = async () => {
      try {
        const data = await fetchExhibitions();
        console.log("Hentede udstillinger fra Firestore:", data); // Debug
        setExhibitions(data);
      } catch (error) {
        console.error("Fejl ved hentning af udstillinger:", error);
      }
    };
  
    loadExhibitions();
  }, []);
  

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        setLoading(true);
        const data = await fetchArtworks(selectedRoom);
        // Sorter billeder efter order
        const sortedArtworks = data.sort((a, b) => a.order - b.order);
        setArtworks(sortedArtworks);
      } catch (error) {
        console.error("Error loading artworks:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArtworks();
  }, [selectedRoom]);

  const handleImageUpload = async () => {
    if (!imageFile) {
      alert("Du skal vælge en fil, før du uploader.");
      return;
    }

    try {
      setLoading(true);
      const imageUrl = await uploadImage(imageFile, selectedRoom);
      const metadata = {
        title: updatedFields.title || "Untitled",
        price: updatedFields.price || "0",
        size: updatedFields.size || "Unknown",
        order: updatedFields.order || 0,
        imageURL: imageUrl,
      };
      await addImageMetadata(
        selectedRoom,
        metadata.title,
        metadata.price,
        metadata.size,
        metadata.order,
        metadata.imageURL
      );
      alert("Billede og metadata uploadet.");
      setUpdatedFields({});
      setImageFile(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (artworkId) => {
    if (window.confirm("Er du sikker på, at du vil slette dette billede?")) {
      try {
        await deleteArtwork(selectedRoom, artworkId);
        setArtworks((prev) =>
          prev.filter((artwork) => artwork.id !== artworkId)
        );
        alert("Billedet er blevet slettet.");
      } catch (error) {
        console.error("Fejl ved sletning af billede:", error);
      }
    }
  };

  const handleEdit = (artwork) => {
    setEditingArtwork(artwork);
    setUpdatedFields({ ...artwork }); // Forudfyld felterne med eksisterende data
  };

  const handleUpdate = async () => {
    try {
      await updateImageMetadata(selectedRoom, editingArtwork.id, updatedFields);
      setArtworks((prev) =>
        prev.map((artwork) =>
          artwork.id === editingArtwork.id
            ? { ...artwork, ...updatedFields }
            : artwork
        )
      );
      alert("Metadata opdateret.");
      setEditingArtwork(null);
    } catch (error) {
      console.error("Fejl ved opdatering af metadata:", error);
    }
  };

  const handleExhibitionUpload = async () => {
    if (!exhibitionImage) {
      alert("Vælg en fil før upload.");
      return;
    }

    try {
      setLoading(true);
      const imageUrl = await uploadImage(exhibitionImage, "exhibitions"); // Upload billede til exhibitions-mappen
      await addExhibition(
        newExhibition.title,
        newExhibition.description,
        newExhibition.startDate,
        newExhibition.endDate,
        newExhibition.artistName,
        newExhibition.extraInfo,
        imageUrl
      );
      alert("Udstilling uploadet.");
      setNewExhibition({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        artistName: "",
        extraInfo: "",
      });
      setExhibitionImage(null);
    } catch (error) {
      console.error("Fejl ved upload:", error);
    } finally {
      setLoading(false);
    }
  };

  //Delete exhibition
  const handleDeleteExhibition = async (exhibitionId) => {
    if (window.confirm("Er du sikker på, at du vil slette denne udstilling?")) {
      try {
        await deleteExhibition(exhibitionId);
        setExhibitions((prev) =>
          prev.filter((exhibition) => exhibition.id !== exhibitionId)
        );
        alert("Udstillingen er blevet slettet.");
      } catch (error) {
        console.error("Fejl ved sletning af udstilling:", error);
      }
    }
  };
  

  const handleCloseEditModal = () => {
    setEditingArtwork(null);
  };

  return (
    <>
      {/* Admin dashboard + rumvælger */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Admin dashboard
        </h1>
        <p className="font-bold text-xl">
          Velkommen til dit dashboard!
        </p>
        <p className="mb-6">
          Her har du mulighed for at uploade nye billeder og metadata, samt
          redigere og slette i de eksisterende.
        </p>
        {/* Fælles rumvælger */}
        <div className="mb-6">
          <label
            htmlFor="room-select"
            className="block text-lg font-medium text-gray-700 mb-1"
          >
            Vælg det rum du vil arbejde med:
          </label>
          <select
            id="room-select"
            onChange={(e) => setSelectedRoom(e.target.value)}
            value={selectedRoom}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Vælg et rum
            </option>
            <option value="HuleMalerier">Hulemalerier</option>
            <option value="Fuglemennesker">Fuglemennesker</option>
            <option value="NarrativRaakunst">Narrativ råkunst</option>
            <option value="Macabre">Macabre</option>
            <option value="MenInBlack">Men in black</option>
            <option value="Plakater">Plakater</option>
          </select>
        </div>
      </div>
  
      {/* Upload nye billeder */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Upload billeder
        </h2>
        <div className="space-y-4 mb-5">
          <input
            type="text"
            placeholder="Titel"
            value={updatedFields.title || ""}
            onChange={(e) =>
              setUpdatedFields((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Størrelse"
            value={updatedFields.size || ""}
            onChange={(e) =>
              setUpdatedFields((prev) => ({ ...prev, size: e.target.value }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Pris"
            value={updatedFields.price || ""}
            onChange={(e) =>
              setUpdatedFields((prev) => ({ ...prev, price: e.target.value }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Rækkefølge (order)"
            value={updatedFields.order || ""}
            onChange={(e) =>
              setUpdatedFields((prev) => ({
                ...prev,
                order: parseInt(e.target.value),
              }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div className="flex justify-end">
          <button
            onClick={handleImageUpload}
            disabled={loading} // Deaktiver knappen under upload
            className={`bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Uploader..." : "Upload billede og metadata"}
          </button>
        </div>
      </div>
  
      {/* Administrer billeder */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Administrer billeder
        </h1>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Slet eller opdater data
          </h2>
          {loading ? (
            <p>Indlæser billeder...</p>
          ) : artworks.length === 0 ? (
            <p>Der er ingen billeder i dette rum.</p>
          ) : (
            <div className="space-y-4">
              {artworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="border-2 p-4 flex justify-between items-center rounded-lg"
                >
                  <div>
                    <p className="font-bold">{artwork.title}</p>
                    <p>Størrelse: {artwork.size}</p>
                    <p>Pris: {artwork.price} DKK</p>
                    <p>Rækkefølge: {artwork.order}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(artwork)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                    >
                      Rediger
                    </button>
                    <button
                      onClick={() => handleDelete(artwork.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 sm: mt-1"
                    >
                      Slet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  
      {/* Eksisterende Udstillinger */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    Eksisterende Udstillinger
  </h2>
  {exhibitions.length === 0 ? (
    <p>Ingen udstillinger fundet.</p>
  ) : (
    exhibitions.map((exhibition) => (
      <div key={exhibition.id} className="border-2 p-4 rounded-lg mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{exhibition.title}</h3>
          <p>{exhibition.description}</p>
          <p><strong>Periode:</strong> {exhibition.startDate} - {exhibition.endDate}</p>
          <p><strong>Kunstner:</strong> {exhibition.artistName}</p>
        </div>
        <button
          onClick={() => handleDeleteExhibition(exhibition.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Slet
        </button>
      </div>
    ))
  )}
</div>

  
      {/* Tilføj ny udstilling */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tilføj ny udstilling
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Titel"
            value={newExhibition.title}
            onChange={(e) =>
              setNewExhibition({
                ...newExhibition,
                title: e.target.value,
              })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Beskrivelse"
            value={newExhibition.description}
            onChange={(e) =>
              setNewExhibition({
                ...newExhibition,
                description: e.target.value,
              })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            placeholder="Startdato"
            value={newExhibition.startDate}
            onChange={(e) =>
              setNewExhibition({
                ...newExhibition,
                startDate: e.target.value,
              })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="date"
            placeholder="Slutdato"
            value={newExhibition.endDate}
            onChange={(e) =>
              setNewExhibition({
                ...newExhibition,
                endDate: e.target.value,
              })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Kunstner"
            value={newExhibition.artistName}
            onChange={(e) =>
              setNewExhibition({
                ...newExhibition,
                artistName: e.target.value,
              })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="file"
            onChange={(e) => setExhibitionImage(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handleExhibitionUpload}
          disabled={loading}
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 mt-4"
        >
          {loading ? "Uploader..." : "Upload Udstilling"}
        </button>
      </div>
  
      {/* Modal til redigering af eksisterende billede */}
      {editingArtwork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Rediger Metadata</h2>
  
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Titel"
                value={updatedFields.title || ""}
                onChange={(e) =>
                  setUpdatedFields((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Størrelse"
                value={updatedFields.size || ""}
                onChange={(e) =>
                  setUpdatedFields((prev) => ({
                    ...prev,
                    size: e.target.value,
                  }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Pris"
                value={updatedFields.price || ""}
                onChange={(e) =>
                  setUpdatedFields((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Rækkefølge (order)"
                value={updatedFields.order || ""}
                onChange={(e) =>
                  setUpdatedFields((prev) => ({
                    ...prev,
                    order: parseInt(e.target.value),
                  }))
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleCloseEditModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Annuller
              </button>
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Gem Ændringer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
};

export default AdminDashboard;
