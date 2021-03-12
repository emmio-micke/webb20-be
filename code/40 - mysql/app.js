const express = require('express')
const app = express()

const mysql = require('mysql')

app.set('view engine', 'ejs')

const connection = mysql.createConnection({
    host: 'localhost',
    // port: '3306',
    socketPath: '/Users/micke/Library/Application Support/Local/run/d5uuTh7we/mysql/mysqld.sock',
    user: 'root',
    password: 'root',
    database: 'classicmodels'
})

connection.connect(error => {
    if (error) {
        console.log(error)
    }

    console.log('Connected')
})

app.get('/users', (request, response) => {
    connection.query('SELECT * FROM employees', (error, users) => {
        if (error) {
            throw error;
        }
        response.render('users', { users: users })
    })
})


app.listen(3000)