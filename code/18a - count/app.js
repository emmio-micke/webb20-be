const express = require('express')
const app = express()

app.get('/', (request, response) => {
    let input_number = Number(request.query.count_value || 0);
    response.render('index.ejs', { number: input_number })
})

app.listen(3000)