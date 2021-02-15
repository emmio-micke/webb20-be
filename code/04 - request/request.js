const https = require('https')

const options = {
    hostname: 'randomuser.me',
    path: '/api',
    method: 'GET'
}

const request = https.request(options, response => {
    console.log(`statusCode: ${response.statusCode}`)

    /*
    document.getElementById("something").addEventListener("click", function () {
        alert("du klickade på knappen")
    })
    */

    response.on('data', d => {
        console.log(String(d))
    })
})

request.on('error', error => {
    console.error(error)
})

request.end()
