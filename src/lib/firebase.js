import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-316a2.firebaseapp.com",
  projectId: "react-chat-app-316a2",
  storageBucket: "react-chat-app-316a2.appspot.com",
  messagingSenderId: "1072952652304",
  appId: "1:1072952652304:web:eacc05eb6d402add831095"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()