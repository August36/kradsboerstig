import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialisering af Firebase appen
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// Firebase Storage
export const storage = getStorage(app);

// Funktion til at uploade billede til Firebase Storage
export const uploadImage = async (file, room) => {
  const storageRef = ref(storage, `images/${room}/${file.name}`); // Reference til billede

  console.log("Uploader billede til Storage med path:", storageRef.fullPath);

  try {
    // Upload billede
    const snapshot = await uploadBytes(storageRef, file);
    console.log("Billede uploadet:", snapshot);

    // Få download-URL
    const downloadURL = await getDownloadURL(storageRef);
    console.log("Download URL:", downloadURL);

    return downloadURL;
  } catch (error) {
    console.error("Fejl ved billede upload:", error);
    throw error; // Sørg for at kaste fejlen videre
  }
};
