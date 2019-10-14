function reverseWords(str) {
  let strArr = str.split(" ");
  let resultArr = [];
  strArr.forEach(word => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    resultArr.push(reverseWord);
  });
  return resultArr.join(" ");
}

console.log(reverseWords("Hello Himanshu how are you"));

// reverse array inplace

function inPlaceReverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(inPlaceReverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// mode in array

function mode(arr) {
  let modeObj = {};
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  return modes;
}

console.log(mode([1, 2, 3, 4, 5, 6, 3, 4, 1, 1, 3]));

// binarySearch

function binarySearch(numArray, key) {
  let middleIdx = Math.floor(numArray.length / 2);
  let middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 42, 56, 71], 56));

// Fibonacci
// 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(3));

//Memoized Fibonacci
function fibonacciMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] =
        fibonacciMemo(index - 1, cache) + fibonacciMemo(index - 2, cache);
    }
  }
  return cache[index];
}

console.log(fibonacciMemo(10));

// merge sort

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  let result = [];
  while (array1.length && array2.length) {
    let minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }
  if (array1.length) result = result.concat(array1);
  else result = result.concat(array2);
  return result;
}

console.log(mergeSort([4, 3, 2, 1]));

// Max Stock Profit

function maxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

console.log(maxStockProfit([10, 18, 4, 5, 9, 16, 12]));

// clone object;

const clone = function(object) {
  let newObject = {};
  for (let key in object) {
    newObject[key] = object[key];
  }
  return newObject;
};

// deepclone

const deepClone = function(object) {
  let newObject = {};
  for (let key in object) {
    if (typeof object[key] === "object") {
      newObject[key] = deepClone(object[key]);
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
};

//Inheritance in JS

const o = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};
console.log(o.m()); // 12
// When calling o.m in this case, 'this' refer to o

const p = Object.create(o); // p is an object that inherits from o
p.a = 12;
console.log(p.m()); // 13
// When calling p.m in this case, 'this' refer to p
// So when p inhertis the function m of o, 'this.a' means p.a, the own property 'a' of p

// Overriding in JS

// create a vehical class
function Vehical(color) {
  this.color = color;
}

// add an instance method
Vehical.prototype.go = function() {
  return "Underway in" + this.color;
};

// add second class
function Car(color) {
  this.color = color;
}

// add declare it is a subclass of the first;
Car.prototype = new Vehical();

// override the instance method
Car.prototype.go = function() {
  return Vehical.prototype.go.call(this) + "car";
};

// Create some instances and see the overridden behavior.
var v = new Vehicle("blue");
v.go(); // "Underway in blue"

var c = new Car("red");
c.go(); // "Underway in red car"

// Remove duplicate from unsorted array

var input = [1, 2, 3, 3, 4, 5, 2, 6, 3, 6, 1];

function removeDuplicate(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate(input));
