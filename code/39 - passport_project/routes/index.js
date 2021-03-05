const express = require('express')
const router = express.Router()

// Login page
router.get('/', (request, response) => {
    response.render('welcome')
})

// Dashboard
router.get('/dashboard', (request, response) => {
    response.render('dashboard')
})



// Register page
router.get('/register', (request, response) => {
    response.render('register')
})

module.exports = router
