// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmOJN_JCWuDlBUFjzX3OrQ_GUB7F4xi5o",
    authDomain: "warehous-fc3a9.firebaseapp.com",
    projectId: "warehous-fc3a9",
    storageBucket: "warehous-fc3a9.appspot.com",
    messagingSenderId: "701887737581",
    appId: "1:701887737581:web:d12afeefd7762f08f126e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
