import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmunmiLD4EE20dtW6XvJmB7HBo3p7ePeg",
    authDomain: "olx-clone-bdb78.firebaseapp.com",
    projectId: "olx-clone-bdb78",
    storageBucket: "olx-clone-bdb78.appspot.com",
    messagingSenderId: "738942149618",
    appId: "1:738942149618:web:ffd25a4345bb5af92ec16b",
    measurementId: "G-6RZ6HSNX2H"
  };


 export default firebase.initializeApp(firebaseConfig)