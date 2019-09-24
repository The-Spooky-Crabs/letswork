//Authentication
const passport = require('passport');

//Google Authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//import Google Keys
const keys = require('../config/keys');


passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access Token: ', accessToken);
        console.log('refresh Token: ', refreshToken);
        console.log('profile: ', profile);
    }));