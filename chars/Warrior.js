const Hero = require('./Hero');

function Warrior() {
    Hero.apply(this, arguments);
    this.blocking = 5;
    this.hp = 15;
}

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.block = function (target) {
    target.attack -= this.blocking;
    target.damage = target.damage / 2;
    console.log(`I'm blocking your attack by ${this.blocking}`);
};

module.exports = Warrior;
