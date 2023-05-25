"use strict";
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Segitiga extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const newSegitiga = new Segitiga(10, 20);
console.log(newSegitiga.getArea());
