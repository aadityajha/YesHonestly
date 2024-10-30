// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (replace with your actual config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWJXT90X3gC-CZbQQgr5ZLwsGZre-JCQg",
    authDomain: "yeshonestly.firebaseapp.com",
    projectId: "yeshonestly",
    storageBucket: "yeshonestly.appspot.com",
    messagingSenderId: "14834355175",
    appId: "1:14834355175:web:e458b360227ca175790b42",
    measurementId: "G-Q3SGP79V0D"
  }
// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };