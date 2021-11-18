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

export const createUserProfileDocument = async (userAuth, additinalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if (!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additinalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
}
 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();  

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;