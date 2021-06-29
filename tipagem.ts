const helloWord = 'Hello Word';

///////////////////////////

interface User {
    name: string;
    id: number;
}

const userInterface: User = {
    name: 'Renan',
    id: 0
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const userClass: User = new UserAccount('Renan', 1);

console.log(userInterface);
console.log(userClass);


function getAdminUser(): User {
    return {
        id: 0,
        name: 'name'
    };
}

function deleteUser(user: User) {}