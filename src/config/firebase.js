
import firebase  from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyABGSz4FPA79uiiX2f3x3jJTMQrwLWHt0g",
//     authDomain: "instagarm-clone-app.firebaseapp.com",
//     projectId: "instagarm-clone-app",
//     storageBucket: "instagarm-clone-app.appspot.com",
//     messagingSenderId: "776183132291",
//     appId: "1:776183132291:web:ea0f563068dc2b46196bb6",
//     measurementId: "G-4KEJK2W2DG"
//   };

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABGSz4FPA79uiiX2f3x3jJTMQrwLWHt0g",
    authDomain: "instagarm-clone-app.firebaseapp.com",
    projectId: "instagarm-clone-app",
    storageBucket: "instagarm-clone-app.appspot.com",
    messagingSenderId: "776183132291",
    appId: "1:776183132291:web:ea0f563068dc2b46196bb6",
    measurementId: "G-4KEJK2W2DG"
  })
 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db , auth , storage };
