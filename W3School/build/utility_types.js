"use strict";
let pointPart = {}; //partial memungkinkan x dan y menjadi optional
pointPart.x = 10;
console.log(pointPart);
let myMotor = {
    plat: 2001,
    merk: "Toyota",
    colour: "Red",
};
console.log(myMotor);
// record 
// is a shortcut to defining an object type with a specific key type and value type
const namaAgeMap = {
    'Affan': 21,
    'Fathan': 20,
};
console.log(namaAgeMap);
const albert = {
    name: "albert",
    // omit has removed age and location from the type and they can't be defined here
};
console.log(albert);
const oppo = {
    merk: 'Oppo'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
const values = true; // a string cannot be used here since Exclude removed it from the type.
console.log(typeof values);
const point = {
    x: 10,
    y: 20,
};
console.log(point);
const poin = {
    x: 10,
    y: 20
};
console.log(poin);
