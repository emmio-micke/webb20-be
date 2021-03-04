const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

let profile_data = {
    first_name: '',
    last_name: '',
    email: ''
}

app.get('/', (request, response) => {
    response.render('index.ejs', profile_data)
})

app.post('/', (request, response) => {
    profile_data.first_name = request.body.first_name
    profile_data.last_name = request.body.last_name
    profile_data.email = request.body.email

    // db.update(/*some data*/)

    response.render('index.ejs', profile_data)
})

app.listen(3000)