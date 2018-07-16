let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : String,
    pass : String
});

module.exports = mongoose.model('user', userSchema);