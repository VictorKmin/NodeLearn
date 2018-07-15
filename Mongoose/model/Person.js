let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personSchema = new Schema({
    // Аналог валідації. Вказуємо що має бути
    name : {
        // тип данних, обовязкове заповнення, деволтне значення
        type : String,
        required  : true,
        default  : 'UserName'
    },
    surname: String,
    age : {
        type : Number,
        min : 0,
        max: 100
    },
    gender: String
});

// кастомний метод пошуку.
personSchema.methods.findOlder = function(cb) {
  this.model('user').find({age : {$gte : this.age}},cb)
};

personSchema.statics.findPersonByName = function (name, cb) {
    return this.find({name : name},cb)
};


module.exports =  {
   User : mongoose.model('user', personSchema)
};