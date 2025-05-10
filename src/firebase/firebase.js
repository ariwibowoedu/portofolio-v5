// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiDHXIB4nMWDhW45gGZy1kQLGb8H2ENcU",
    authDomain: "business-ari.firebaseapp.com",
    projectId: "business-ari",
    storageBucket: "business-ari.firebasestorage.app",
    messagingSenderId: "397646660925",
    appId: "1:397646660925:web:1cbbbcc695522db8da3154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }