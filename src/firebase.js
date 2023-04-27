// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6IXVYnyv5fEtbf9jH9DKCA5kau4oTxpc",
  authDomain: "whats-app-clone-9dfd5.firebaseapp.com",
  projectId: "whats-app-clone-9dfd5",
  storageBucket: "whats-app-clone-9dfd5.appspot.com",
  messagingSenderId: "88133045174",
  appId: "1:88133045174:web:658c85e124b38156eecf17",
  measurementId: "G-R2745M479X",
};
// Use this to initialize the firebase App
const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
// Use these for db & auth
const db = app.firestore();
const auth = firebase.auth();

export { auth, db, provider };
