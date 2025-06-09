import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA3WX5o-b3HPYpEDqQ_olssZvX53E8h3ZI",
    authDomain: "webcars-ab136.firebaseapp.com",
    projectId: "webcars-ab136",
    storageBucket: "webcars-ab136.firebasestorage.app",
    messagingSenderId: "431702049792",
    appId: "1:431702049792:web:56a8f841d911fa3dd344e5",
    measurementId: "G-0RDRGJ6CRH"
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