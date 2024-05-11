// ninja
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Name: ", this.name);
    }
    showStats() {
        console.log("Name: ", this.name);
        console.log("Strengh: ", this.strength);
        console.log("Speed: ", this.speed);
        console.log("Health: ", this.health);
    }
    drinkSake() {
        this.health += 10;
        console.log("Health: ", this.health);
    }
}

const ninja1 = new Ninja("Naruto", 100)
ninja1.sayName();
console.log("-----------------")
ninja1.showStats();
console.log("-----------------")
ninja1.drinkSake();

// superninja
class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    showStats() {
        super.showStats()
        console.log("Wisdom: ", this.wisdom);
    }
}

const sensei1 = new Sensei("Master Splinter");
sensei1.speakWisdom();
sensei1.showStats();