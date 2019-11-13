function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate')
}

// Intermediate Function Inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}


function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius;
}
Circle.prototype.draw = function () {
    console.log('draw')
}
extend(Circle, Shape);

// Method Overriding
Circle.prototype.duplicate = function () {
    // Shape.prototype.duplicate.call(this);
    console.log('duplicate circle')
}


function Sqaure(size) {
    this.size = size;
}

Sqaure.prototype.duplicate = function () {
    console.log('duplicate squre')
}
extend(Sqaure, Shape)

// Polymorphism
const shapes = [
    new Circle(),
    new Sqaure()
]

for (let shape of shapes) {
    console.log(shape)
    shape.duplicate()
}


// const s = new Shape('red');
// const c = new Circle(1, 'green');
// const sq = new Sqaure(10)
