const Archer = require('./Archer');

function ElfArcher() {
    Archer.apply(this, arguments);
    this.stamina = 3;
    this.fireRange = 0;
}
ElfArcher.prototype = Object.create(Archer.prototype);
ElfArcher.prototype.constructor = ElfArcher;

ElfArcher.prototype.longHit = function (target) {
    target.fireRange += this.stamina;
    console.log(`${target.name} made a long shot by ${this.fireRange} hundred yards`);
};

module.exports = ElfArcher;
