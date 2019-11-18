/**
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation
 * which take executor 
 * A callback used to initialize the promise. This callback is passed two arguments: 
 *  a resolve callback used to resolve the promise with a value or the result of another promise,
 *  and a reject callback used to reject the promise with a provided reason or error.
 */

// Promise(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void): Promise<any>

let p = new Promise((resolve, reject) => {

})

p.then(res => console.log(res), err => console.log(err))

// sum function which return promise
function sum(a, b) {
    const result = new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return reject(new Error('Both argument should be number'))
        } else {
            return resolve(a + b)
        }
    })
    return result;
}


sum(3, 4).then(
    res => console.log(res),
    err => console.log(err)
)

function square(a) {
    const result = new Promise((resolve, reject) => {
        if (typeof a !== "number") {
            return reject(new Error('Argument should be number'))
        }
        return resolve(a * a);
    })
    return result;
}

// chaining promise
sum(1, 2)
    .then(result => square(result))
    .then(finalResult => console.log(finalResult)); // 9


//  Promisify Any Function In JavaScript
function capatilazie(text) {
    return new Promise(function (resolve, reject) {
        if (typeof text !== 'string') {
            return reject(new Error('Argument must be a string'))
        }
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    })
}

console.log(capatilazie('himanshu'))

// Static Methods: Promise.Resolve And Promise.Reject
function logToConsole(somePromise) {
    somePromise.then(value => console.log(value))
}

const somePromise = new Promise((resolve, reject) => resolve('Hello'))

logToConsole(somePromise) // hello

const name = 'Hiamnshu'
logToConsole(name) // error bcz excpect promise

const promisifiedValue = Promise.resolve(name);
logToConsole(logToConsole) // Himanshu


