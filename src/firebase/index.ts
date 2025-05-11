// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBauouilDESzwxFJdIfMHGB0ZfX5MPdxQQ",
  authDomain: "njndex-ecommerce.firebaseapp.com",
  projectId: "njndex-ecommerce",
  storageBucket: "njndex-ecommerce.firebasestorage.app",
  messagingSenderId: "332250625766",
  appId: "1:332250625766:web:5b5146808872f45cfb2d27",
  measurementId: "G-FE3DZ0XPRJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);