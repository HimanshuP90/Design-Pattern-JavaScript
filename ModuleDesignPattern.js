// Module Design Pattern


// It declares a function, which then calls itself immediately 
// in which the function creates new scope and creates “privacy”
(function() {
    // code
})();


// After creating new scope, we need to namespace our code so that we can access any methods we return.
// we have declared Module in the global scope
const Module = (function(){
    
    //Private methods
    var privateMethod = function() {
        // do something
    };

    //Public methods
    var publicMethodTwo = function() {
        //Revealing private stuff
        privateMethod()
    };
    
    //Public methods
    var publicMethodThree = function() {
        //code
    }

    return {
        publicMethodOne: function() {
            //code
        },
        someMethodTwo: publicMethodTwo,
        someMethodThree: publicMethodThree
    };

})();
