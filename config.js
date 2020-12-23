import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyABE251QjIlsrG8stS2rbG7G_1YRfqW-WE",
  authDomain: "wliy-cedd3.firebaseapp.com",
  databaseURL: "https://wliy-cedd3.firebaseio.com",
  projectId: "wliy-cedd3",
  storageBucket: "wliy-cedd3.appspot.com",
  messagingSenderId: "255490748676",
  appId: "1:255490748676:web:e1142a9c304de72b8de051",
  measurementId: "G-JP4VKCF7H1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();
