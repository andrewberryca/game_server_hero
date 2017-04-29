const Hero = require('./Hero');
const WhiteMage = require('./WhiteMage');
const DarkMage = require('./DarkMage');
const OneHanded = require('./OneHanded');
const TwoHanded = require('./TwoHanded');
const HumanArcher = require('./HumanArcher');
const ElfArcher = require('./ElfArcher');



var hero = new Hero('Archy Hero');
hero.display();


var sasha = new WhiteMage('Sasha Bely');
sasha.display();
sasha.heal(sasha);

var pendolf = new DarkMage('Pendolf Sery');
pendolf.display();

var shvetz = new OneHanded('Shvetz Bratz');
shvetz.display();

var mnutr = new TwoHanded('Mnutr Wratl');
mnutr.display();

var robin = new HumanArcher('Robin Hood');
robin.display();

var logovaz = new ElfArcher('Logovaz the Elf');
logovaz.display();

// Battle test
sasha.heal(robin);
robin.run(robin);
robin.display();

pendolf.curse(sasha);
sasha.display();

robin.penetrate(pendolf);
pendolf.display();

logovaz.longHit(logovaz);
logovaz.display();

mnutr.block(shvetz);
shvetz.fastAttack(mnutr);
mnutr.display();

shvetz.block(mnutr);
mnutr.strongAttack(shvetz);
shvetz.display();
