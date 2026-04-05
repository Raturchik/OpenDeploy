// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx9nWUZsTxcoZ8VksiRFT-Eht_tRci_xc",
    authDomain: "opendeploy-fb6be.firebaseapp.com",
    projectId: "opendeploy-fb6be",
    storageBucket: "opendeploy-fb6be.firebasestorage.app",
    messagingSenderId: "280488527741",
    appId: "1:280488527741:web:6931a0d4f3443caf826e14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const githubProvider = new GithubAuthProvider();

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
