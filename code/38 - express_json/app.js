const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function (request, response) {
    response.send({
        name: 'Micke',
        age: 44
    })
})

app.get('/2', function (request, response) {
    response.json({
        name: 'Micke',
        age: 44
    })
})

app.listen(3000)
