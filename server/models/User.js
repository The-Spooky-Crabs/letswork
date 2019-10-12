const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    username: String,
    password: String
});

//to create a new collection with the defined schema
mongoose.model('users', userSchema);  