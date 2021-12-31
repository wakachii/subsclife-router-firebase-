// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnzk-SfC6w2CcNz23CHDJSBiod-4pQ4d8",
  authDomain: "subsclife-74445.firebaseapp.com",
  databaseURL: "https://subsclife-74445-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "subsclife-74445",
  storageBucket: "subsclife-74445.appspot.com",
  messagingSenderId: "349963767091",
  appId: "1:349963767091:web:2a67f2355e01b9d2e8c246",
  measurementId: "G-J8JZQ0W157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);