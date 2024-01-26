// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGO4XMqtLV0NKcrECkaqsRCoHn_Ch0VXI",
  authDomain: "log-in-page-dee88.firebaseapp.com",
  projectId: "log-in-page-dee88",
  storageBucket: "log-in-page-dee88.appspot.com",
  messagingSenderId: "202424517210",
  appId: "1:202424517210:web:19e25c271ef94d856f4e63",
  measurementId: "G-LL3W5DL72T"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = app.auth();
// export default app;
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();