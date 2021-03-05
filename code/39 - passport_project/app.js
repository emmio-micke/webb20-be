const express = require('express')
const app = express()
const router = express.Router()

const mongoose = require('mongoose')

const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')


mongoose.connect('mongodb://localhost:27017/login')
    .then(() => console.log('connected to db'))
    .catch(error => console.log(error))

// EJS
app.set('view engine', 'ejs')
app.use(expressEjsLayout)

app.use(express.urlencoded({ extended: false }))

app.use('/public', express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(3000)

