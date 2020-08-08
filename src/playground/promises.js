const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is my resolved data");
    reject("Something went wrong!");
  }, 4000);
});
// firebase creates its own promise all we do is use handlers- then and catch
console.log("before");

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("After");
