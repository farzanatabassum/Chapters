
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_tJIMgdXfHznOrAeZFddXxe0nDOjacyQ",
  authDomain: "chapters-5acec.firebaseapp.com",
  projectId: "chapters-5acec",
  storageBucket: "chapters-5acec.appspot.com",
  messagingSenderId: "1089881397981",
  appId: "1:1089881397981:web:338b277f6d996d3aa91934"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();