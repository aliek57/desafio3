import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0nXirwf9liR6Uu0SGISVILLBULPaf1Kg",
  authDomain: "trisog-7cdf4.firebaseapp.com",
  projectId: "trisog-7cdf4",
  storageBucket: "trisog-7cdf4.appspot.com",
  messagingSenderId: "785483670905",
  appId: "1:785483670905:web:d32ac5994cfbce93e5bba8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);