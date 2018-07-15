let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personSchema = new Schema({
    name : String,
    surname: String,
    age : Number,
    gender: String
});

