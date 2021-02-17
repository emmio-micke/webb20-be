const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url, true).query;

    if ('plus' === queryObject.sign) {
        console.log(`${queryObject.tal1} + ${queryObject.tal2} = ${Number(queryObject.tal1) + Number(queryObject.tal2)}`)
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Lorem ipsum</h1>');
    response.write(`<p>${queryObject.tal1} + ${queryObject.tal2} = ${Number(queryObject.tal1) + Number(queryObject.tal2)}</p>`);
    response.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
