

// const firebaseConfig = {
//     apiKey: "AIzaSyABGSz4FPA79uiiX2f3x3jJTMQrwLWHt0g",
//     authDomain: "instagarm-clone-app.firebaseapp.com",
//     projectId: "instagarm-clone-app",
//     storageBucket: "instagarm-clone-app.appspot.com",
//     messagingSenderId: "776183132291",
//     appId: "1:776183132291:web:ea0f563068dc2b46196bb6",
//     measurementId: "G-4KEJK2W2DG"
//   };
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABGSz4FPA79uiiX2f3x3jJTMQrwLWHt0g",
    authDomain: "instagarm-clone-app.firebaseapp.com",
    projectId: "instagarm-clone-app",
    storageBucket: "instagarm-clone-app.appspot.com",
    messagingSenderId: "776183132291",
    appId: "1:776183132291:web:ea0f563068dc2b46196bb6",
    measurementId: "G-4KEJK2W2DG"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db , storage};