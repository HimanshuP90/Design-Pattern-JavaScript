//https://chrisboakes.com/how-a-javascript-debounce-function-works/

function debounce(callback, wait) {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}

//Say you want to detect how far a user has scrolled down a page and,
//when they reach a certain point, you lazy load an image. You’d bind a scroll listener like so:

window.addEventListener("scroll", () => {
  // Check how far the user has scrolled
});

//The problem here is the quantity of times it’s fired. It will run as many times as the
// browser chooses run it whilst the user is scrolling. This can be quite taxing for the browser.
// We should really be enforcing a limit on how often this is run. In comes debounce.

window.addEventListener(
  "scroll",
  debounce(() => {
    // Check how far the user has scrolled
  }, 500)
);
