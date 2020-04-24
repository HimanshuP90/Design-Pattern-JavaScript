let(promise) = require(" ./promise ");

console.log(" Promise start from here .... ");
let p = new promise((res, rej) => {
  setTimeout(() => {
    res(" resolve! ");
  }, 100);
});
