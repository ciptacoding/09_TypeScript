const car: { type: string, model: string, year: number } = {
  type: "Avanza",
  model: "Toyota",
  year: 2009
};

// optional type
const cars: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
cars.mileage = 2000;

//index signature
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.