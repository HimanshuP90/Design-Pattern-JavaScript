/*
 Symbol :   Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined
*/
let s = Symbol('Himanshu');
console.log(s.toString()); // Symbol(Himanshu)

let s2 = Symbol();
let s3 = Symbol();

console.log(s2 === s3); // false

let s4 = Symbol.for('Covid19');
let s5 = Symbol.for('Covid19');

console.log(Symbol.keyFor(s2));


let fname = Symbol();
let perObj = {
    [fname]: 'Pandey'
};

console.log(Object.getOwnPropertySymbols(perObj));


// for.of -> iterator method --> symbol.iterator

let str = ["Hello"]
let arr = [1,2,3]
let num = 5;
let obj = {name: 'Himanshu'}

// check wheather iterable or not using below methods
console.log("For string -" + typeof str[Symbol.iterator]);  // function
console.log("For arr -" + typeof arr[Symbol.iterator]); // function
console.log("For number -" + typeof num[Symbol.iterator]); // undefined
console.log("For object -" + typeof obj[Symbol.iterator]); // undeinfed

