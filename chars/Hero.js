// ArchyPrototype
function Hero(name) {
    this.name = name;
    this.hp = 10;
    this.gold = 10;
    this.attack = 5;
    this.damage = 4;
}

Hero.prototype.display = function() {
    console.log(this);
};

module.exports = Hero;
