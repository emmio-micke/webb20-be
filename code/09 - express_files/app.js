var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/html/index.html'));
});

app.get('/users', function (request, response) {
    response.sendFile(path.join(__dirname + '/html/users.html'));
});



app.listen(3000);
