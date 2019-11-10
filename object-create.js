/**
 * Object.assign(): method is used to copy the values of all enumerable own properties from one or more
 *                  source objects to a taget object. It will return the target object
 * 
 * Object.create(): methods creates a new object, using an existing object as the prototype of newly created object
 */

const target = {
    a: 1,
    b: 2
}
const source = {
    c: 3,
    d: 4
}

const returnOject = Object.assign(target, source);

// Object.assign(target, ...source)


// superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved');
}

// subclass
function Rectangle() {
    Shape.call(this); // call super constructor
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If we don't set Object.prototype.constructor to Rectangle, it will take prototype.constructor of Shape (parent)
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'


// If you wish to inherit from multiple objects, then mixins are a possibility.
function MyClass() {
    SupperClass.call(this);
    OtherSuperClass.call(this);
}

// inherit one class
MyClass.prototype = Object.create(SupperClass.prototype);

// mixin another
Object.assign(MyClass.prototype, OtherSuperClass.prototype);

//re-assign constructor
MyClass.prototype.constructor = MyClass;
MyClass.prototype.myMethod = function () {
    console.log('something')
}