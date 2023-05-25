function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>('hello', 42)); // ['hello', 42]



//classes generic
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) { }

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

const value = new NamedValue<number>('myNumber');

value.setValue(10);

console.log(value.toString()); // myNumber: 10



// type aliases
// Generics in type aliases allow creating types that are more reusable.
type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };



// default value
class NamaValue<T = string> {
  private _value: T | undefined;

  constructor(private name: string) { }

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let nilai = new NamaValue('myNumber');
nilai.setValue('nilaiSaya');
console.log(nilai.toString()); // myNumber: myValue



// extends
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}
