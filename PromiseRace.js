var askJohn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Yep, I got one extra pen."), 3000);
  });
};

var askTiger = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Sorry man, got only one."), 5000);
  });
};

var askAlia = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Sure, I have a pen for you."), 2000);
  });
};

Promise.race([askJohn(), askTiger(), askAlia()]).then(value =>
  console.log(value)
);
// Sure, I have a pen for you.

var askAtTheShop = () => {
  return Promise.resolve("We always have pens, You can buy one for 10 rupess");
};

Promise.race([askJohn(), askTiger(), askAlia(), askAtTheShop()]).then(value =>
  console.log(value)
);
// We always have pens, You can buy one for 10 rupess
