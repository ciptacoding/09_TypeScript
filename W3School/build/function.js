"use strict";
// return type
// the `: number` here specifies that this function returns a number 
function getTime() {
    return new Date().getTime();
}
// void return type = a function doesn't return any value
function test() {
    console.log('test');
}
// parameter
function multiply(a, b) {
    return a * b;
}
// optional parameter
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
// default parameyter
function pow(value, exponent = 10) {
    return value ** exponent;
}
// named parameter
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ x, y }) {
    return x / y;
}
// Rest parameter
//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addition(a, b, ...rest) {
    return a + b + rest.reduce((p, n) => p + n, 0);
}
console.log(addition(10, 10, 20, 40, 50, 100, 30, 60, 70, 90, 80));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log(negateFunction(19));
