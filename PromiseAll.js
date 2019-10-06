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
