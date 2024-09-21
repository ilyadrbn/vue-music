import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/configs/firebase-cfg";

const app = initializeApp(firebaseConfig);

export { app };
