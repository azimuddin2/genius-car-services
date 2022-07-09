// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqei3OQ1TZMz_GMpUOtYdBir9qqvb74oI",
    authDomain: "genius-car-services-ce665.firebaseapp.com",
    projectId: "genius-car-services-ce665",
    storageBucket: "genius-car-services-ce665.appspot.com",
    messagingSenderId: "1059542885250",
    appId: "1:1059542885250:web:0a445a348d7ca39f0ea59b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;