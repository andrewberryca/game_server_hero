const Archer = require('./Archer');

function HumanArcher() {
    Archer.apply(this, arguments);
    this.stamina = 3;
    this.distance = 0;
}
HumanArcher.prototype = Object.create(Archer.prototype);
HumanArcher.prototype.constructor = HumanArcher;

HumanArcher.prototype.run = function (target) {
    target.distance += this.stamina;
    console.log(`${target.name} moved extra ${this.distance} cells`);
};

module.exports = HumanArcher;
