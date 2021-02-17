var express = require('express');
var app = express();

const hostname = 'localhost';
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/instructor/:name', (request, response) => {
    response.send(`Läraren heter ${request.params.name}`);
});

var server = app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
