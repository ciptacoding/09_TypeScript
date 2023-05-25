"use strict";
// default enum numeric dimulai dari 0
var Call;
(function (Call) {
    Call[Call["aku"] = 0] = "aku";
    Call[Call["kamu"] = 1] = "kamu";
    Call[Call["dia"] = 2] = "dia";
    Call[Call["saya"] = 3] = "saya";
})(Call || (Call = {}));
let currentCall = Call.dia;
console.log(currentCall);
/*
enum numeric initialized = angkanya pertamanya diinitialisasi
*/
var Fruit;
(function (Fruit) {
    Fruit[Fruit["semangka"] = 1] = "semangka";
    Fruit[Fruit["jeruk"] = 2] = "jeruk";
    Fruit[Fruit["mangga"] = 3] = "mangga";
    Fruit[Fruit["nanas"] = 4] = "nanas";
})(Fruit || (Fruit = {}));
let currentFruit = Fruit.nanas;
console.log(currentFruit);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// string enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
