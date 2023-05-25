"use strict";
class Kotak {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Kotak {
    constructor(width) {
        super(width, width);
    }
}
const mySq = new Square(20);
console.log(mySq.getArea());
