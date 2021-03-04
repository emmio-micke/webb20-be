require('dotenv').config({path: __dirname + '/.env'})

var http = require('http')

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    })

    response.write("<h1>Hello world</h1>")
    response.write("<p>Lorem ipsum</p>")

    response.end("kalle")
})

server.listen(process.env['PORT'] || 3001 )
