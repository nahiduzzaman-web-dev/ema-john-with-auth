// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOh00FIiZr-haWHWliyKluH6_b2nBlHWw",
    authDomain: "ema-john-b4322.firebaseapp.com",
    projectId: "ema-john-b4322",
    storageBucket: "ema-john-b4322.appspot.com",
    messagingSenderId: "220279658361",
    appId: "1:220279658361:web:3601f843291ee401d601a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;