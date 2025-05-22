// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaNhhe4YKYK4_O4HuAgN_Yt_qWt2CYJlc",
  authDomain: "pokeapi2-9f54e.firebaseapp.com",
  projectId: "pokeapi2-9f54e",
  storageBucket: "pokeapi2-9f54e.firebasestorage.app",
  messagingSenderId: "922027053804",
  appId: "1:922027053804:web:c4ab3d21731e468a1c0bc9",
  measurementId: "G-F23MREVKYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };