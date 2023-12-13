import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrhw3Xrfzx_V92iVRGR4lxA9j0GUv-kSM",
  authDomain: "linkedin-clone-4987c.firebaseapp.com",
  projectId: "linkedin-clone-4987c",
  storageBucket: "linkedin-clone-4987c.appspot.com",
  messagingSenderId: "762607251031",
  appId: "1:762607251031:web:acfa6828b057a877dbfd12",
  measurementId: "G-ERXX6J67DK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth,provider,storage };
export default db;


