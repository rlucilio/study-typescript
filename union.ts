type MyBool = true | false | 0 |  1 | 'sim' | 'não' | 's' | 'n'

function getLength<T>(value: string | Array<T>) {
    return value.length;
}

function wrapInArray(value: string | string[]) {
    if (typeof value === "string") return [value];
    
    return value;
}