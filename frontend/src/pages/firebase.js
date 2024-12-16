import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAn5mpBBamde-FPlGyajpqqqXX8ozJZpN8",
  authDomain: "plataformasdedesarrollo-7a7af.firebaseapp.com",
  projectId: "plataformasdedesarrollo-7a7af",
  storageBucket: "plataformasdedesarrollo-7a7af.firebasestorage.app",
  messagingSenderId: "274315220115",
  appId: "1:274315220115:web:0a13d57198be2f64576966"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);