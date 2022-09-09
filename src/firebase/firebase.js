import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLCoHAihTesLoEqZZX5MQukj-xTintWo4",
  authDomain: "spark-92f16.firebaseapp.com",
  projectId: "spark-92f16",
  storageBucket: "spark-92f16.appspot.com",
  messagingSenderId: "905109654202",
  appId: "1:905109654202:web:6b6a207b4a59632fb19083",
  measurementId: "G-WMWCZBT5EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
};