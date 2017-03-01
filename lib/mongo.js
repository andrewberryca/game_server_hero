const mongodb = require('mongodb');


module.exports = {
    /**
     *
     * @param {string} host
     * @param {number} port
     * @param {string} dbName
     * @returns {Object}
     */
    *getDb(host = 'localhost', port = 27017, dbName = 'test') {
        const url = 'mongodb://' + host + ':' + port + '/' + dbName;
        return yield mongodb.MongoClient.connect(url);
    },

    /**
     *
     * @param {string} name
     * @returns {Object}
     */
    *getCollection(name) {
        const db = yield this.getDb();
        return db.collection(name);
    }
};
