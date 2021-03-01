const express = require('express')
const app = express()

const monk = require('monk')
const db = monk('localhost:27017/nodetest1')

const bodyParser = require('body-parser')

app.use((request, response, next) => {
    request.db = db
    next()
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    const users = request.db.get('usercollection')
    users
        .find()
        .then(data => {
            response.render('userlist.ejs', { users: data })
        })

})

app.post('/adduser', (request, response) => {
    const users = request.db.get('usercollection')

    users.insert(request.body)
    response.redirect('/')
})

app.get('/edituser/:id', (request, response) => {
    const users = request.db.get('usercollection')
    users
        .find({ _id: request.params.id })
        .then(data => {
            if (data.length == 1) {
                response.render('edituser.ejs', data[0])
            }
            else {
                response.redirect('/')
            }
        })
})

app.get('/removeuser/:id', (request, response) => {
    const users = request.db.get('usercollection')

    users.remove({ _id: request.params.id })
    response.redirect('/')
})

app.post('/saveuser', (request, response) => {
    const users = request.db.get('usercollection')
    users.update(
        {
            _id: request.body.userid
        }, {
        $set: {
            username: request.body.username,
            email: request.body.email
        }
    })

    response.redirect('/')
})

app.listen(3000)
