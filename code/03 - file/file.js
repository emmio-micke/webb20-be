const fs = require("fs");

fs.readFile('data.txt', 'utf8', (error, data) => {
    console.log(data)
})

console.log(__dirname)
