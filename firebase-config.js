import { getFirestore } from "firebase/firestore";

// Initialize Firestore
const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRT79EVc8iu3p8stUUe6Ij4Cx5EvxHSM8",
  authDomain: "friendlounge-ad2c4.firebaseapp.com",
  projectId: "friendlounge-ad2c4",
  storageBucket: "friendlounge-ad2c4.firebasestorage.app",
  messagingSenderId: "1045896084672",
  appId: "1:1045896084672:web:3d8fc055b11a3feee98125",
  measurementId: "G-1VP5KMSB76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);