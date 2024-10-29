// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH6MzxfkOP6H2Ta14oMvqz4ZJjU44SLr0",
  authDomain: "tela-jorge.firebaseapp.com",
  projectId: "tela-jorge",
  storageBucket: "tela-jorge.appspot.com",
  messagingSenderId: "236406727105",
  appId: "1:236406727105:web:cbe5fe189488bb689e8f40",
  measurementId: "G-C4XCSMH6X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);