let http = require("http");
let fs = require("fs");
let url = require("url");
let queryString = require("querystring");
let server = http.createServer();

// метод для рендерінгу HTML файлів
function renderHtml(path, response) {

    // // ЧЕРЕЗ РІД ФАЙЛ
    // fs.readFile(path, function (err, data) {
    //     if (err) {
    //         response.statusCode = 500;
    //     }
    //     response.write(data);
    //     response.end();
    // })


    // ЧЕРЕЗ СТРІМ
let readStr = fs.createReadStream(path);
//Якщо приходить data, тоді я малюю (resp.write) чанк
    readStr.on("data", function (chunk) {
        response.write(chunk)
    });
    //Якщо енд, то я закриваю відповідь
    readStr.on("end", function () {
        response.end();

    });

}
// Створюю реквест, якщо прийде реквест, тоді виконається функція, яка
// є настпуною в server.on
server.on("request", function (request,response) {
    //Перший метод ловить урлу і зчитує її
    // Другий параметр, це parseQueryString, який парсить урлу
    let parse = url.parse(request.url, true);
   response.setHeader("Content-Type", "text/html");
   // response.statusCode = 200;

    switch (parse.pathname) {
        case "/" : {
            // ДЛЯ МЕТОДУ GET
            // renderHtml("./index.html",response);
            // response.write(parse.query.fName + " NEM");
            //response.end();

            //ДЛЯ МЕТОДУ POST
            renderHtml("./index.html",response);
            request.on("data", function (data) {
                //парсаю дату на пошук параметрів
                let parseQ = queryString.parse(data.toString());
                //Зчитаую праметр fName з файлу about.html
                response.write(parseQ.fName);
            });
        }
        break;

        // Якщо ловиться урла about, тоді я переходжу на ебаут
        case "/about" : {
            renderHtml("./about.html",response);
        }
    }
});

// порт, на якуому все працює
server.listen(3000);