import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    limit,
    startAfter,
    orderBy,
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
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    limit,
    startAfter,
    orderBy,
};
