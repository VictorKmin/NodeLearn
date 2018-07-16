let bordelRouter = require('./router/bordelRouter');
let kurwaRouter = require('./router/kurwaRouter');

let express = require('express');
let mongoose = require('mongoose');
let bodyParse = require('body-parser');

let app = express();
mongoose.promise = global.Promise;

mongoose.connect('mongodb://localhost/restDB');

// app.use(bodyParse.json);
// app.use(bodyParse.urlencoded);

app.use('/bordels', bordelRouter);
app.use('/kurwas', kurwaRouter);


app.get('/', function (req, res) {
    res.end('hello world');
});


app.listen(3000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('OK')
    }
});