// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoqM05WWlQb_VkrKACFPOXj4_W6lIHjB0",
  authDomain: "wavelength-35550.firebaseapp.com",
  projectId: "wavelength-35550",
  storageBucket: "wavelength-35550.appspot.com",
  messagingSenderId: "939564978769",
  appId: "1:939564978769:web:a438c8ce9c057e9abd5e70",
  measurementId: "G-BNTFYH9VBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);