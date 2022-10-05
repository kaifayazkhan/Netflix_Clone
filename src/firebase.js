import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwszi8nUgUEQeioCXkpZafDsOCR7ahn1w",
    authDomain: "netflix-clone-54945.firebaseapp.com",
    projectId: "netflix-clone-54945",
    storageBucket: "netflix-clone-54945.appspot.com",
    messagingSenderId: "166866185941",
    appId: "1:166866185941:web:47c644ef020dddc07a7c5c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;