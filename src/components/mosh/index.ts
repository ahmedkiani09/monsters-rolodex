//! arrays
let numbers: [number, string] = [1, "ahmed"];
numbers.push(1);

//! enums
enum Sizes {
  small = 1,
  medium,
  large,
  XtraLarge,
}

let mySize: Sizes = Sizes.small;
console.log(mySize);

// !function
const retirementFunc = (date: Date): void => {
  console.log(date);
};

//! type aliases:
type Employee = {
  readonly id: number;
  name: string;
  retirement: (date: Date) => void;
};

//! objects
const employees: Employee = {
  id: 123,
  name: "Ahmed",
  retirement: (date: Date) => {
    console.log(date);
  },
};

console.log(employees);

//! union types:
const weightCalculator = (weight: number | string): number => {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
};

console.log(weightCalculator("23"));

//! Intersection types:
type USAddress = {
  city: string;
  state: string;
};

type PakAddress = { city: string; province: string };

type Address = PakAddress | USAddress;

const ahmedAddress: Address = {
  city: "islamabad",
  state: "NY",
  province: "Federal province",
};
console.log(ahmedAddress);

//! literal types:

type Age2 = 18 | 12;

const age: Age2 = 12;

console.log(age);

//! nullable types:
const greet = (name: string | null | undefined): void => {
  if (name) console.log(`helo ${name}`);
  else console.log("Hola");
};

greet(undefined);
