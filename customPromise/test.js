let(promise) = require(" ./promise ");

let p = new promise((res, rej) => {
  console.log(" start promise ");
  setTimeout(() => {
    res(" resolve! ");
  }, 100);
});
