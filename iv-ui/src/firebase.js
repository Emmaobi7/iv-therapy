// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "foodie-fetch.firebaseapp.com",
  projectId: "foodie-fetch",
  storageBucket: "foodie-fetch.firebasestorage.app",
  messagingSenderId: "5009810125",
  appId: "1:5009810125:web:1151578dfe2a68ed6d3f84",
  measurementId: "G-9LGYSG15MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
