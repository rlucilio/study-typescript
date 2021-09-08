interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Ex1 = Dog extends Animal ? number : string;
const ex1: Ex1 = 1;

type Ex2 = 