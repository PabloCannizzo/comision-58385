import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBArDlCQ2apBmjm-ywgruuTbIosWouX-UM",
    authDomain: "liquorstore-97003.firebaseapp.com",
    projectId: "liquorstore-97003",
    storageBucket: "liquorstore-97003.appspot.com",
    messagingSenderId: "139749393094",
    appId: "1:139749393094:web:af71c2c825b62408da4dc7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);