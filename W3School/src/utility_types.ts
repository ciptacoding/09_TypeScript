// Partial => changes all the properties in an object to be optional
interface Point {
  x: number;
  y: number;
}
let pointPart: Partial<Point> = {}; //partial memungkinkan x dan y menjadi optional
pointPart.x = 10;
console.log(pointPart);


// required 
// changes all the properties in an object to be required
interface Motor {
  plat: number;
  merk: string;
  colour?: string;
}
let myMotor: Required<Motor> = {
  plat: 2001,
  merk: "Toyota",
  colour: "Red",
};
console.log(myMotor);


// record 
// is a shortcut to defining an object type with a specific key type and value type
const namaAgeMap: Record<string, number> = {
  'Affan': 21,
  'Fathan': 20,
}
console.log(namaAgeMap);


// omit
// removes keys from an object type
interface People {
  name: string;
  age: number;
  address?: string;
}
const albert: Omit<People, 'age' | 'address'> = {
  name: "albert",
  // omit has removed age and location from the type and they can't be defined here
}
console.log(albert);


//pick removes all but the specified keys from an object type
interface Handphone {
  merk: string;
  series: string;
  price: number
}
const oppo: Pick<Handphone, 'merk'> = {
  merk: 'Oppo'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};


// exclude  remove types fro unions
type Primitive = string | number | boolean
const values: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
console.log(typeof values);


// ReturnType extracts the return type of a function type.
type PointGenerator = () => {
  x: number;
  y: number;
}
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};
console.log(point);


// parameter extract the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number; }) => void;
const poin: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
console.log(poin)