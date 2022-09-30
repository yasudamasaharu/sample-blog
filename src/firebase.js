import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJFkOE0wKg6etTuAg0fixBW0CPKbsxq4k",
  authDomain: "blog-47fff.firebaseapp.com",
  projectId: "blog-47fff",
  storageBucket: "blog-47fff.appspot.com",
  messagingSenderId: "288597277469",
  appId: "1:288597277469:web:ee9d89d1218775914dbff4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);
// cloud firestoreの初期化をしている

export { auth, provider, db };
