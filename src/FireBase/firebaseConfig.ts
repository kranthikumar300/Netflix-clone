// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9HUX7C6UITkybl4fPaglhjbZ2PLTQxDg",
  authDomain: "movie-streaming-app-4239c.firebaseapp.com",
  projectId: "movie-streaming-app-4239c",
  storageBucket: "movie-streaming-app-4239c.firebasestorage.app",
  messagingSenderId: "328301626738",
  appId: "1:328301626738:web:e3dadc2dbd2a30e50f09eb",
  measurementId: "G-J7CKR0MW6N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
