let mongoose = require('mongoose');
let bordel = require('./bordel');

let Schema = mongoose.Schema;

let kurwaSchema = new Schema({
    name : String,
    age : Number,
    bordel : {
        type : Schema.Types.ObjectId,
        ref : bordel
    }
});

module.exports = mongoose.model('kurwa', kurwaSchema);
