//express is used to help creating a server.
const express = require('express');

//helps to work with the body of the incoming requests
const bodyParser = require('body-parser');

//initialize express in order to use it
const app = express();

/**
 * Middlewares. Every request will be pre-processed even before it gets to the code that executes it.
 */
app.use(bodyParser.json());

// very basic route
require('./routes/basicRoute')(app); 

/**
 * Dev vs Prod Port
 */
const PORT = 5000;
app.listen(PORT);