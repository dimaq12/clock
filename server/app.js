
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');


// create our Express app
const app = express();

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);


module.exports = app;