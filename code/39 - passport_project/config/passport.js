const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/users')


passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    function (username, password, done) {
        User.findOne({ username: username }, function (error, user) {
            if (error) {
                return done(error)
            }

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' })
            }

            bcrypt.compare(password, user.password, (error, isMatch) => {
                if (error) {
                    throw error
                }

                if (isMatch) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Incorrect password.' })
                }
            })
        })
            .catch(error => console.log(error))
    }
))