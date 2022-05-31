import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUgbaqk1rZm1bQnxP5umkz3KA0HDcqYpA",
  authDomain: "manuel-image.firebaseapp.com",
  projectId: "manuel-image",
  storageBucket: "manuel-image.appspot.com",
  messagingSenderId: "75451662571",
  appId: "1:75451662571:web:c106ef2fd99e3aa1f7beae"
};

const app = firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


const auth = getAuth(app);

export { projectStorage, projectFirestore, timestamp, auth };