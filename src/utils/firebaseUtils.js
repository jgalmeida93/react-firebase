import firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}
 // Initialize Firebase
 export const firebaseImpl = firebase.initializeApp(config);
 export const firebaseDatabase = firebase.database();
