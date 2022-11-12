// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkPsQWh0NEQ1WlzXZcy86K1anEMZFASzM",
  authDomain: "project-1-a46e1.firebaseapp.com",
  projectId: "project-1-a46e1",
  storageBucket: "project-1-a46e1.appspot.com",
  messagingSenderId: "896790269075",
  appId: "1:896790269075:web:bbebf4fba44587a1091166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
