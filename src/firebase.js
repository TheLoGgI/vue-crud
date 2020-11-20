import firebase from "firebase/app"
import "firebase/firestore"

  export const db = firebase.initializeApp({
    apiKey: "AIzaSyBCmA5ZRM8djaFPkpw4EUI409cRrXz-XtY",
    authDomain: "vue-crud-d43a3.firebaseapp.com",
    databaseURL: "https://vue-crud-d43a3.firebaseio.com",
    projectId: "vue-crud-d43a3",
    storageBucket: "vue-crud-d43a3.appspot.com",
    messagingSenderId: "808472594680",
    appId: "1:808472594680:web:74a815df2abfd230da530d"
  }).firestore()

  export const personsRef = db.collection('persons')
