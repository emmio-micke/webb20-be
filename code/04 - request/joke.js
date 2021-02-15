const https = require('https')

const options = {
    hostname: 'icanhazdadjoke.com',
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

const request = https.request(options, response => {
    response.on('data', d => {
        data = JSON.parse(d)
        console.log(data.joke)
    })
})

request.on('error', error => {
    console.error(error)
})

request.end()
