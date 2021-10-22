let fst: (a: any, b: any) => any = (a, b) => a;  

let fst2: <T, U>(a: T, b: U) => T = (a, b) => a;

let o: { n: number; xs: object} = {n: 1, xs: []};

type Combined = { a: number } & { b: string};
type Conflicting = { a: number } & { a: string};

const testCombine: Combined = {
    a: 1,
    b: 'as'
}

const testConflict: Conflicting = {
    a: '1'
}