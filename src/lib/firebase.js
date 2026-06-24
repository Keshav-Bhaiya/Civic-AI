import { initializeApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID

// Detect unconfigured placeholder values
export const firebaseConfigured =
  !!apiKey &&
  apiKey !== 'your_api_key_here' &&
  !!projectId &&
  projectId !== 'your_project_id'

const firebaseConfig = {
  apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Only initialize if config is valid; reuse on HMR reloads
const app = firebaseConfigured
  ? getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]
  : null

export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
export const googleProvider = new GoogleAuthProvider()
