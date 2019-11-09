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

  export const createUserProfileDocument = async ( userAuth , additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName , email } = userAuth;
      const createdAt = new Date();

      try{
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
      } catch (error) {
         console.log('error creating users ' , error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;