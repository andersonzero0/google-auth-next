import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcS2FpJqodvbuZ4pjRZ84UKdnqFwMcopo",
  authDomain: "auth-next-8fe8b.firebaseapp.com",
  projectId: "auth-next-8fe8b",
  storageBucket: "auth-next-8fe8b.appspot.com",
  messagingSenderId: "959353710011",
  appId: "1:959353710011:web:7016a8449f28c22a81909e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);