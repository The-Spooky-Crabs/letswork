//Authentication
const passport = require('passport');

const mongoose = require('mongoose');

//Google Authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//import Google Keys
const keys = require('../config/keys');

//get access to users collection
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    //user is the reference to the object that was found or inserted into the database
    //by passport.use function bellow. Moreover, user.id is the id of the document inside
    //the database (unique);
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    //turn id that represents the record in the database into the 
    //user mongoose instance
    User.findById(id)
        .then( (user) => {
            done(null, user);
        })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
        // console.log('access Token: ', accessToken);
        // console.log('refresh Token: ', refreshToken);
        // console.log('profile: ', profile);

        const userDoesExist = await User.findOne({ googleId: profile.id });
        if(userDoesExist){
            return done(null, userDoesExist);
        } else {
            //creates new mongoose model instance - user and saves it in the database by calling .save(). Then calls done()
            const newUser = await new User({ googleId: profile.id }).save();
            done(null, newUser);
        }
    }));