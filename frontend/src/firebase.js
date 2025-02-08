// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMD4ihYP3AXlnMXpjGKMj60Chbl39GrOU",
  authDomain: "sparkhacks-2025-6f939.firebaseapp.com",
  projectId: "sparkhacks-2025-6f939",
  storageBucket: "sparkhacks-2025-6f939.firebasestorage.app",
  messagingSenderId: "202513042686",
  appId: "1:202513042686:web:c3aff256f2e9695f87a9af",
  measurementId: "G-MMGLYFP9M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, analytics, storage };