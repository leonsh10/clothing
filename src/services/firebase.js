import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvJF00gaYmUIs3XvEi0uC8_iou_gxZ4lc",
  authDomain: "store-c8fe7.firebaseapp.com",
  projectId: "store-c8fe7",
  storageBucket: "store-c8fe7.appspot.com",
  messagingSenderId: "895969899049",
  appId: "1:895969899049:web:a2949b77ca154e8f37e238",
};
initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), (user) => {
 this.$store.dispatch("fetchUser", user);
} );

