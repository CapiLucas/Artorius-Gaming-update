import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqPqLriJfgUCfqJKhxv97tORF5EoxuiyQ",
  authDomain: "artoriusgaming-7a658.firebaseapp.com",
  projectId: "artoriusgaming-7a658",
  storageBucket: "artoriusgaming-7a658.appspot.com",
  messagingSenderId: "445427377425",
  appId: "1:445427377425:web:cf88d9a98676f498c618b0",
  measurementId: "G-C0G0JTF2YL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);