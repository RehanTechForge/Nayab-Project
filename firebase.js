// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyArxTC7XdG0p9ESQxG2SLxqxZ8q7tx9w-E",
    authDomain: "nayab-bbdfc.firebaseapp.com",
    projectId: "nayab-bbdfc",
    storageBucket: "nayab-bbdfc.firebasestorage.app",
    messagingSenderId: "795821570757",
    appId: "1:795821570757:web:84213190a81bee38e5ceac"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Export Firebase modules for use in other files
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, addDoc, collection };
