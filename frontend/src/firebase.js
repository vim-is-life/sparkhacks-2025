// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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