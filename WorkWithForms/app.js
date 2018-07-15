let express = require("express");
let app = express();
let path = require("path");
//боді-парсер це модуль який парсить форми, які приходять на урлу
let bodyParser = require("body-parser");
// модуль, який ставить двіжок для відображення хтмл
let expBars = require("express-handlebars");
let session = require("express-session");
let cookieParser = require('cookie-parser');

// тут вказується шлях, де лежать вюшки (но ето неточно)
app.use(express.static(path.join(__dirname, 'public', 'views')));

app.engine('.hbs', expBars({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, 'public', 'layouts' ,'main.hbs')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'public', 'views'));
// вказую, що буде парсити наш боді парсер.
// він парсить джейсон обєкти, які прилітають
//і те, що йде в урлах. Опція екстендед парсить розшерено. Хз шо то
app.use(session({secret : 'dsdd'}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    req.session.homer = 'Hello Homer';
    res.cookie('name', 'cookie', {maxAge : 60*60*24*2});
    res.render('index');
});
// через опцію query витягую параметри з форми
app.get('/form', function (req, res) {
console.log(req.session.homer);
console.log(req.cookies.name);
    res.render('data',{
        'age' : req.query.age,
        'name' : req.query.name
    } );
});

app.listen(3000, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('All Right')
    }
});