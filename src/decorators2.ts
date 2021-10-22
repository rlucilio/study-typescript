function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function log(valor: string) {
    console.log(valor);
}

@sealed
class ImmutableClass{
    type = 'Class';

    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const immutableValue = new ImmutableClass('title');
console.log(immutableValue);

Object.defineProperty(immutableValue, 'newTitle', { value: 'new title'})
console.log(immutableValue);

///////////////////////////////////////////


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = 'https://www...';
    }
}

@reportableClassDecorator
class BugReporting {}

console.log(new BugReporting());