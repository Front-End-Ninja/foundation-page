import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0B8A0WPGUNpaPydhIXVjdVGan9eUUSBU",
  authDomain: "foundation-web-db.firebaseapp.com",
  databaseURL: "https://foundation-web-db.firebaseio.com",
  projectId: "foundation-web-db",
  storageBucket: "foundation-web-db.appspot.com",
  messagingSenderId: "71973773686",
  appId: "1:71973773686:web:e1209565517f20f7185a57",
  measurementId: "G-BSSN61EJEN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
