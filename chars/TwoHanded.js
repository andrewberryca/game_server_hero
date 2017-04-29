const Warrior = require('./Warrior');

function TwoHanded() {
    Warrior.apply(this, arguments);
    this.strongAttacking = 4;
}

TwoHanded.prototype = Object.create(Warrior.prototype);
TwoHanded.prototype.constructor = TwoHanded;

TwoHanded.prototype.strongAttack = function (target) {
    target.hp -= this.strongAttacking;
    console.log(`${target.name} was damaged by ${this.strongAttacking} points by strong attack`);
};

module.exports = TwoHanded;
