import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDOeSkroQBxl1jFXAhJdDCIXnCRQjY2X1g",
    authDomain: "crown-db-e368c.firebaseapp.com",
    databaseURL: "https://crown-db-e368c.firebaseio.com",
    projectId: "crown-db-e368c",
    storageBucket: "crown-db-e368c.appspot.com",
    messagingSenderId: "824788131641",
    appId: "1:824788131641:web:d3835ed7c0a8fdb8fcd2e8",
    measurementId: "G-RT22NT11ZH"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;

        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                // ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;
} 

if (!firebase.apps.length) firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;