import { useState } from "react";
import { uploadImage } from "../firebase-config"; // Importer billedupload-funktionen
import { addImageMetadata } from "../utils/firestoreUtils"; // Importer funktionen til at gemme metadata

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [room, setRoom] = useState(""); // F.eks. "HuleMalerier"
  const [order, setOrder] = useState(""); // Ny state til rækkefølge
  const [imageFile, setImageFile] = useState(null); // Til at gemme billedefil
  const [loading, setLoading] = useState(false); // Til at indikere upload-status

  // Funktion til validering af input
  const validateInput = () => {
    const errors = [];
    if (!title.trim()) errors.push("Titel er påkrævet.");
    if (!price.trim() || isNaN(price) || parseFloat(price) <= 0)
      errors.push("Pris skal være et gyldigt tal større end 0.");
    if (!size.trim()) errors.push("Størrelse er påkrævet.");
    if (!room.trim()) errors.push("Du skal vælge et rum.");
    if (!order.trim() || isNaN(order)) errors.push("Rækkefølge skal være et gyldigt tal.");
    if (!imageFile) errors.push("Du skal uploade et billede.");

    return errors;
  };

  // Funktion til at håndtere billedupload og metadata
  const handleImageUpload = async () => {
    const errors = validateInput();
    if (errors.length > 0) {
      alert(errors.join("\n")); // Vis fejl i en alert (du kan tilføje bedre visning senere)
      return;
    }

    setLoading(true); // Start loading

    try {
      const uploadedImageUrl = await uploadImage(imageFile, room);
      if (uploadedImageUrl) {
        await addImageMetadata(room, title, price, size, order, uploadedImageUrl);
        alert("Billede og metadata er blevet uploadet!");
        // Nulstil felterne efter succes
        setTitle("");
        setPrice("");
        setSize("");
        setRoom("");
        setOrder("");
        setImageFile(null);
      }
    } catch (error) {
      console.error("Fejl under upload:", error);
      alert("Der opstod en fejl under upload. Prøv igen.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>


      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Upload Billede og Metadata
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Størrelse"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Pris"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Rækkefølge (order)"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            onChange={(e) => setRoom(e.target.value)}
            value={room}
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
  );
};

export default AdminDashboard;
