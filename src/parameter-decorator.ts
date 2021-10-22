import 'reflect-metadata';

const requiredMetadataKey = Symbol('required');

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameter: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameter.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameter, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    let method = descriptor.value!;

    descriptor.value = function () {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);

        if (requiredMetadataKey) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required arguments");
                }
            }
        }
        return method.apply(this, arguments);
    }
}

class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }

    @validate
    print(@required verbose?: boolean) {
        if (verbose) {
            return `type: ${this.type}\ntitle: ${this.title}`;
        } else {
            return this.title;
        }
    }
}

console.log(new BugReport('Renan').print());