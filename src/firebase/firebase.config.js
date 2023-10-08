// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI2qa_SgIqVXzgidNgh4rZhy0zGlzhUjQ",
  authDomain: "event-management-assignm-d1372.firebaseapp.com",
  projectId: "event-management-assignm-d1372",
  storageBucket: "event-management-assignm-d1372.appspot.com",
  messagingSenderId: "784625973038",
  appId: "1:784625973038:web:69544c6568e465e9ae2cbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;