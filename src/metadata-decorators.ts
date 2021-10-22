import 'reflect-metadata';

function validate<T>(
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
) {
    let set = descriptor.set!;

    descriptor.set = function(value: T) {
        let type = Reflect.getMetadata('design:type', target, propertyKey);

        if (!(value instanceof type)) {
            throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`)
        }
        set.call(this, value);
    }
}

class Point {
    constructor(
        public x: number,
        public y: number
    ){}
}

class Line {
    private _start: Point | undefined;
    private _end: Point | undefined;

    @validate
    set end(value: Point) {
        this._end = value;
    }

    get end(): Point {
        return this._end!;
    }

    @validate
    set start(value: Point) {
        this._start = value;
    }

    get start(): Point {
        return this._start!;
    }
 }

 const line = new Line();
 line.start = new Point(0, 0);
 //@ts-ignore
 line.end = {};