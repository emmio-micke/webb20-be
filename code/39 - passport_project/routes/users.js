const express = require('express')
const router = express.Router()

// Login
router.get('/login', (request, response) => {
    response.render('login')
})

router.get('/register', (request, response) => {
    response.render('login')
})

router.post('/login', (request, response, next) => {
    // do stuff
})

router.post('/register', (request, response) => {
    // do stuff
})

router.get('/logout', (request, response) => {
    // do stuff
})

module.exports = router
