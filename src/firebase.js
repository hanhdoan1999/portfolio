// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, push } from 'firebase/database';;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsCMxs3xDfe7NyI1j4brk7s2phQymYyU4",
  authDomain: "fir-blog-19b47.firebaseapp.com",
  databaseURL: "https://fir-blog-19b47-default-rtdb.firebaseio.com",
  projectId: "fir-blog-19b47",
  storageBucket: "fir-blog-19b47.appspot.com",
  messagingSenderId: "872398496231",
  appId: "1:872398496231:web:0420163b6f92c2d9561d42",
  measurementId: "G-GFYEP8YQ9E"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const storage = getStorage(app);

export { database, ref, push };