import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

console.log("firebaseConfig", firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const clientFirestore = getFirestore(app);
export const rtdb = getDatabase(app);
