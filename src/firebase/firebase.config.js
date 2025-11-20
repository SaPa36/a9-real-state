// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQmmhs34-vxXiXfzG-6fhhfyxP1QbrUQE",
  authDomain: "a9-real-state.firebaseapp.com",
  projectId: "a9-real-state",
  storageBucket: "a9-real-state.firebasestorage.app",
  messagingSenderId: "87289329348",
  appId: "1:87289329348:web:770294fcf81acd5cfcbb91",
  measurementId: "G-J89SS60K0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;