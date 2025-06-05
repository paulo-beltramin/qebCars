import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyACRhbD5pXh70IOIgpco__2Hq12xK2yJwk",
    authDomain: "webcars-30353.firebaseapp.com",
    projectId: "webcars-30353",
    storageBucket: "webcars-30353.appspot.com",
    messagingSenderId: "786065221415",
    appId: "1:786065221415:web:717100a521e8f3c4adab02"
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