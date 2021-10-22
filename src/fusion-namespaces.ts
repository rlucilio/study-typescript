namespace Animals {
    export class Zebra {}
}

namespace Animals {
    export interface legged {
        numberOfLegs: number;
    }

    export class Dog {}
}


// Resultado
// namespace Animals {
//     export class Zebra {}
//     export interface Legged {
//         numberOfLegs: number;
//     }
//     export class Dog {}
// }
/////////////////////////////////////////////////////
namespace Animal {
    let haveMuscles = true;
    
    export function animalHaveMuscles() {
        return haveMuscles;
    }
}

namespace Animal {
    export function doAnimalHaveMuscles() {
        //Erro porque a variável está no outro namespace
        // return haveMuscles;
    }
}
/////////////////////////////////////////////////////

class Album {
    label?: Album.AlbumLabel;
}

namespace Album {
    export class AlbumLabel {}
}
/////////////////////////////////////////////////////

enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixinColor(colorName: string) {
        if (colorName === 'yellow') {
            return Color.red + Color.green;
        } else if (colorName === 'white') {
            return Color.red + Color.green + Color.blue;
        } else if (colorName === 'magenta') {
            return Color.red + Color.blue;
        } else if (colorName === 'cyan') {
            return Color.green + Color.blue;
        }
    }
}
/////////////////////////////////////////////////////
