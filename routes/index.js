const battleStart = require ('./battle/start');

module.exports = {
    initialize: function (app) {
    app.use('/', battleStart);
    }

};