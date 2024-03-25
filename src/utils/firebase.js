// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiExeJ8c123ckh6q6ue4EvK6qIMsFTajU",
  authDomain: "netflix-gpt-791bd.firebaseapp.com",
  projectId: "netflix-gpt-791bd",
  storageBucket: "netflix-gpt-791bd.appspot.com",
  messagingSenderId: "1078505609578",
  appId: "1:1078505609578:web:4f3b6e3ad976dc12caad13",
  measurementId: "G-2BD9ENX9VD"
};

// // Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();