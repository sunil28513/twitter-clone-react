import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYEvFtWE97viVFj7YzzUnZJYdkPWzqKS4",
  authDomain: "twitter-clone-635b6.firebaseapp.com",
  databaseURL: "https://twitter-clone-635b6.firebaseio.com",
  projectId: "twitter-clone-635b6",
  storageBucket: "twitter-clone-635b6.appspot.com",
  messagingSenderId: "442333542395",
  appId: "1:442333542395:web:ebfde8282d1d819ff7fd5e",
  measurementId: "G-E1FYSMYXEZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
