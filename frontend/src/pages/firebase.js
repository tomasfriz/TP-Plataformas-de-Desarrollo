// src/firebase.js

import firebase from 'firebase/app';  // Importa Firebase
import 'firebase/auth';  // Importa la funcionalidad de autenticación

// Configuración de Firebase (debes reemplazar con tus propios datos)
const firebaseConfig = {
  apiKey: "AIzaSyAn5mpBBamde-FPlGyajpqqqXX8ozJZpN8",
  authDomain: "plataformasdedesarrollo-7a7af.firebaseapp.com",
  projectId: "plataformasdedesarrollo-7a7af",
  storageBucket: "plataformasdedesarrollo-7a7af.firebasestorage.app",
  messagingSenderId: "274315220115",
  appId: "1:274315220115:web:0a13d57198be2f64576966"
};

// Inicializa Firebase si no lo está
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Si ya está inicializado, usa la instancia existente
}

// Exporta la instancia de autenticación para usarla en otros componentes
export const auth = firebase.auth();
