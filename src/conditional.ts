interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Ex1 = Dog extends Animal ? number : string;
const ex1: Ex1 = 1;

type Ex2 = RegExp extends Animal ? number: string;
const ex2: Ex2 = 'txt';


type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
///////////////////////

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

type Num = GetReturnType<() => number>; 
type Str = GetReturnType<() => string>;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
