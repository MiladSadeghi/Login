import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpK9vcolqjD9hzvdE7aAHIbnJ6vn5qUPs",
  authDomain: "login-65ad2.firebaseapp.com",
  projectId: "login-65ad2",
  storageBucket: "login-65ad2.appspot.com",
  messagingSenderId: "1093944264717",
  appId: "1:1093944264717:web:923cd39c7930dbb91ced44",
  measurementId: "G-Y9J0CZTQR0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (event) => {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      
    })
    .catch((error) => {
      console.log(error);
    });
};