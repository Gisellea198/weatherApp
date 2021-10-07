import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbFAwmgu2RBhr8KMF-nO11PZdUFRlN4Ww",
  authDomain: "weatherapp-47122.firebaseapp.com",
  projectId: "weatherapp-47122",
  storageBucket: "weatherapp-47122.appspot.com",
  messagingSenderId: "492162121026",
  appId: "1:492162121026:web:b28291ed5032309e931cdb",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export { db, google, facebook, firebase };
