import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbxyylhLbTbf3FWlI_Qv3xRr_n10OzL28",
    authDomain: "crwn-db-5a561.firebaseapp.com",
    databaseURL: "https://crwn-db-5a561.firebaseio.com",
    projectId: "crwn-db-5a561",
    storageBucket: "",
    messagingSenderId: "997016178292",
    appId: "1:997016178292:web:49011728aea8d085"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;