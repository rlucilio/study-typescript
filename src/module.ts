declare function require(moduleName: string): any;
import { ZipCodeValidator as Zip } from "./module2";

if (true) {
    let module = require("./module2");
    let validator = (new module.ZipCodeValidator() as Zip);
    if (validator.isAcceptable("...")) {
        console.log('teste1');
    } else {
        console.log('teste2');
    }
}