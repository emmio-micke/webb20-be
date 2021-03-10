const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let books = []

app.get('/', (request, response) => {
    response.end('<h1>Hello</h1>')
})

app.post('/book', (request, response) => {
    const book = request.body

    console.log(book)
    books.push(book)

    response.end('Book was added')
})



app.listen(3000)