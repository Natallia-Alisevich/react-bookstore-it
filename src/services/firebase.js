import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTgONPh7DTcv1iJrO4Dr352_214NhmNzY",
  authDomain: "react-bookstore-it.firebaseapp.com",
  projectId: "react-bookstore-it",
  storageBucket: "react-bookstore-it.appspot.com",
  messagingSenderId: "12007328814",
  appId: "1:12007328814:web:359e40a1238edf951063bf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
