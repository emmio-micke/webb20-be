const express = require('express')
const router = express.Router()

const User = require('../models/users')
const bcrypt = require('bcrypt')

// Login
router.get('/login', (request, response) => {
    response.render('login')
})

router.get('/register', (request, response) => {
    response.render('register')
})

router.post('/login', (request, response, next) => {
    // do stuff
})

router.post('/register', (request, response) => {
    const { name, email, password } = request.body

    let errors = []

    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`)

    if (!name || !email || !password) {
        errors.push({ msg: "Please fill out all fields" })
    }

    if (password.length < 6) {
        errors.push({ msg: "Use at least 6 characters for your password" })
    }

    if (errors.length > 0) {
        response.render('register', {
            errors, name, email, password
        })
    } else {
        const newUser = new User({
            name, email, password
        })

        bcrypt.hash(password, 10, function (error, hash) {
            // Store hash in your password DB.
            newUser.password = hash

            newUser
                .save()
                .then(value => {
                    request.flash('success_msg', 'You have been registered!')
                    response.redirect('/users/login')
                })
                .catch(error => console.log(error))
        });

    }

})

router.get('/logout', (request, response) => {
    // do stuff
})

module.exports = router
