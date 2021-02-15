const fs = require("fs");

fs.readFile('random.json', 'utf8', (error, data) => {
    console.log(data)
})

