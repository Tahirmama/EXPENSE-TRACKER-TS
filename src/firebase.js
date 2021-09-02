import * as firebase from 'firebase';
 
const firebaseConfig = {
    apiKey: "AIzaSyBWwOuRlhZD-gXunid0gDc7sxJcWhyfC0Y",
    authDomain: "e-a-notif.firebaseapp.com",
    projectId: "e-a-notif",
    storageBucket: "e-a-notif.appspot.com",
    messagingSenderId: "713770075960",
    appId: "1:713770075960:web:9affe17b0525a7c3caa3cd",
    measurementId: "G-Z4HZWGSZVQ"
  };
    
  firebase.initializeApp(firebaseConfig)
  export default firebase;