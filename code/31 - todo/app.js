const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

app.use('/public', express.static('assets'));

app.use(cookieSession({
    name: 'session',
    keys: ['veryimportantsecret', 'notsoimportantsecret']
}))

app.use(bodyParser.urlencoded())

app.get('/', (request, response) => {
    let tasks = request.session.tasks || []
    /*
    let tasks = [
        {
            id: 1,
            task: 'Tvätta kläder',
            done: false
        },
        {
            id: 2,
            task: 'Handla',
            done: false
        },
        {
            id: 3,
            task: 'Plugga node.js',
            done: false
        }
    ];
    */
    response.render('index.ejs', { tasks: tasks })
})

app.post('/add', (request, response) => {
    let tasks = request.session.tasks || []

    let max_value = 0
    for (let task of tasks) {
        if (task.id > max_value) {
            max_value = task.id
        }
    }
    max_value++

    tasks.push({
        id: max_value,
        task: request.body.todo_item,
        done: false
    })

    request.session.tasks = tasks

    response.redirect('/')
})


app.listen(3000)
