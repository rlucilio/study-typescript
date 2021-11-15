interface Horse {}

type OnlyBoolsAndHorser = {
    [key: string]: boolean | Horse;
}

const conforms: OnlyBoolsAndHorser = {
    del: true,
    rodney: false
} 

///////////////
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
}

const conforms2: OptionsFlags<{nome: string, idade: number}> = {
    idade: true,
    nome: false
}
////////////////
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]
}

const a: CreateMutable<{nome: string}> = {
    nome: 'renan'
}
a.nome = 'lucilio';

type LockedAccount = {
    readonly id: string;
    readonly name: string;
}

const b: LockedAccount = {
    id: 'id',
    name: 'name'
}

// ERROR
// b.id = 'das';
// b.name = 'das';

type UnlockedAccount = CreateMutable<LockedAccount>;
const c: UnlockedAccount = {
    id: 'id',
    name: 'name'
}

c.id = '3123';
c.name = '3123';
////////////////

interface TestOptional {
    name?: string;
    id: string;
}

const testOptional: TestOptional = {
    id: 'id'
}

/////////////////
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
}

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
}

type UserConcrete = Concrete<MaybeUser>;

// type UserConcrete = {
//     id: string;
//     name: string;
//     age: number;
// }


///////////////////////
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;
// type LazyPerson = {
//     getFirstName: () => string;
//     getLastName: () => string;
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// }

///////////////////////

type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
}

interface Circle {
    kind: 'circle';
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
// type KindlessCircle = {
//     radius: number;
// }

//////////////////////////

type PropEventSource<Type> = {
    on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;


const per = makeWatchedObject({
    firstName: 'Renan',
    lastName: 'Lucilio',
    age: 25
});

per.on('ageChanged', (newValue: number) => {})