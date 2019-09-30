import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDPMnM7PVBd85FF7kqrOnNNzdCLV25hpww",
    authDomain: "pwa-example-5e112.firebaseapp.com",
    databaseURL: "https://pwa-example-5e112.firebaseio.com",
    projectId: "pwa-example-5e112",
    storageBucket: "",
    messagingSenderId: "824658242094",
    appId: "1:824658242094:web:361c8915d1cea46325cdbf"
  };
  // Initialize Firebase
  export const firebaseImpl = firebase.initializeApp(firebaseConfig);
  export const firebaseCloud = firebase.messaging();