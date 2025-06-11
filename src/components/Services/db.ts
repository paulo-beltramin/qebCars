import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAMabhO5-oB3a3QsuQKLkSb_aW0YGZfpME",
    authDomain: "webcars-7612f.firebaseapp.com",
    projectId: "webcars-7612f",
    storageBucket: "webcars-7612f.firebasestorage.app",
    messagingSenderId: "531685877024",
    appId: "1:531685877024:web:11140e2cc8449ccef2a345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    auth,
    db,
    storage
}