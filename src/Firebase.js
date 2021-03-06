import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup ,signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjndY5cUOGICewd8DXX17uEO7QF0XT584",
  authDomain: "captive-chat.firebaseapp.com",
  projectId: "captive-chat",
  storageBucket: "captive-chat.appspot.com",
  messagingSenderId: "332576726215",
  appId: "1:332576726215:web:ca7dd2bbd42ec97e1a32e2",
  measurementId: "G-KXPZNF4QMX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = async () => {
  await signOut(auth);
};


