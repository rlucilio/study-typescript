declare module 'url' {
    export interface Url  {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse (
        urlStr: string,
        parseQueryString?: string,
        slashesDenoteHost?: string
    ): Url;
}

declare module 'path' {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}

declare module 'hot-new-module';

// declare module "*!text" {
//     const content: string;
//     export default content;
// }

// declare module 'json!*' {
//     const value: any;
//     export default value;
// }

export function isPrime(x: number): boolean;
export as namespace mathLib;