
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let b: unknown = 'hello';
console.log((b as string).length);

// Using <> works the same as casting with as.
let x: unknown = 'hello';
console.log((<string>x).length);