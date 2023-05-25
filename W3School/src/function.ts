// return type
// the `: number` here specifies that this function returns a number 
function getTime(): number {
  return new Date().getTime();
}

// void return type = a function doesn't return any value
function test(): void {
  console.log('test');
}

// parameter
function multiply(a: number, b: number) {
  return a * b;
}

// optional parameter
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// default parameyter
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// named parameter
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ x, y }: { x: number, y: number }) {
  return x / y;
}

// Rest parameter
//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addition(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, n) => p + n, 0);
}
console.log(addition(10, 10, 20, 40, 50, 100, 30, 60, 70, 90, 80));


// type alias
type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(19));