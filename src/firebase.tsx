import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfkpdQoleMVMH52HffLcO9-SSZ7sn0kw4",
  authDomain: "ai-traveller-c4415.firebaseapp.com",
  projectId: "ai-traveller-c4415",
  storageBucket: "ai-traveller-c4415.appspot.app",
  messagingSenderId: "263334344309",
  appId: "1:263334344309:web:1e00d81eb057f1c95c6a3c",
  measurementId: "G-M78HSYL4VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //instancia general para usar firebase y sus servicios

const auth = getAuth(app); //instancia de autenticación

const provider = new GoogleAuthProvider(); //provider para usar servicio se google para autenticacion


export { auth, provider };