import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);
const songsCollection = collection(db, "songs");

export {
    db,
    songsCollection,
    doc,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
};
