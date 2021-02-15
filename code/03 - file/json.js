const fs = require("fs");

fs.readFile('random.json', 'utf8', (error, data) => {
    data = JSON.parse(data)

    console.log(data.results[0].name.first)
    console.log(data.results[0].name.last)

    console.log(data.results[0].location.street.name);
    console.log(data.results[0].location.street.number);

    console.log(data.results[0].location.postcode);
    console.log(data.results[0].location.city);

    console.log(data.results[0].phone);
})
