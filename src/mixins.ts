class Sprite {
    x = 0;
    y = 0;
    nome = '';

    constructor(nome: string) {
        this.nome = nome;
    }
}

type Constructor = new (...args: any) => {};

function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
        _scale = 1;

        setScale(scale: number) {
            this._scale = scale;
        }

        get scale(): number {
            return this._scale;
        }
    }
}

const EightBitSprite = Scale(Sprite);
const flappySprite = new EightBitSprite('Bird');
flappySprite.setScale(0.8);

console.log(flappySprite.scale);
console.log(flappySprite.nome);