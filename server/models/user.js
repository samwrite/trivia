const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {type: String},
    score: {type: String}
});

mongoose.model('User', UserSchema);