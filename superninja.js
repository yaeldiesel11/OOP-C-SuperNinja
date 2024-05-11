// ninja
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health
        this.speed = 3;
        this.strengh = 3;
    }
    sayName() {
        console.log("Name: ", this.name);
    }
    showStats() {
        console.log("Name: ", this.name);
        console.log("Strengh: ", this.strengh);
        console.log("Speed: ", this.speed);
        console.log("Health: ", this.health);
    }
    drinkSake() {
        this.health += 10;
        console.log("Health: ", this.health);
    }
}

const ninja1 = new Ninja("Naruto", 400)
ninja1.sayName();
console.log("-----------------")
ninja1.showStats();
console.log("-----------------")
ninja1.drinkSake();
console.log("-----------------")