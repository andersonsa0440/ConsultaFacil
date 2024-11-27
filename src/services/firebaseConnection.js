
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBarS9OzZKwNEfkzugF5RpaXikIWpKSNJA",
  authDomain: "sistemas-fcc93.firebaseapp.com",
  databaseURL: "https://sistemas-fcc93-default-rtdb.firebaseio.com",
  projectId: "sistemas-fcc93",
  storageBucket: "sistemas-fcc93.firebasestorage.app",
  messagingSenderId: "987334633911",
  appId: "1:987334633911:web:c8bb7d8a59cf4dc0146032",
  measurementId: "G-N95NHX421K"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };