let mongoose = require('mongoose');
let kurwa = require('./kurwa');
let Schema = mongoose.Schema;

let bordelSchema = new Schema({

    name: String,
    kurwas: [{
        type : Schema.Types.ObjectId,
        ref : 'kurwa'
    }]

});

module.exports = mongoose.model('bordel', bordelSchema);
