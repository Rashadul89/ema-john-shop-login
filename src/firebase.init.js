// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6wMM5gs8HLiA_9DQ4rui0z5BQfoyOXI",
  authDomain: "ema-john-react-auth-57cfc.firebaseapp.com",
  projectId: "ema-john-react-auth-57cfc",
  storageBucket: "ema-john-react-auth-57cfc.appspot.com",
  messagingSenderId: "180363025164",
  appId: "1:180363025164:web:b2db19837caee76124c729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;