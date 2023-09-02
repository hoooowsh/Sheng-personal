// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const admin = require("firebase-admin");
// const firebase = require("firebase");

require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var serviceAccount = require("./sheng-persona-firebase-adminsdk-nt4uc-149653c547.json");

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyCKELF6JMGiqsa1eoNn1WoEMpNlUY67LMA",
  authDomain: "sheng-persona.firebaseapp.com",
  projectId: "sheng-persona",
  storageBucket: "sheng-persona.appspot.com",
  messagingSenderId: "814036793736",
  appId: "1:814036793736:web:158fb1df448ce3a2a3a23d",
  measurementId: "G-GLBVC9MTG1",
};

// Initialize Firebase
admin.initializeApp(firebaseConfig);
const db = admin.firestore(); // The firestore database which we will be using.
const firestore = admin.firestore;
module.exports = {
  admin,
  db,
  firestore,
};
