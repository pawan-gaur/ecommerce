import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVWH-RiIe7ExtaAeOEsCx1ZG1-ykN1Goo",
    authDomain: "ecommerce-c35bb.firebaseapp.com",
    databaseURL: "https://ecommerce-c35bb.firebaseio.com",
    projectId: "ecommerce-c35bb",
    storageBucket: "ecommerce-c35bb.appspot.com",
    messagingSenderId: "768702369403",
    appId: "1:768702369403:web:0fb5b39f1f46cd074adcde"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();