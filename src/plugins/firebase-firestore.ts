import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    arrayUnion,
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
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    arrayUnion,
    onSnapshot,
    query,
    where,
    limit,
    startAfter,
    orderBy,
};
