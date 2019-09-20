// Module Design Pattern


// It declares a function, which then calls itself immediately 
// in which the function creates new scope and creates “privacy”
(function() {
    // code
})();


// After creating new scope, we need to namespace our code so that we can access any methods we return.
const Module = (function(){
    // code 
})();

