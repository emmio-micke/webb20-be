const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', message => {
        // console.log('Recieved message: ' + message)
        io.emit('chat message', message)
    })

    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});