import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(9, 12, 18);
let myRectangle = new Rectangle(0, 0, 10, 20);

// Declare an array of shapes... initially empty
let shapesArray: Shape[] = [];

// Add the shapes to the array
shapesArray.push(myCircle);
shapesArray.push(myRectangle);

for(let tempShape of shapesArray){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
