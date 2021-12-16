import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import admin from "firebase-admin";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore } from "firebase-admin/firestore";
var serviceAccount = require("../test-f8201-firebase-adminsdk-fzvp7-ec9b305f92.json");

const adminApp = initializeApp({
  credential: admin.credential.cert(serviceAccount),
  ...firebaseConfig,
});
export const adminAuth = getAuth(adminApp);
export const adminFirestore = getFirestore(adminApp);
