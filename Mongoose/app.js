let express = require('express');
let mongoose = require('mongoose');
let User = require('./model/Person').User;
let app = express();
let router = express.Router();

mongoose.connect('mongodb://localhost/userBase');

app.get('/', function (req, res) {
    // let user = new User({
    //     name: 'Held',
    //     surname: 'Tajfun',
    //     age: 8,
    //     gender: 'male'
    // });
    // user.save(function (err, doc) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log(doc)
    //     }
    // });

    // User.find().select('name surname')
    //     .where('age').eq({$gte : 10})
    //     .exec(function (err, docs) {
    //         console.log(docs)
    //     });
    //
    User.findPersonByName('Held', function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }
    });

    res.end('hello');
});

app.listen(3000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('OK')
    }
});