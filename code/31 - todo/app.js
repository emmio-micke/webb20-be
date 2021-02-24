const express = require('express')
const app = express()

app.use('/public', express.static('assets'));


app.get('/', (request, response) => {
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
    response.render('index.ejs', { tasks: tasks })
})


app.listen(3000)
