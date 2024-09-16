import { initializeApp, type FirebaseOptions } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const process: ImportMetaEnv = import.meta.env;

const firebaseConfig: FirebaseOptions = {
    apiKey: process.VITE_FIREBASE_API_KEY,
    authDomain: process.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.VITE_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    doc,
    setDoc,
};
