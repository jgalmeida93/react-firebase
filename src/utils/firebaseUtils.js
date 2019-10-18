import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDutA7fCbavKdgVNB4d_019vvBjbWvif1M",
    authDomain: "jbook-7589e.firebaseapp.com",
    databaseURL: "https://jbook-7589e.firebaseio.com",
    projectId: "jbook-7589e",
    storageBucket: "jbook-7589e.appspot.com",
    messagingSenderId: "133812540206",
    appId: "1:133812540206:web:75806ee49beddc25da20bf",
    measurementId: "G-GJKRQ59T3N"
}
 // Initialize Firebase
 export const firebaseImpl = firebase.initializeApp(config);
 export const firebaseDatabase = firebase.database();
