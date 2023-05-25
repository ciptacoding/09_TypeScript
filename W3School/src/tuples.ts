//define our tuple
let ourTuple: [number, boolean, string];

//initialize correctly
ourTuple = [5, true, "test"];
console.log(ourTuple);

//define our readonly tuple
const ourReadonlyTuples: readonly [number, boolean, string] = [5, true, "the real coding"];

// named tuples
const graph: [x: number, y: number] = [10, 5];
