
const Pausable = (target: typeof Player) => {
    return class Pausable extends target {
        shouldFreeze = false;
    };
};

@Pausable
class Player {
    x = 0;
    y = 0;
}

const player = new Player();
// player.shouldFreeze;
// Não é possível acessar a propriedade devido ela está no decorator

type FreezablePlayer = Player & { shouldFreeze: boolean };
const playerTwo = (new Player() as unknown) as FreezablePlayer;
playerTwo.shouldFreeze;