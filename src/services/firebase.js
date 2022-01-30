import { initializeApp, getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvJF00gaYmUIs3XvEi0uC8_iou_gxZ4lc",
  authDomain: "store-c8fe7.firebaseapp.com",
  projectId: "store-c8fe7",
  storageBucket: "store-c8fe7.appspot.com",
  messagingSenderId: "895969899049",
  appId: "1:895969899049:web:a2949b77ca154e8f37e238",
};
initializeApp(firebaseConfig);

const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5001);

const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 8080);

const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");
