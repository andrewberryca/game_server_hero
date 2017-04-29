const Mage = require('./Mage');

function WhiteMage() {
    Mage.apply(this, arguments);
    this.healing = 2;
}

WhiteMage.prototype = Object.create(Mage.prototype);
WhiteMage.prototype.constructor = WhiteMage;

WhiteMage.prototype.heal = function (target) {
    target.hp += this.healing;
    console.log(`${target.name} was healed by ${this.healing} points`);
};

module.exports = WhiteMage;
