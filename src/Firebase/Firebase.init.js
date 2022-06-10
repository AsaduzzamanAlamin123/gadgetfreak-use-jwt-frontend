// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4be_VLokxxLGdwEnvpplycMBpNlM5Ayw",
  authDomain: "gadget-freak-3abd3.firebaseapp.com",
  projectId: "gadget-freak-3abd3",
  storageBucket: "gadget-freak-3abd3.appspot.com",
  messagingSenderId: "325145769479",
  appId: "1:325145769479:web:5fcc78c7eba3494a3f1ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;