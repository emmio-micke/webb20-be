const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'passwd'
    },
    function (username, password, done) {
        User.findOne({ username: username }, function (error, user) {
            if (error) {
                return done(error)
            }

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' })
            }

            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' })
            }

            /*
            if (!user || !user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect username or password.' })
            }
            */
        })
    }
))