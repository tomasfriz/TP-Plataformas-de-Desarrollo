// Importa las funciones necesarias desde Firebase v9+
import { initializeApp } from 'firebase/app';  // Inicializa la app
import { getAuth } from 'firebase/auth';        // Obtén la instancia de autenticación

// Configuración de Firebase (debes reemplazar con tus propios datos)
const firebaseConfig = {
  apiKey: "AIzaSyAn5mpBBamde-FPlGyajpqqqXX8ozJZpN8",
  authDomain: "plataformasdedesarrollo-7a7af.firebaseapp.com",
  projectId: "plataformasdedesarrollo-7a7af",
  storageBucket: "plataformasdedesarrollo-7a7af.firebasestorage.app",
  messagingSenderId: "274315220115",
  appId: "1:274315220115:web:0a13d57198be2f64576966"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de autenticación
export const auth = getAuth(app);