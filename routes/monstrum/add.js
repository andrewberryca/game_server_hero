const express = require('express');
const router = express.Router();
const co = require('co');

const mongo = require('../../lib/mongo');

router.post('/monstrum/add', co.wrap (function* (req, res) {
    const monstrum = req.body.monstrum;
    console.log(`monstrum`, monstrum);
    console.log(`typeof monstrum`, typeof monstrum);
    const collectionName = 'monstrums';
    const collection = yield mongo.getCollection(collectionName);
    yield collection.insertOne(monstrum);
    res.end(JSON.stringify({
        success: true
    }))
}));

module.exports = router;
