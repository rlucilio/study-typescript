/// <reference path="./namespaces.ts" />
namespace Validation {
    const numberRegexp = /^[0-9]+$/;
    
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return numberRegexp.test(s);
        }
    }
}
