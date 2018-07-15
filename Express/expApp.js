let express = require("express");
let server = express();


// .use дає можливість відхоплювати абсолютно всі запити з всіх url
// та всіх REST методів
// "/users" перед функцією дає можливість ловити всі usl які
// починаються з /users/***/****
//use ставиться також в самому кінці, що б ловити помилки.
// наприклад, якщо ввели невірну урлу вона біжить по всіх методах
// а потім якщо не знаходить то падає на останній use і так нема 404
server.use(/* "/users" , */function (req,res, next) {
    res.write("server.use");
    next();
});

// Параметр next говорить про те, що цю урлу буде обробляти
// ще одна функція. Воно виконує функцію і передає її далі
server.get("/", function (req, res, next) {
    res.write("Hello");
    next();
});
//Функція, яка ловиться next()
server.get("/", function (req, res, next) {
    res.end("World");
});
server.use(function (req,res, next) {
    console.log("404");
    next();
});

server.listen(4000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("OK")
    }
});