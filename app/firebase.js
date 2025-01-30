// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvyxArACzJX-50D0LUZhTLxwQpRGjowEE",
  authDomain: "crypto-capital-live.firebaseapp.com",
  projectId: "crypto-capital-live",
  storageBucket: "crypto-capital-live.firebasestorage.app",
  messagingSenderId: "226228832590",
  appId: "1:226228832590:web:44bb2af3cd6b32548c361f",
  measurementId: "G-0QSH9H7XD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;