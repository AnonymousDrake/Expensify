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

database
  .ref()
  .set({
    name: "Ekam",
    age: 19,
    stressLevel: 5,
    job: {
      title: "Software Developer",
      company: "Google",
    },
    location: {
      city: "Moga",
      state: "Punjab",
    },
  })
  .then(() => {
    console.log("Data is saved");
  })
  .catch((error) => {
    console.log("This failed!", error);
  });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data Removed");
//   })
//   .catch((error) => {
//     console.log("Couldn't remove data", error);
//   });

database
  .ref()
  .update({
    stressLevel: 7,
    "job/company": "Amazon",
    "location/city": "Seattle",
  })
  .then(() => {
    console.log("Data updateddd");
  })
  .catch((error) => {
    console.log("couldn't modify data", error);
  });
