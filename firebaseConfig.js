import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfv5mFSjP_1EOAj4vEAEFsYnQx13TkC20",
  authDomain: "fir-auth-app-2c4c8.firebaseapp.com",
  projectId: "fir-auth-app-2c4c8",
  storageBucket: "fir-auth-app-2c4c8",
  messagingSenderId: "182630341647",
  appId: "1:182630341647:web:5bfb443b811f1ed1bb577a",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app);

export { auth, firestore };
