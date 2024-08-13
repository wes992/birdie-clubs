// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmL01Az-SbKyXpdQjGYmIYMUfJuLbmWMk",
  authDomain: "birdie-clubs.firebaseapp.com",
  databaseURL: "https://birdie-clubs-default-rtdb.firebaseio.com",
  projectId: "birdie-clubs",
  storageBucket: "birdie-clubs.appspot.com",
  messagingSenderId: "615735088457",
  appId: "1:615735088457:web:7d47b0594a72da0ea17698",
  measurementId: "G-L4RPEVVVTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(app);
