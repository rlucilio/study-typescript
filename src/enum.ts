
// -> Valor ordinal
enum DirectionOrd {
    Up = 1,
    Down, //2
    Left, //3
    Right //4
}

enum DirectionNotOrd {
    Up, //0
    Down, //1
    Left, //2
    Right //3
}

// -> Usando

enum UserResponse {
    No = 0,
    Yes = 1
}

function respond(recipient: string, message: UserResponse): void {
    //
}

respond('Princess Caroline', UserResponse.Yes);

// -> Computando o valor do enum

function getSomeValue(): number { 
    console.log('Testando uma função em um enum')    
    return 1
}

function getSomeValue2(): number {
    return 2;
}

enum E {
    A = getSomeValue(),
    B = getSomeValue2()
}

// -> Enum string

enum DirectionStr {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

// -> Enum heterogêneo

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = 'YES'
}

//  -> ???
enum E2 {
    X,
}

enum E3 {
    X,
    Y,
    Z,
}

enum E4 {
    A = 1,
    B,
    C,
}

// -> Valores computados e valores constantes
enum FileAccess {
    // Constante
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,

    // Computado
    G = '123'.length
}

// -> Verificações do enum

enum ShapeKind {
    Circle,
    Square
}

interface Circlee {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square,
    sideLength: number;
}

// let cc: Circlee = {
//     kind: ShapeKind.Square, // Aqui só pode ser ShapeKind.Circle
//     radius: 100
// }

enum EEE {
    Foo,
    Bar
}

// function f(x: EEE) {
//     if (x !== EEE.Foo || x !== EEE.Bar) {
//         // Aqui vai sempre retorna true
//     }
// }

// -> Usando o enum como obj 

enum ERunTime {
    X,
    Y,
    Z
}

function f(obj: { X: number }) {
    return obj.X;
}

f(ERunTime)
// Aqui funciona normal pq o enum tem a propriedade X

// -> Fazendo o parser do enum de string = enum

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
}

type LogLevelString = keyof typeof LogLevel;

function printImportant(key: LogLevelString, message: string) {
    const num = LogLevel[key];

    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message); 
    }
}

printImportant('ERROR', 'This is message');

// -> Fazendo o parse do enum = string

enum Enum {
    A
}

let aa = Enum.A;
let nameOfA = Enum[aa];

// -> ??

const enum Enum2 {
    A = 1,
    B = A * 2
}

// -> ???

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
]

// -> ???

declare enum EnumDeclare {
    A = 1,
    B,
    C = 2,
}

// -> A diferença de utilização entre o objeto constante e o enum
const enum EDirection {
    Up,
    Down,
    Left,
    Right
}

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
} as const;

EDirection.Up;
ODirection.Up;

function walk(dir: EDirection) {}

type DirectionType = typeof ODirection[keyof typeof ODirection];
function run(dir: DirectionType) {}

walk(EDirection.Left);
run(ODirection.Up);
