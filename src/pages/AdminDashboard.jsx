import { useState, useEffect } from "react";
import {
  uploadImage
} from "../firebase-config"; // Importer billedupload-funktionen
import {
  addImageMetadata,
  fetchArtworks,
  deleteArtwork,
  updateImageMetadata
} from "../utils/firestoreUtils"; // Importer funktionerne

const AdminDashboard = () => {
  const [artworks, setArtworks] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("HuleMalerier"); // Standardrum
  const [editingArtwork, setEditingArtwork] = useState(null); // Artwork der redigeres
  const [updatedFields, setUpdatedFields] = useState({}); // Felter til opdatering
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null); // Til billedupload

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        setLoading(true);
        const data = await fetchArtworks(selectedRoom);
        // Sorter billeder efter 'order'
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
        imageURL: imageUrl
      };
      await addImageMetadata(selectedRoom, metadata.title, metadata.price, metadata.size, metadata.order, metadata.imageURL);
      alert("Billede og metadata uploadet.");
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
        setArtworks((prev) => prev.filter((artwork) => artwork.id !== artworkId));
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
          artwork.id === editingArtwork.id ? { ...artwork, ...updatedFields } : artwork
        )
      );
      alert("Metadata opdateret.");
      setEditingArtwork(null);
    } catch (error) {
      console.error("Fejl ved opdatering af metadata:", error);
    }
  };

  const handleCloseEditModal = () => {
    setEditingArtwork(null);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Upload Billede og Metadata</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Titel"
              value={updatedFields.title || ""}
              onChange={(e) => setUpdatedFields((prev) => ({ ...prev, title: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Størrelse"
              value={updatedFields.size || ""}
              onChange={(e) => setUpdatedFields((prev) => ({ ...prev, size: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Pris"
              value={updatedFields.price || ""}
              onChange={(e) => setUpdatedFields((prev) => ({ ...prev, price: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Rækkefølge (order)"
              value={updatedFields.order || ""}
              onChange={(e) => setUpdatedFields((prev) => ({ ...prev, order: parseInt(e.target.value) }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
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

          <div className="flex justify-end">
            <button
              onClick={handleImageUpload}
              disabled={loading} // Deaktiver knappen under upload
              className={`bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Uploader..." : "Upload Billede og Metadata"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Administrer billeder</h1>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Slet eller opdater data</h2>

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
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Slet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {editingArtwork && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-4">Rediger Metadata</h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Titel"
                  value={updatedFields.title || ""}
                  onChange={(e) => setUpdatedFields((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Størrelse"
                  value={updatedFields.size || ""}
                  onChange={(e) => setUpdatedFields((prev) => ({ ...prev, size: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Pris"
                  value={updatedFields.price || ""}
                  onChange={(e) => setUpdatedFields((prev) => ({ ...prev, price: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Rækkefølge (order)"
                  value={updatedFields.order || ""}
                  onChange={(e) => setUpdatedFields((prev) => ({ ...prev, order: parseInt(e.target.value) }))}
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
      </div>
    </>
  );
};

export default AdminDashboard;
