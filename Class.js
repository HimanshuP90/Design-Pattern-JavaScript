/**
 * class -> object
 * instance properties -> what they have
 * instance methods -> what the do
 */

class Reactangle {
    constructor(width, height, color) {
        console.log('Reactangle is being created !')

        // Instance properties
        this.width = width;
        this.height = height;
        this.color = color;
    }

    get Area() {
        return this.width * this.height;
    }

    set Area(height) {
        console.log(`The reactangle have ${height} * ${this.width} with ${this.color}`);
    }

    static equals(a, b) {
        return a.width + a.height === b.width + b.height;
    }
}

let myReactangle1 = new Reactangle(5, 3, 'blue');
let myReactangle2 = new Reactangle(6, 4, 'red');
myReactangle1.Area = 25
// console.log(myReactangle1.Area)
// console.log(Reactangle.equals(myReactangle1, myReactangle2))

//classes: Extends/inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}

class Programmer extends Person {
    constructor(name, age, yearOfExp) {
        super(name, age)
        this.yearOfExp = yearOfExp;
    }

    code() {
        console.log(`${this.name} is coding`)
    }
}

const programmers = [
    new Programmer('John', 56, 12),
    new Programmer('Doe', 23, 13)
]

function developSoftware(programmers) {
    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);

/**
 * Classes: Polymorphism
 * Polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic Animal Sound!')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        super.makeSound();
        console.log('Woof Woof !!');
    }
}

const a1 = new Animal('Dom');
const a2 = new Dog('Jeff');
a1.makeSound();
a2.makeSound();

class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = ['ReactJS', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'OOP JS'];
    }

    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    update() {
        /* Remove all existing <li> element/tags */
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        /* Fill ul tag with li */
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
    }

    add(text) {
        this.textList.push(text);
        this.update()
    }

    remove(index) {
        this.textList.splice(index);
        this.update()
    }

}

const myList = document.getElementById('myList');
const listBinding = new ListBinding(myList)


// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    };
}
const circle = createCircle(1);


// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}
const another = new Circle(1)
// const another = Circle.call({}, 1) i.e, same as above


let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number); // 10 i.e. primitives(number, boolean, string, null, undefined, symbol) copied by value i.e. Values Types

let obj = { value: 10 }
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj) // {value: 11} i.e. object  i.e. Reference Types(Object, Function, Array) copied by their reference