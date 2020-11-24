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

if (!firebase.apps.length) firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;