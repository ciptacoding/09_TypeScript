// keyof with explicit keys
// when used on an object type with explicit keys, keyof creates a union type with those keys
interface Children {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printChildrenProperty(children: Children, property: keyof Children) {
  console.log(`Printing children property ${property}: "${children[property]}"`)
}
let children = {
  name: "cipta",
  age: 21,
}
printChildrenProperty(children, "age"); //Printing children property age: "21"



// keyof with index signatures
// keyof can also be used with index signatures to extract the index type
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}