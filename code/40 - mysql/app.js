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

app.get('/api/users', (request, response) => {
    connection.query('SELECT employeeNumber, lastName, firstName, email FROM employees', (error, users) => {
        if (error) {
            throw error;
        }
        response.json(users)
    })
})

/*
const employee = { firstName: 'Winnie', officeCode: 1 };
connection.query('INSERT INTO employees (employeeNumber, firstName) VALUES (?, ?)', ['12345', 'Winnie'], (err, result) => {
    if (err) throw err;

    console.log('Last insert ID:', result.insertId);
});

connection.query(
    'UPDATE employees SET location = ? WHERE ID = ?',
    ['South Africa', 5],
    (err, result) => {
        if (err) throw err;

        console.log(`Changed ${result.changedRows} row(s)`);
    }
);

connection.query(
    'DELETE FROM employees WHERE id = ?', [5], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);
*/


app.listen(3000)