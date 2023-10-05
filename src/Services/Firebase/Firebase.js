// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa7Ru5zClydf4NZRbz2gdeo-pSbT7lQrc",
  authDomain: "exam-826d7.firebaseapp.com",
  projectId: "exam-826d7",
  storageBucket: "exam-826d7.appspot.com",
  messagingSenderId: "780693359409",
  appId: "1:780693359409:web:f2d1ed5b8f615c30753e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)