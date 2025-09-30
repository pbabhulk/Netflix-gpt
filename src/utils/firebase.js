// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtvEShmPqvfUZCA9ynmPGbCSskiqe4wSI",
  authDomain: "netflixgpt-c7145.firebaseapp.com",
  projectId: "netflixgpt-c7145",
  storageBucket: "netflixgpt-c7145.firebasestorage.app",
  messagingSenderId: "1002979854226",
  appId: "1:1002979854226:web:f8f7dca589a947da02634b",
  measurementId: "G-00RJC8CPJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
