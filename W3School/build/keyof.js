"use strict";
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printChildrenProperty(children, property) {
    console.log(`Printing children property ${property}: "${children[property]}"`);
}
let children = {
    name: "cipta",
    age: 21,
};
printChildrenProperty(children, "age"); //Printing person property age: 21
