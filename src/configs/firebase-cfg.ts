import type { FirebaseOptions } from "firebase/app";

const process: ImportMetaEnv = import.meta.env;

export const firebaseConfig: FirebaseOptions = {
    apiKey: process.VITE_FIREBASE_API_KEY,
    authDomain: process.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.VITE_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.VITE_FIREBASE_APP_ID,
};
