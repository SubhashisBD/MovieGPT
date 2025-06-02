// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB__-tsIYOGhZSny0nWssMQFQ5IokHu654",
  authDomain: "moviegpt-c72a9.firebaseapp.com",
  projectId: "moviegpt-c72a9",
  storageBucket: "moviegpt-c72a9.firebasestorage.app",
  messagingSenderId: "921861919553",
  appId: "1:921861919553:web:a0ee35053e793cb5de47c0",
  measurementId: "G-5TFWELCYLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();