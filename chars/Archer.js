const Hero = require('./Hero');

function Archer() {
    Hero.apply(this, arguments);
    this.penetrating = 2;
}
Archer.prototype = Object.create(Hero.prototype);
Archer.prototype.constructor = Archer;

Archer.prototype.penetrate = function (target) {
    target.hp -= this.penetrating;
    console.log(`${target.name} was damaged by penetration by ${this.penetrating} points`);
};

module.exports = Archer;
