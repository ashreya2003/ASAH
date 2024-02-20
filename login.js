import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyGd79NlO-sQCoi9ct6u1uuFEZpq8QfF4",
    authDomain: "asah-5a351.firebaseapp.com",
    projectId: "asah-5a351",
    storageBucket: "asah-5a351.appspot.com",
    messagingSenderId: "1087222663035",
    appId: "1:1087222663035:web:425fddd45f0a79e3071fde",
    measurementId: "G-RXXVHS15QG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to sign up a user
function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
      // You can redirect the user or perform other actions here
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-up error:", errorMessage);
    });
}

// Function to sign in a user
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
      // You can redirect the user or perform other actions here
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in error:", errorMessage);
    });
}
