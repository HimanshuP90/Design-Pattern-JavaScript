/**
 * The design purpose of Promise.all is to fulfill many promises.
 * For example, when a user logs into a web app like Facebook, several network requests
 * probably need to be made to populate the user’s personalized content:
 */

const userContent = [
  new Promise(getFriendsList),
  new Promise(getGroups),
  new Promise(getLikedPages)
];

function initalizeUserContent() {
  Promise.all(userContent) // 👈 gotta get em all!
    .then(displayHomepage)
    .catch(redirectLoginForm);
}

initalizeUserContent();

// Static Methods: Promise.All
function askFirstDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(8000), 3000)
  })
}
function askSecondtDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(12000), 5000)
  })
}
function askThirdDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10000), 8000)
  })
}

Promise.all([askFirstDealer(), askSecondtDealer(), askThirdDealer()])
  .then(prices => console.log(prices))