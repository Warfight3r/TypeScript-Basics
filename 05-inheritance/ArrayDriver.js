"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(9, 12, 18);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 10, 20);
// Declare an array of shapes... initially empty
let shapesArray = [];
// Add the shapes to the array
shapesArray.push(myShape);
shapesArray.push(myCircle);
shapesArray.push(myRectangle);
for (let tempShape of shapesArray) {
    console.log(tempShape.getInfo());
}
