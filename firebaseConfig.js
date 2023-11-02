// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6pNXxy7BSyajZ-PCbhV2OjlMhFddzMls",
  authDomain: "fir-frontend-3fefd.firebaseapp.com",
  projectId: "fir-frontend-3fefd",
  storageBucket: "fir-frontend-3fefd.appspot.com",
  messagingSenderId: "225738480805",
  appId: "1:225738480805:web:0588c65d7d59c95a8b414c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);