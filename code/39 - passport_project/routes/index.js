const express = require('express')
const router = express.Router()

// Login page
router.get('/', (request, response) => {
    response.render('welcome')
})

// Register page
router.get('/register', (request, response) => {
    response.render('register')
})

module.exports = router
