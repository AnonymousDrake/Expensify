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

database.ref("expenses").on("value", (snapshot) => {
  expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
  console.log(expenses);
});

// database.ref("expenses").once((snapshot) => {
//   expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// const expenses = [
//   {
//     description: "Bike",
//     note: "",
//     amount: 152,
//     createdAt: 1542,
//   },
//   {
//     description: "Car",
//     note: "Bought",
//     amount: 45,
//     createdAt: 4588,
//   },
//   {
//     description: "truck",
//     note: "Sold",
//     amount: 486,
//     createdAt: 48965,
//   },
// ];

// database.ref("expenses").push(expenses[0]);
// database.ref("expenses").push(expenses[1]);
// database.ref("expenses").push(expenses[2]);
// const notes = [
//   {
//     age: 19,
//     name: "Ekam",
//     location: {
//       state: "Punjab",
//       city: "Moga",
//     },
//   },
//   {
//     age: 22,
//     name: "Bikram",
//     location: {
//       city: "Ghaziabad",
//       state: "Up",
//     },
//   },
// ];
// database
//   .ref()
//   .set(notes)
//   .then(() => {
//     console.log("Yes!");
//   })
//   .catch((e) => {
//     console.log("Error: ", error);
//   });
// database.ref().on("value", (snapshot) => {
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });

// database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// });

// const onValueChange = setTimeout(() => {
//   database.ref("age").set(25);
// }, 2000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 4000);

// setTimeout(() => {
//   database.ref("age").set(35);
// }, 6000);

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("Errrr:", error);
//   });
// database
//   .ref()
//   .set({
//     name: "Ekam",
//     age: 19,
//     stressLevel: 5,
//     job: {
//       title: "Software Developer",
//       company: "Google",
//     },
//     location: {
//       city: "Moga",
//       state: "Punjab",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((error) => {
//     console.log("This failed!", error);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data Removed");
//   })
//   .catch((error) => {
//     console.log("Couldn't remove data", error);
//   });

// database
//   .ref()
//   .update({
//     stressLevel: 7,
//     "job/company": "Amazon",
//     "location/city": "Seattle",
//   })
//   .then(() => {
//     console.log("Data updateddd");
//   })
//   .catch((error) => {
//     console.log("couldn't modify data", error);
//   });
