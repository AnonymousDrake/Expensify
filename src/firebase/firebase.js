import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2by_stoP5Gex-UCZKlTMf26RVSSE3odM",
  authDomain: "expensify-5ad28.firebaseapp.com",
  databaseURL: "https://expensify-5ad28.firebaseio.com",
  projectId: "expensify-5ad28",
  storageBucket: "expensify-5ad28.appspot.com",
  messagingSenderId: "596413722048",
  appId: "1:596413722048:web:b4be8a0dd5ab546b3d6c25",
  measurementId: "G-TDL01V6TNW",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: "Ekam",
  age: 20,
  isSingle: true,
  location: {
    city: "Moga",
    state: "Punjab",
  },
});
