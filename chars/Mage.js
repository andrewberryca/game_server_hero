const Hero = require('./Hero');

function Mage() {
    Hero.apply(this, arguments);
    this.magic = 10;
    this.hp = 7;
}

Mage.prototype = Object.create(Hero.prototype);
Mage.prototype.constructor = Mage;

Mage.prototype.cast = function (spellName) {
    console.log(`I'm casting ${spellName}`);
};

module.exports = Mage;
