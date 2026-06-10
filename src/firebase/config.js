import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// Беремо з .env (Vite автоматично підставляє import.meta.env.VITE_*)
// Якщо .env немає — fallback на дефолти (треба підставити вручну)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCkkR95_vT4sYJBxwPeDT4bfkO-E7PVXe0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "olhadrive-booking.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://olhadrive-booking-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "olhadrive-booking",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "olhadrive-booking.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "956727837484",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:956727837484:web:3ca5f08dbeaa6368b02289"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
