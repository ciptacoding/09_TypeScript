// default enum numeric dimulai dari 0
enum Call {
  aku,
  kamu,
  dia,
  saya
}

let currentCall = Call.dia;
console.log(currentCall);

/*
enum numeric initialized = angkanya pertamanya diinitialisasi
*/
enum Fruit {
  semangka = 1,
  jeruk,
  mangga,
  nanas
}

let currentFruit = Fruit.nanas;
console.log(currentFruit);



enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


// string enum
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);