
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyBFhOmjkMhV6b-4_yXnFSq-5dJna0MrOUo",
  authDomain: "rikellyifal513.firebaseapp.com",
  projectId: "rikellyifal513",
  storageBucket: "rikellyifal513.appspot.com",
  messagingSenderId: "516085771025",
  appId: "1:516085771025:web:41647fdcd6e9a7db093ab0"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)

export { app, auth }