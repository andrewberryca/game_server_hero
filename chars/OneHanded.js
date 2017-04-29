const Warrior = require('./Warrior');

function OneHanded() {
    Warrior.apply(this, arguments);
    this.fastAttacking = 3;
}

OneHanded.prototype = Object.create(Warrior.prototype);
OneHanded.prototype.constructor = OneHanded;

OneHanded.prototype.fastAttack = function (target) {
    target.hp -= this.fastAttacking;
    console.log(`${target.name} was damaged by ${this.fastAttacking} points by fast attack`);
};

module.exports = OneHanded;
