import { db } from "../firebase-config";
import { doc, getDoc, collection, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Tilføj metadata
export const addImageMetadata = async (room, title, price, size, order, imageUrl) => {
  try {
    const roomRef = doc(db, "rooms", room);
    const artworksRef = collection(roomRef, "artworks");
    const metadata = { title, price, size, order: parseInt(order), imageURL: imageUrl };
    await addDoc(artworksRef, metadata);
    console.log("Metadata tilføjet:", metadata);
  } catch (error) {
    console.error("Fejl ved tilføjelse af metadata:", error);
  }
};

// Hent ruminformation
export const fetchRoomInfo = async (roomName) => {
  try {
    const roomDoc = doc(db, "rooms", roomName);
    const roomSnapshot = await getDoc(roomDoc);
    return roomSnapshot.exists() ? roomSnapshot.data() : null;
  } catch (error) {
    console.error("Error fetching room info:", error);
    return null;
  }
};

// Hent artworks
export const fetchArtworks = async (roomName) => {
  try {
    const artworksCollection = collection(db, "rooms", roomName, "artworks");
    const artworksSnapshot = await getDocs(artworksCollection);
    return artworksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return [];
  }
};

// Slet et billede
export const deleteArtwork = async (roomName, artworkId) => {
  try {
    const artworkDoc = doc(db, "rooms", roomName, "artworks", artworkId);
    await deleteDoc(artworkDoc);
    console.log("Artwork slettet:", artworkId);
  } catch (error) {
    console.error("Fejl ved sletning af artwork:", error);
  }
};

// Opdater metadata for et billede
export const updateImageMetadata = async (roomName, artworkId, updatedData) => {
  try {
    // Reference til det specifikke dokument
    const artworkDoc = doc(db, "rooms", roomName, "artworks", artworkId);

    // Opdater dokumentet med de nye data
    await updateDoc(artworkDoc, updatedData);
    console.log("Metadata opdateret:", updatedData);
  } catch (error) {
    console.error("Fejl ved opdatering af metadata:", error);
  }
};

export const saveContactMessage = async (email, messageType, comment, title) => {
  try {
    const contactRef = collection(db, "contactMessages"); // Samling
    const newMessage = {
      email,
      messageType,
      comment,
      title,
      createdAt: new Date().toISOString(),
    };
    await addDoc(contactRef, newMessage);
    console.log("Kontaktbesked gemt:", newMessage);
  } catch (error) {
    console.error("Fejl ved gemning af kontaktbesked:", error);
    throw error;
  }
};

// Udstillinger

// Tilføj en ny udstilling
export const addExhibition = async (title, description, startDate, endDate, artistName, extraInfo, imageUrl) => {
  try {
    const exhibitionsRef = collection(db, "exhibitions");
    const newExhibition = {
      title,
      description,
      startDate,
      endDate,
      artistName,
      extraInfo,
      imageURL: imageUrl,
    };
    await addDoc(exhibitionsRef, newExhibition);
    console.log("Udstilling tilføjet:", newExhibition);
  } catch (error) {
    console.error("Fejl ved tilføjelse af udstilling:", error);
  }
};

// Hent alle udstillinger
export const fetchExhibitions = async () => {
  try {
    const exhibitionsCollection = collection(db, "exhibitions");
    const exhibitionsSnapshot = await getDocs(exhibitionsCollection);
    return exhibitionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Fejl ved hentning af udstillinger:", error);
    return [];
  }
};

// Opdater en udstilling
export const updateExhibition = async (exhibitionId, updatedData) => {
  try {
    const exhibitionDoc = doc(db, "exhibitions", exhibitionId);
    await updateDoc(exhibitionDoc, updatedData);
    console.log("Udstilling opdateret:", updatedData);
  } catch (error) {
    console.error("Fejl ved opdatering af udstilling:", error);
  }
};

// Slet en udstilling
export const deleteExhibition = async (exhibitionId) => {
  try {
    const exhibitionDoc = doc(db, "exhibitions", exhibitionId);
    await deleteDoc(exhibitionDoc);
    console.log("Udstilling slettet:", exhibitionId);
  } catch (error) {
    console.error("Fejl ved sletning af udstilling:", error);
  }
};