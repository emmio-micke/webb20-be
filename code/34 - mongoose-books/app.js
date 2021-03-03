const express = require('express')
const app = express()

const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb://localhost:27017/local_library')
const db = mongoose.connection

app.get('/', (request, response) => {
    const AuthorModel = require('./models/author')
    const BookModel = require('./models/book')
    const BookInstanceModel = require('./models/bookinstance')
    const GenreModel = require('./models/genre')
    response.render('index.ejs')
})

db.on('error', error => {
    console.log(error)
})

app.listen(3000)