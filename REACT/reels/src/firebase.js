// Import the functions / functionality you need, from the SDK's you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./configuration";  // Firebase configuration
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const application = initializeApp(firebaseConfig); 
export const authentication = getAuth( application );
export const database = getFirestore( application );
export const repository = getStorage( application );