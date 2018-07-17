//TODO нормальний роутер
let userSchema = require('./models/User');
require('./config/passportConfig');

let express = require('express');
let bodyParser = require('body-parser');
let exphbs = require('express-handlebars');
let mongoose = require('mongoose');
let path = require('path');
let passport = require('passport');
let session = require('express-session');

let app = express();

mongoose.connect('mongodb://localhost/loginBase');

let views = path.join(__dirname, 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs',exphbs({defaultLayout: path.join(views, 'layouts', 'main.hbs')}));
app.set('view engine', '.hbs');
app.set('views', views);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend : true}));

app.use(session({
    secret : 'secretWord',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// psprt();

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/profile', function (req, res) {
    res.render('profile', {
        user : req.user
    });
});

app.post('/profile',passport.authenticate('localSignUp',
    {feilureRedirect : '/',
      // successRedirect : '/profile',
        session : false
    }),function (req, res) {
    console.log(req.body);
    res.render('profile');
});

app.listen(3000, function (err) {
   if (err) {
       console.log(err);
   } else {
       console.log('OK')
   }
});