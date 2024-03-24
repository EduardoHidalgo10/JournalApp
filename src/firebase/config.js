// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWOiWHCcE5Uo1T14Yua_zaD55Mf5Q_tQc",
  authDomain: "journalapp-5dce4.firebaseapp.com",
  projectId: "journalapp-5dce4",
  storageBucket: "journalapp-5dce4.appspot.com",
  messagingSenderId: "410995134006",
  appId: "1:410995134006:web:ee013e4c0908a5213a1297",
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);

export const FireBaseAuth = getAuth(FireBaseApp);

export const FirebaseDB = getFirestore(FireBaseApp);
