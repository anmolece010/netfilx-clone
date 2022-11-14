import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN-XeV2UPdMfR_0kFGuu8_KDBomPY7P98",
  authDomain: "netflix-clone-49555.firebaseapp.com",
  projectId: "netflix-clone-49555",
  storageBucket: "netflix-clone-49555.appspot.com",
  messagingSenderId: "504708927918",
  appId: "1:504708927918:web:af359e032776db1d1ab83f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
