import { initializeApp, type FirebaseOptions } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    collection,
    setDoc,
    addDoc,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

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

const googleProvider = new GoogleAuthProvider();

const storage = getStorage();

export {
    firebaseConfig,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    googleProvider,
    signInWithPopup,
    db,
    doc,
    onSnapshot,
    collection,
    setDoc,
    addDoc,
    storage,
    query,
    where,
    ref,
    uploadBytesResumable,
    getDownloadURL,
};
