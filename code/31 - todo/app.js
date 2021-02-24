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

app.get('/delete/:id', (request, response) => {
    let tasks = request.session.tasks || []

    tasks = tasks.filter(task => {
        return task.id != request.params.id
    })

    request.session.tasks = tasks

    response.redirect('/')
})

app.get('/edit/:id', (request, response) => {
    let tasks = request.session.tasks || []

    let current_tasks = tasks.filter(task => task.id == request.params.id)

    let view_task
    if (current_tasks.length == 1) {
        view_task = current_tasks[0]
    } else {
        response.redirect('/')
    }

    response.render('edit.ejs', view_task)
})


app.listen(3000)
