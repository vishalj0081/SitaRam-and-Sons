import {initializeApp} from 'firebase/app';
import {
  getAuth, 
signInWithRedirect, 
signInWithPopup,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider, signOut, onAuthStateChanged} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc, 
    collection,
    writeBatch,
    query,
    getDocs,
    addDoc,
    
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvUV_tLEPgyrBlr9a811P8PeZwRsrgxzI",
    authDomain: "project-2-ecom.firebaseapp.com",
    projectId: "project-2-ecom",
    storageBucket: "project-2-ecom.appspot.com",
    messagingSenderId: "881356380304",
    appId: "1:881356380304:web:da62af2dc3503da920e015"
  };
  
  // Initialize Firebase
const firebaseapp= initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseapp);

export const addCollectioAndDocuments = async (collectionKey, objectsToAdd) => { 
const collectionRef = collection(db, collectionKey);
const batch = writeBatch(db);

objectsToAdd.forEach((object) => {
  const docRef = doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef, object);
});

await batch.commit();
console.log('done');
};

export const getCategoriesAndDocuments = async () => {
const collectionRef = collection(db, 'categories');
const q = query(collectionRef);

const querySnapshot = await getDocs(q);
const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot)=> {
  const {title, items} = docSnapshot.data();
  accumulator[title.toLowerCase()] = items;
  return accumulator;
  }, {} );

  return categoryMap;
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async ()=>  await signOut(auth);

export const onAuthStateChangeLister = (callback, errorcallback, completedcallback)=> 
onAuthStateChanged(auth, callback, errorcallback, completedcallback);


const FeedbackCollectionRef = collection(db, "Feedback");
class FeedbackServices {
  
  addFeedback= (newFeedback) => {
    return addDoc(FeedbackCollectionRef, newFeedback);
    
  };
  
};

export default new FeedbackServices();

