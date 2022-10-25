import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbD07Nc9DA9U1-0ij17FT-Uo3uL7ZTMzw",
  authDomain: "clone-38843.firebaseapp.com",
  projectId: "clone-38843",
  storageBucket: "clone-38843.appspot.com",
  messagingSenderId: "221068744913",
  appId: "1:221068744913:web:9298ec892e21db04bc0df0",
  measurementId: "G-H5V0J9THPG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
