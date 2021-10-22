class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(true)
    greet() {
        return `Hello, ${this.greeting}`;
    }
}

function enumerable(value: boolean) {
    return function (
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor) {
            descriptor.writable = value;
    }
} 

console.log(new Greeter('Renan').greet());
