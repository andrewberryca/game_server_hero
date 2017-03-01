const battleStart = require('./battle/start');
const monstrumAdd = require('./monstrum/add');

module.exports = {
    initialize: function (app) {
        app.use('/', battleStart);
        app.use('/', monstrumAdd);
    }
};
