// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVCm6IA5ofB45FcCSBiEdICQyRDCejTtc",
  authDomain: "netflixgpt-52e2f.firebaseapp.com",
  projectId: "netflixgpt-52e2f",
  storageBucket: "netflixgpt-52e2f.firebasestorage.app",
  messagingSenderId: "128288703948",
  appId: "1:128288703948:web:bacbd5ca5fe0d66540c969",
  measurementId: "G-MYRS3FY40N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);