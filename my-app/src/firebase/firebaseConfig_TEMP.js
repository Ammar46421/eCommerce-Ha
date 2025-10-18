// ✅ Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF3TU_YJ9Fi9Fii2EbzlGmWgMEmK37iOc",
  authDomain: "e-commerce-auth-9bf12.firebaseapp.com",
  projectId: "e-commerce-auth-9bf12",
  storageBucket: "e-commerce-auth-9bf12.firebasestorage.app",
  messagingSenderId: "296063537317",
  appId: "1:296063537317:web:de6a66dd8cff8ad8ddbd4c",
  measurementId: "G-WDD5JH41HD"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
