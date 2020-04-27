import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage"


var firebaseConfig = {
    apiKey: "AIzaSyAKOBkhPbRnbxAo0CPIAZRxtuQBC6LVcik",
    authDomain: "react-udemy-clone.firebaseapp.com",
    databaseURL: "https://react-udemy-clone.firebaseio.com",
    projectId: "react-udemy-clone",
    storageBucket: "react-udemy-clone.appspot.com",
    messagingSenderId: "888623130436",
    appId: "1:888623130436:web:0ddfdd948385baafb91911",
    measurementId: "G-JVL707Y7GH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


  export default firebase;