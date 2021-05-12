import firebase from "firebase";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAejHPRYdRyOoIZtRd0zMApieUyhXPGM0I",
  authDomain: "task-demo-90caa.firebaseapp.com",
  projectId: "task-demo-90caa",
  storageBucket: "task-demo-90caa.appspot.com",
  messagingSenderId: "798896938784",
  appId: "1:798896938784:web:a9b3f5f67df8dcdc55c145",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
db.settings({ timestampsInSnapshots: true });
export default firebase;
