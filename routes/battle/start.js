const express = require('express');
const router = express.Router();
const co = require('co');


const mongo = require('../../lib/mongo');


function* loadUser (name) {
    const collection = yield mongo.getCollection('user');
    const result = yield collection.findOne({ name: name });
    return result || {name: name};
}

function* saveUser (data) {
    const collection = yield mongo.getCollection('user');
    yield collection.update({name: data.name}, data, {upsert: true});
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function youHit() {
    return random(1, 6) > 3;
}

function battle() {
    var result = {
        message: '',
        win: false,
    };
    var totalDamage = 0;

    while (true) {
        if (!youHit()) {
            result.message += "The Monstrum kills you and takes you to the cave...\n";
            break;
        }

        let damageThisRound = random(1, 5);
        result.message += "You hit the monstrum and did " + damageThisRound + " damage!\n";
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            result.message += "You did it! Monstrum is dead!\n";
            result.win = true;
            break;
        }
    }
    return result;
}

router.post('/battle/start', co.wrap (function* (req, res) {
    const name = req.body.name;
    if (typeof name !== 'string' || !name.length) {
        res.end('Parameter name of string type is required');
        return;
    }
    const user = yield loadUser(name);
    user.gold = user.gold || 0;
    user.experience = user.experience || 0;

    const battleResult = battle();
    if (battleResult.win) {
        user.gold += 10;
        user.experience += 5;
        yield saveUser(user);
    }
    const result = {
        win: battleResult.win,
        message: battleResult.message,
        gold: user.gold,
        experience: user.experience,
    };
    res.end(JSON.stringify(result));
}));

module.exports = router;
