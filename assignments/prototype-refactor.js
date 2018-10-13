// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject {
    constructor({ createdAt, dimensions }) {
        Object.assign(this, { createdAt, dimensions });
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor({ hp, name, createdAt, dimensions }) {
        super({ createdAt, dimensions });
        Object.assign(this, { hp, name });
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }

    destroy() {
        return super.destroy();
    }
}

class Humanoid extends CharacterStats {
    constructor({
        faction,
        weapons,
        language,
        hp,
        name,
        createdAt,
        dimensions
    }) {
        super({ hp, name, createdAt, dimensions });
        Object.assign(this, { faction, weapons, language });
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }

    destroy() {
        return super.destroy();
    }

    takeDamage() {
        return super.takeDamage();
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: ['Staff of Shamalama'],
    language: 'Common Toungue'
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: ['Giant Sword', 'Shield'],
    language: 'Common Toungue'
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: ['Bow', 'Dagger'],
    language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
