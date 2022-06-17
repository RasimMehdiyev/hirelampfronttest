import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs2T-As1-5xAv07LKe5l_KHB78BJE4PME",
  authDomain: "hirelamp-101fe.firebaseapp.com",
  projectId: "hirelamp-101fe",
  storageBucket: "hirelamp-101fe.appspot.com",
  messagingSenderId: "799307456589",
  appId: "1:799307456589:web:a90c2958e70063c66e3c04",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

export default firebase;
