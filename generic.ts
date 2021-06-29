type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

////////////////////////

interface Backpack<type> {
    get: () => type;
    add: (value: type) => type;
}

declare const backpack: Backpack<string>;

// const obj = backpack.get();

//error in run time
// console.log(obj);
/////////////////////////

class Car {
    drive() {}
}

class Bike {
    drive() {}
}

// no error
let bmw: Car = new Bike();
console.log(typeof bmw); // Object
console.log(typeof (new Car())); // Object
console.log(bmw instanceof Car); // False
console.log(bmw instanceof Bike); // False
console.log((bmw as Object).constructor.name); // Bike
/////