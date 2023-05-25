"use strict";
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
//classes generic
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
const value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
const wrappedValue = { value: 10 };
// default value
class NamaValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let nilai = new NamaValue('myNumber');
nilai.setValue('nilaiSaya');
console.log(nilai.toString()); // myNumber: myValue
// extends
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
function createLoggedPair(v1, v2) {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
