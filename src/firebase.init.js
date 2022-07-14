// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAupjSxqdCGNCfz6S-Q6Rx8Aq4lfNUqfzw",
  authDomain: "genius-car-services-6b806.firebaseapp.com",
  projectId: "genius-car-services-6b806",
  storageBucket: "genius-car-services-6b806.appspot.com",
  messagingSenderId: "687272823714",
  appId: "1:687272823714:web:007bbf29debf87d59040fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;