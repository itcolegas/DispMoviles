import firebase from "firebase/app";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDsEVOq9F62szrxNSt12pOlblVxdei_gOs",
    authDomain: "mocki-mobile-firebase.firebaseapp.com",
    projectId: "mocki-mobile-firebase",
    storageBucket: "mocki-mobile-firebase.appspot.com",
    messagingSenderId: "374522304776",
    appId: "1:374522304776:web:ea497f65949897605a74bd"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
