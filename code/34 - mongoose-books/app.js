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

    BookModel
        .findOne({
            title: 'The Name of the Wind (The Kingkiller Chronicle, #1)'
        })
        .populate('author')
        .populate('genre')
        .exec((error, book) => {
            if (error) {
                return handleError(error)
            }

            console.log(book)
            response.render('index.ejs', book)
        })
})

db.on('error', error => {
    console.log(error)
})

app.listen(3000)