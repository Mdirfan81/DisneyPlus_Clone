import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2BA700x7IPuEsZmjk732o-2zIInbadUQ",
  authDomain: "disneyplus-clone-c6247.firebaseapp.com",
  projectId: "disneyplus-clone-c6247",
  storageBucket: "disneyplus-clone-c6247.appspot.com",
  messagingSenderId: "503483477492",
  appId: "1:503483477492:web:6513624b41f17b9f8e5da1",
  measurementId: "G-6WJTFHSV22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
