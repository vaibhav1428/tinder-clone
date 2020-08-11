import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEIIdrhnARoz4oDLq222KvEMmzFD4JB9I",
    authDomain: "tinder-clone-c9c7a.firebaseapp.com",
    databaseURL: "https://tinder-clone-c9c7a.firebaseio.com",
    projectId: "tinder-clone-c9c7a",
    storageBucket: "tinder-clone-c9c7a.appspot.com",
    messagingSenderId: "232142468023",
    appId: "1:232142468023:web:bc5888a8716d7324a96e32",
    measurementId: "G-67YMG6NDYM"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();


export default database;