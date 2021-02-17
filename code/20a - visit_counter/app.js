var cookieSession = require('cookie-session')
var express = require('express')

var app = express()

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.use(function (req, res, next) {
    // Update views
    req.session.views = (req.session.views || 0) + 1

    // Write response
    res.end(req.session.views + ' views')
})

app.listen(3000)