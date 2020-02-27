// import firebase library
import firebase from 'firebase/app';
// fore database
import 'firebase/firestore';
// for auth
import 'firebase/auth';


// Firebase configuration
const config =  {
    apiKey: "AIzaSyALXhqMYfNx70QxfLYEQPBYxyuVrMRkSGk",
    authDomain: "react-estore.firebaseapp.com",
    databaseURL: "https://react-estore.firebaseio.com",
    projectId: "react-estore",
    storageBucket: "react-estore.appspot.com",
    messagingSenderId: "11378545505",
    appId: "1:11378545505:web:e97b1e1cad3e75ae2beb20",
    measurementId: "G-TNB0CV15G5"
};

// initialize app with config
firebase.initializeApp(config);

// export auth
export const auth = firebase.auth();
// export firestore 
export const firestore = firebase.firestore();

// setup google authentaction
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export all firebase library
export default firebase;