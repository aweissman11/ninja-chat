import firebase from 'firebase';
// eslint-disable-next-line
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAv4gLfk4jXnkCQxMN4oCgGjHJiKoqRrvo',
  authDomain: 'ninja-chat-6f930.firebaseapp.com',
  databaseURL: 'https://ninja-chat-6f930.firebaseio.com',
  projectId: 'ninja-chat-6f930',
  storageBucket: 'ninja-chat-6f930.appspot.com',
  messagingSenderId: '769427464233',
  appId: '1:769427464233:web:6192b3b24ec6b47b453c38',
  measurementId: 'G-16HZ7QQK6K',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();
