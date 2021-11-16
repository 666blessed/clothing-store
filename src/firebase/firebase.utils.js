import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBcCL0pJ52syu53YU7Q6wCFb5KS3rJuyBo",
    authDomain: "clothing-shop-db-7f354.firebaseapp.com",
    projectId: "clothing-shop-db-7f354",
    storageBucket: "clothing-shop-db-7f354.appspot.com",
    messagingSenderId: "109696169686",
    appId: "1:109696169686:web:e1cd6386783e449da63b77"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();  

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;