const express = require('express');
const app = express();
const routes = require('./routes');

const bodyParser = require('body-parser');
app.use( bodyParser.json() );
routes.initialize(app);


app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
