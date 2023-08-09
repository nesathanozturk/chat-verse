import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfmcuJdwgrMEmfMnMX7uD8omacCZBYG1s",
  authDomain: "chatverse-dda3f.firebaseapp.com",
  projectId: "chatverse-dda3f",
  storageBucket: "chatverse-dda3f.appspot.com",
  messagingSenderId: "1042512308442",
  appId: "1:1042512308442:web:d7a5fc0ae7541ddc6d9de3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
