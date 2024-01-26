// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdq6tchDXZZPGBdoZarBYy4sRkYnOWJGg",
    authDomain: "retro-wear.firebaseapp.com",
    projectId: "retro-wear",
    storageBucket: "retro-wear.appspot.com",
    messagingSenderId: "772838719634",
    appId: "1:772838719634:web:57925c3e3a6f0463f7a64b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);