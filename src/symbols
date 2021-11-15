let sym1 = Symbol('key');
let sym2 = Symbol('key');

console.log(`sym1 === sym2 = ${sym1 === sym2}`);

const sym = Symbol();
let obj =  {
    [sym]: "value"
}

console.log(`obj[sym] = ${obj[sym]}`);

const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol]() {
        return 'C';
    }

    static [Symbol.hasInstance]() {
        return false;
    }
}

// console.log(new C()[Symbol.hasInstance])

const cccc = new C();

console.log(cccc instanceof C)

