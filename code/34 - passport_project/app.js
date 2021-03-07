const express = require('express')
const app = express()
const router = express.Router()

const mongoose = require('mongoose')

const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')
// const { response } = require('express')
const passport = require('passport')

require('./config/passport')(passport)


mongoose.connect('mongodb://localhost:27017/login')
    .then(() => console.log('connected to db'))
    .catch(error => console.log(error))

// EJS
app.set('view engine', 'ejs')
app.use(expressEjsLayout)

app.use(express.urlencoded({ extended: false }))

app.use('/public', express.static(path.join(__dirname, 'public')));

// Sessions
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Flash
app.use(flash())
app.use((request, response, next) => {
    response.locals.success_msg = request.flash('success_msg')
    response.locals.error_msg = request.flash('error_msg')
    response.locals.error = request.flash('error')
    next()
})


// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(3000)

