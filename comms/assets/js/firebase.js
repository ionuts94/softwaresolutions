import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'
import { getFirestore, collection, doc, setDoc, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyDZ2Pj3IbcK1TH32N7TcefHouFXvjPS5g4",
  authDomain: "softwaresolutions-2b122.firebaseapp.com",
  projectId: "softwaresolutions-2b122",
  storageBucket: "softwaresolutions-2b122.appspot.com",
  messagingSenderId: "567973867666",
  appId: "1:567973867666:web:64fc9cce0b26b53cd1764b",
  measurementId: "G-XT5Z43LXQM"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);