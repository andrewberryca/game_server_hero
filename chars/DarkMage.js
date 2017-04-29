const Mage = require('./Mage');

function DarkMage() {
    Mage.apply(this, arguments);
    this.cursing = 3;
}

DarkMage.prototype = Object.create(Mage.prototype);
DarkMage.prototype.constructor = DarkMage;

DarkMage.prototype.curse = function (target) {
    target.hp -= this.cursing;
    console.log(`${target.name} was damaged by ${this.cursing} points by cursing`);
};

module.exports = DarkMage;
