"use strict";
const car = {
    type: "Avanza",
    model: "Toyota",
    year: 2009
};
// optional type
const cars = {
    type: "Toyota"
};
cars.mileage = 2000;
//index signature
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
