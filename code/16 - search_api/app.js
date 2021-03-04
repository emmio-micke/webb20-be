const https = require('https')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/html/index.html'))
})

app.post('/search-jokes', (request, response) => {
    response.type('text/html')

    const options = {
        hostname: 'icanhazdadjoke.com',
        path: '/search?term=' + request.body.search_term,
        headers: {
            'Accept': 'application/json'
        }
    }

    const api_request = https.request(options, api_response => {
        let data = '';

        api_response.on('data', chunk => {
            data += String(chunk)
        })

        api_response.on('end', () => {
            let json = JSON.parse(data)

            for (joke_object of json.results) {
                response.write(`<div>${joke_object.joke}</div>`)
                response.write('<hr>')
            }
            response.end();
        })
    })
    api_request.end();

})

app.listen(3000)