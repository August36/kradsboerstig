import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase-config"; // Importer Firestore-config
import { collection, getDocs } from "firebase/firestore";
import '../index.css'

const roomOrder = ["Narrativ råkunst", "Macabre", "Men in black", "Hulemalerier", "Fuglemennesker"];

const Malerier = () => {
  const [rooms, setRooms] = useState([]); // State til data fra Firestore
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const roomsCollection = collection(db, "rooms");
        const roomSnapshot = await getDocs(roomsCollection);

        const roomData = roomSnapshot.docs
          .map((doc) => doc.data())
          .filter((room) => room.title !== "Plakater"); // Filtrér "Plakater" fra

        // Sortér rummene baseret på deres rækkefølge i roomOrder
        const sortedRooms = roomData.sort((a, b) => {
          const indexA = roomOrder.indexOf(a.title);
          const indexB = roomOrder.indexOf(b.title);

          // Hvis et element ikke findes i roomOrder, placér det sidst
          return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
        });

        setRooms(sortedRooms);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    // Returnér en tom side under loading
    return null;
  }

  return (
    <div className="container mx-auto p-4 mb-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Malerier</h1>
      <p className="mb-8">
        Her kan du se de malerier, jeg har til salg. Jeg har flere maleriske
        greb og serier, så de er inddelt i forskellige rum, som du kan besøge
        nedenfor.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rooms.map((room, index) => (
          <Link
            to={room.path}
            key={index}
            className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 group"
          >
            {/* Static Text for All Screens */}
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white text-xl font-bold flex items-center justify-center p-2 z-10">
              {room.title}
            </div>
            {/* Image */}
            <img
              src={room.imageURL}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
            />
            {/* Overlay Text for Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              {room.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Malerier;
