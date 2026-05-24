import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAWB3ZVsIxdNVMn6eytFafkaAw-OWA-XU",
  authDomain: "vir-portfolio.firebaseapp.com",
  projectId: "vir-portfolio",
  storageBucket: "vir-portfolio.firebasestorage.app",
  messagingSenderId: "458612975665",
  appId: "1:458612975665:web:b7bb21782cc6d9137b0d10",
  measurementId: "G-9QLT94XHLG"
};

// Initialize Firebase App dynamically/safely
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Get Firestore instance
const db = getFirestore(app);

// Get Analytics only on browser
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, db, analytics };
