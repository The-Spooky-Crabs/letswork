//express is used to help creating a server.
const express = require('express');

//helps to work with the body of the incoming requests
const bodyParser = require('body-parser');

//layer between server and mongodb cluster
const mongoose = require('mongoose');

//cookies used to keep user logged in for set period of time
const cookieSession = require('cookie-session');

////passport service used for Google Authentication
const passport = require('passport');

//import keys
const keys = require('./config/keys');

//import defined user schema
require('./models/User'); 

//passport service used for Google Authentication
require('./services/passport');

//connect to MongoDB Cluster using Mongoose
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//initialize express in order to use it
const app = express();

/**
 * Middlewares. Every request will be pre-processed even before it gets to the code that executes it.
 */
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //duration the cookie will exist before expired
        keys: [keys.cookieKey]            //to encrypt cookie key
    })
);

app.use(passport.initialize());

app.use(passport.session());

// defaul Routes
require('./routes/basicRoute')(app); 

// Authentication Routes
require('./routes/oauthRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);