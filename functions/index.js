const functions = require("firebase-functions");
const admin = require("firebase-admin");
const rateLimit = require("express-rate-limit");
const express = require("express");

// Initialiser Firebase Admin SDK
admin.initializeApp();

// Opret en Express-app
const app = express();

// Rate limiting: Maksimalt 10 forespørgsler pr. minut pr. IP
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minut
  max: 10, // Maksimalt 10 forespørgsler pr. minut
  message: "For mange forespørgsler, prøv igen senere.",
});

// Anvend rate limiting på alle ruter
app.use(limiter);

// Middleware for at parse JSON-body
app.use(express.json());

// Cloud Function til at tilføje metadata
app.post("/add-metadata", async (req, res) => {
  const {room, title, price, size, imageUrl} = req.body;

  // Valider inputdata
  if (!room || !title || !price || !size || !imageUrl) {
    return res.status(400).send("Ugyldige data: Alle felter skal udfyldes.");
  }

  try {
    // Opret eller opdater dokumentet i Firestore
    const docRef = admin.firestore().collection("rooms").doc(room);
    await docRef.set({title, price, size, imageUrl}, {merge: true});

    res.status(200).send("Metadata tilføjet med succes.");
  } catch (error) {
    console.error("Fejl ved tilføjelse af metadata:", error);
    res.status(500).send("Serverfejl: Kunne ikke tilføje metadata.");
  }
});

// Eksportér Express-appen som en Firebase HTTPS-funktion
exports.api = functions.https.onRequest(app);
