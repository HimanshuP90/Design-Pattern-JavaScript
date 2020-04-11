/*
Iterable {
    [symbol.Iterator](): Iterator
}

Iterator{
    next(): IResultObj
}

IResultObj{
    value: any
    done: bool
}
*/

/**
 * Symbol.iterator
 * Whenever an object needs to be iterated (such as at the beginning of a for..of loop), 
 * its @@iterator method is called with no arguments, and the returned iterator is used to obtain
 * the values to be iterated
 *  error: Symbol.iterator is not a function , then you can implement your own iterator
 * 
 */

let iterable = [1, 2, 3];

// own Iterator
function createIterator(array) {
  let count = 0;
  return {
    next: function () {
      return count < array.length
        ? { value: array[count++], done: false }
        : { value: undefined, done: true };
    },
  };
}

let myIterator = createIterator(iterable);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

let person = {
  fname: "Himanshu",
  lname: "Pandey",
};

person[Symbol.iterator] = function () {
  let properties = Object.keys(person);
  let count = 0;
  let isDone = false;
  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return {
      done: isDone,
      value: this[properties[count++]],
    };
  };
  return { next };
};

// using genrator same concept above
person[Symbol.iterator] = function* () {
  let properties = Object.keys(person);
  for (let t of properties) {
    yield this[t];
  }
};

for (let p of person) {
  console.log("p", p);
}
