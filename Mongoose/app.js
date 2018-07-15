let express = require('express');
let app = express();
let router = express.Router();



app.get ('/', function (req, res) {
    res.end('Hello')
});

app.listen(3000 , function (err) {
    if (err) {
        console.log(err)
    }  else {
        console.log('OK')
    }
});