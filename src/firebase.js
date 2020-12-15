import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrcJtgNkcmzlbzP--FzzlrtAhRaA4X4RY",
  authDomain: "messaging-app-7f282.firebaseapp.com",
  projectId: "messaging-app-7f282",
  storageBucket: "messaging-app-7f282.appspot.com",
  messagingSenderId: "263687489468",
  appId: "1:263687489468:web:c52c1a2edf5a5d67f90db9",
  measurementId: "G-FXHJR3SNTB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;