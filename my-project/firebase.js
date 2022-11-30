// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoXdXF1tIiHMD7WLdy15xBs00u7Tmq09M",
  authDomain: "insta-k-v1.firebaseapp.com",
  projectId: "insta-k-v1",
  storageBucket: "insta-k-v1.appspot.com",
  messagingSenderId: "710197980459",
  appId: "1:710197980459:web:6bbad785088b996d36296e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
