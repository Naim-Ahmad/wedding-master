// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvWYuqvRxrdhoArumts95p0NBPerzixe0",
  authDomain: "wedding-boss.firebaseapp.com",
  projectId: "wedding-boss",
  storageBucket: "wedding-boss.appspot.com",
  messagingSenderId: "614339370740",
  appId: "1:614339370740:web:0a6cc858180a5434ba08a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;