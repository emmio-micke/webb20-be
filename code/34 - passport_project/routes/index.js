const express = require('express')
const router = express.Router()

const { ensureAuthenticated } = require('../config/auth')

// Login page
router.get('/', (request, response) => {
    response.render('welcome')
})

// Dashboard
router.get('/dashboard', ensureAuthenticated, (request, response) => {
    response.render('dashboard', { user: request.user })
})



// Register page
router.get('/register', (request, response) => {
    response.render('register')
})

module.exports = router
