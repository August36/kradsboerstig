import { db } from "../firebase-config";
import { doc, collection, addDoc } from "firebase/firestore";

export const addImageMetadata = async (room, title, price, size, order, imageUrl) => {
  try {
    console.log("Starter tilføjelse af metadata...");
    const roomRef = doc(db, "rooms", room);
    const artworksRef = collection(roomRef, "artworks");

    const metadata = {
      title,
      price,
      size,
      order: parseInt(order), // Konverter order til et tal
      imageURL: imageUrl,
    };

    await addDoc(artworksRef, metadata);
    console.log("Metadata tilføjet:", metadata);
  } catch (error) {
    console.error("Fejl ved tilføjelse af metadata:", error);
  }
};
