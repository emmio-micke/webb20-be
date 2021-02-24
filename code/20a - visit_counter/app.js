var cookieSession = require('cookie-session')
var express = require('express')

var app = express()

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.use(function (request, response, next) {
    // Update views
    request.session.views = (request.session.views || 0) + 1

    // Write response
    response.end(request.session.views + ' views')
})

app.listen(3000)